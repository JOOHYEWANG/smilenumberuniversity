// server/server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
