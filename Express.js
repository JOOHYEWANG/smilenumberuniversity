const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

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
  res.json({ fileUrl: `/uploads/${req.file.filename}` });
});

// 정적 파일 제공
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
