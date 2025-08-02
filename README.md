# Revolt Motors Voice Assistant Clone

## 🧠 Tech Stack
- Backend: Node.js + Express
- Frontend: Vanilla HTML/JS
- Voice AI: Gemini Live API (gemini-2.5-flash-preview-native-audio-dialog)

## ⚙️ Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/your-username/revolt-voicebot.git
cd revolt-voicebot/server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file:
```
GEMINI_API_KEY=your_api_key_here
```

### 4. Start Backend
```bash
node index.js
```

### 5. Open Frontend
Open `client/index.html` directly in your browser (allow mic access).

## ✅ Features
- Natural conversation
- Interruption support
- Fast latency (1–2 sec)
- Domain-restricted to Revolt Motors

## 🔗 Useful Links
- [Gemini Live API Docs](https://ai.google.dev/gemini-api/docs/live)
- [Playground](https://aistudio.google.com/live)
