<template>
  <div class="chat-gpt">
    <h1 class="white-text">"Child's Study with ChatGPT"</h1>
    <textarea v-model="userInput" placeholder="Please enter your question"></textarea>
    <button @click="sendMessage">Send</button>
    <div v-if="loading" class="loading">로딩 중...</div>
    <div v-if="response" class="response">{{ response }}</div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from '@/axios'; // axios 인스턴스를 가져옵니다

export default {
  data() {
    return {
      userInput: '',
      response: '',
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userInput) return;

      this.loading = true;
      this.response = '';
      this.errorMessage = '';

      try {
        const result = await axios.post('chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: this.userInput }],
          max_tokens: 100,
        });

        console.log('API Response:', result.data); // 디버깅 로그

        this.response = result.data.choices[0].message.content.trim();
      } catch (error) {
        console.error('Error fetching the response:', error);
        if (error.response) {
          console.error('Error response data:', error.response.data);
          this.errorMessage = `에러가 발생했습니다: ${error.response.data.error.message}`;
        } else {
          this.errorMessage = '에러가 발생했습니다. 다시 시도해주세요.';
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.chat-gpt {
  max-width: 650px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  background-color: #999;
}

textarea {
  width: 90%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #706f6f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #545454;
}

.loading {
  text-align: center;
  margin-top: 10px;
}

.response {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  white-space: pre-wrap;
}

.error {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: #ffe6e6;
  color: red;
  white-space: pre-wrap;
}

.white-text {
  color: white;
}
</style>
