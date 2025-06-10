const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const VUE_FILES_DIR = path.join(__dirname, 'vue-files');

if (!fs.existsSync(VUE_FILES_DIR)) {
  fs.mkdirSync(VUE_FILES_DIR);
}

app.post('/api/upload-vue-file', (req, res) => {
  const { name, content } = req.body;

  if (!name || !content) {
    return res.status(400).json({ message: 'Name and content are required.' });
  }

  const filePath = path.join(VUE_FILES_DIR, name);
  fs.writeFileSync(filePath, content, 'utf8');

  res.status(201).json({ message: 'Vue file uploaded successfully.' });
});

app.get('/api/vue-files', (req, res) => {
  fs.readdir(VUE_FILES_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read vue files directory.' });
    }

    const vueFiles = files.map(file => ({
      name: file,
      url: `/vue-files/${file}`
    }));

    res.json(vueFiles);
  });
});

app.use('/vue-files', express.static(VUE_FILES_DIR));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
