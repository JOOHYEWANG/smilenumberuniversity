<template>
  <div class="upload-page">
    <h1>Dealer File Upload</h1>
    <form @submit.prevent="uploadFile">
      <div class="form-group">
        <label for="file-upload">Upload File:</label>
        <input type="file" id="file-upload" @change="handleFileUpload" required>
      </div>
      <button type="submit">Upload</button>
    </form>
    <div v-if="fileUrl" class="file-preview">
      <h2>Uploaded File Preview:</h2>
      <img v-if="isImage(fileUrl)" :src="fileUrl" alt="Uploaded File" />
      <p v-else>{{ fileName }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      fileUrl: null,
      fileName: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.fileName = this.file.name;
      console.log('File selected:', this.file);
    },
    async uploadFile() {
      if (!this.file) {
        alert('Please select a file to upload.');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await axios.post('http://localhost:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }

        this.fileUrl = `http://localhost:3000${response.data.fileUrl}`;
        alert('File uploaded successfully!');
        console.log('Uploaded file URL:', this.fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload file.');
      }
    },
    isImage(fileUrl) {
      return /\.(jpg|jpeg|png|gif)$/.test(fileUrl);
    },
  },
};
</script>

<style scoped>
.upload-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.file-preview {
  margin-top: 20px;
}

.file-preview img {
  max-width: 100%;
  height: auto;
}
</style>
