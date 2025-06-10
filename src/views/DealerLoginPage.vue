<template>
  <div class="login-page">
    <h1>Dealer Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="dealer-email">Email:</label>
        <input type="email" id="dealer-email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="dealer-password">Password:</label>
        <input type="password" id="dealer-password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    async login() {
      try {
        console.log('Login attempt with:', { email: this.email, password: this.password }); // 요청 데이터 로그
        await this.loginUser({ email: this.email, password: this.password });
        alert('Dealer logged in successfully!');
        this.$router.push('/DealerFileUploadPage');
      } catch (error) {
        alert('Invalid email or password');
        console.error('Login failed:', error);
      }
    },
  },
};
</script>

<style scoped>
.login-page {
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
