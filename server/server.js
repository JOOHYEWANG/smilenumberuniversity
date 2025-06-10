const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json()); // JSON 요청을 처리하기 위해 추가

// 파일 업로드를 활성화하고 파일 크기 제한 설정 (50MB)
app.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB
}));

// 정적 파일 서빙 (uploads 폴더)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 메모리 저장소에 사용자 데이터 관리
const users = [];

// 회원가입 엔드포인트
app.post('/register', (req, res) => {
  const { email, password, role } = req.body;
  console.log('Register request received:', { email, password, role }); // 요청 데이터 로그
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    console.log('User already exists');
    return res.status(400).send({ message: 'User already exists' });
  }

  users.push({ email, password, role });
  console.log('User registered successfully:', { email, password, role });
  res.status(201).send({ message: 'User registered successfully' });
});

// 로그인 엔드포인트
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', { email, password }); // 요청 데이터 로그

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).send({ user });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

// 파일 업로드 엔드포인트
app.post('/upload', async (req, res) => {
  try {
    if (!req.files) {
      res.status(400).send({
        status: false,
        message: 'No file uploaded'
      });
    } else {
      let file = req.files.file;

      // Use the mv() method to place the file in the desired folder
      file.mv(path.join(__dirname, 'uploads', file.name));

      // Send response
      res.send({
        status: true,
        message: 'File is uploaded',
        fileUrl: '/uploads/' + file.name
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
