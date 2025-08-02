const express = require('express');
const router = express.Router();
const { startLiveChat } = require('../services/geminiService');

router.post('/start', startLiveChat);

module.exports = router;
