import axios from 'axios';

// 새로운 API 키를 여기에 포함합니다.
const apiKey = 'sk-proj-s4XvAWp4WiBPxWoJn0DPT3BlbkFJ91IrEKoB7QemyyLhi88q';

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    // Authorization 헤더에 새로운 API 키를 추가합니다.
    'Authorization': `Bearer ${apiKey}`
  },
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default instance;
