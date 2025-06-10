const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const messages = require('./routes/messages');

const app = express();
const PORT = process.env.PORT || 3000; // 백엔드 서버를 5000번 포트로 설정

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// 라우트 설정
app.use('/api/messages', messages);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
