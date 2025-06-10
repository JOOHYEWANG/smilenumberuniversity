<template>
  <div>
    <h1>Upload a File</h1>
    <input type="file" @change="onFileChange">
    <button @click="uploadFile">Upload</button>

    <div v-if="statusMessage" class="status-message">{{ statusMessage }}</div>

    <div v-if="uploadedFiles.length">
      <h2>Uploaded Files</h2>
      <ul>
        <li v-for="file in uploadedFiles" :key="file.fileUrl">
          <strong>File Name:</strong> {{ file.originalName }}<br>
          <a :href="file.fileUrl" target="_blank">Open File</a>
          <button @click="deleteFile(file.fileUrl)">Delete</button>
          <div v-if="isImage(file.fileUrl)">
            <img :src="file.fileUrl" alt="Uploaded Image" style="max-width: 100%;">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '../axios'; // axios 인스턴스 경로

export default {
  data() {
    return {
      selectedFile: null,
      uploadedFiles: [],
      statusMessage: '', // 상태 메시지 저장
    };
  },
  created() {
    this.loadUploadedFiles();
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    isImage(fileUrl) {
      return fileUrl && fileUrl.match(/\.(jpeg|jpg|gif|png)$/);
    },
    async uploadFile() {
      if (!this.selectedFile) {
        this.statusMessage = 'Please select a file first.';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        const response = await axios.post('upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const uploadedFile = {
          fileUrl: response.data.fileUrl,
          originalName: this.selectedFile.name // 원래 파일 이름을 저장
        };
        this.uploadedFiles.push(uploadedFile);
        this.saveUploadedFiles();
        this.statusMessage = 'File uploaded successfully!';
        console.log('파일 업로드 성공:', response.data);
      } catch (error) {
        this.statusMessage = `File upload failed! ${error.response ? error.response.data : error.message}`;
        console.error('파일 업로드 오류:', error.response ? error.response.data : error.message);
      }
    },
    async deleteFile(fileUrl) {
      try {
        await axios.delete('delete', {
          params: { fileUrl },
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.uploadedFiles = this.uploadedFiles.filter(file => file.fileUrl !== fileUrl);
        this.saveUploadedFiles();
        this.statusMessage = 'File deleted successfully!';
        console.log('파일 삭제 성공');
      } catch (error) {
        this.statusMessage = `File deletion failed! ${error.response ? error.response.data : error.message}`;
        console.error('파일 삭제 오류:', error.response ? error.response.data : error.message);
      }
    },
    saveUploadedFiles() {
      localStorage.setItem('uploadedFiles', JSON.stringify(this.uploadedFiles));
    },
    loadUploadedFiles() {
      const savedFiles = localStorage.getItem('uploadedFiles');
      if (savedFiles) {
        this.uploadedFiles = JSON.parse(savedFiles);
      }
    }
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
button {
  margin-top: 5px;
  margin-right: 10px;
}
.status-message {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
</style>
