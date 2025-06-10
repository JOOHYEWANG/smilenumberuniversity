const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// 메시지 생성
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error saving message' });
  }
});

// 모든 메시지 가져오기
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

module.exports = router;
