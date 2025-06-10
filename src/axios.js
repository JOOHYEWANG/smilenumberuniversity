import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // 백엔드 서버의 포트를 5000번으로 설정
});

export default instance;
