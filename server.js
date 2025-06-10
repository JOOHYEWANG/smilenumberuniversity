const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일 저장 경로 설정
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // 파일 이름 설정
  },
});

const upload = multer({ storage: storage });

// 파일 업로드 엔드포인트
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    console.error('No file uploaded.');
    return res.status(400).send('No file uploaded.');
  }
  console.log('File uploaded:', req.file);
  res.json({ fileUrl: `/uploads/${req.file.filename}` });
});

// 정적 파일 제공
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
