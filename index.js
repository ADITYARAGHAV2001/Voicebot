const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { startLiveChat } = require('./services/geminiService');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/live/start', startLiveChat);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
