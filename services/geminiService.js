const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
let liveChat = null;

async function startLiveChat(req, res) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    if (!liveChat) {
      liveChat = await model.startChat({
        systemInstruction: {
          role: "system",
          parts: [
            {
              text: "You are Rev, a helpful assistant for Revolt Motors. Only respond to questions about Revolt vehicles, pricing, service, and related queries. Never discuss unrelated topics."
            }
          ]
        }
      });
    }

    const userText = req.body.message;

    const result = await liveChat.sendMessage(userText);
    const geminiResponse = result.response;
    const responseText = geminiResponse ? geminiResponse.text() : "Sorry, I didn’t catch that.";

    res.json({ response: responseText });
  } catch (error) {
    console.error("Error in live chat:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { startLiveChat };
