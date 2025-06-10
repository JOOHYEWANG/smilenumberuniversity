<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="register-email">Email:</label>
        <input type="email" id="register-email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="register-password">Password:</label>
        <input type="password" id="register-password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="register-role">Role:</label>
        <input type="text" id="register-role" v-model="role" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      role: ''
    };
  },
  methods: {
    async register() {
      try {
        console.log('Register attempt with:', { email: this.email, password: this.password, role: this.role }); // 요청 데이터 로그
        const response = await axios.post('http://localhost:3000/register', {
          email: this.email,
          password: this.password,
          role: this.role
        });
        console.log('Register response received:', response.data); // 응답 데이터 로그
        alert('User registered successfully!');
        this.$router.push('/DealerLoginPage');
      } catch (error) {
        alert('Error registering user');
        console.error('Registration failed:', error);
      }
    }
  }
};
</script>

<style scoped>
.register-page {
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
</style>
