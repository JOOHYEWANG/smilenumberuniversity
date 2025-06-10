<template>
  <div class="login-page">
    <h1>Admin Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="admin-email">Email:</label>
        <input type="email" id="admin-email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="admin-password">Password:</label>
        <input type="password" id="admin-password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '@/router';

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
        await this.loginUser({ email: this.email, password: this.password });
        if (this.$store.getters.isAdmin) {
          alert('Admin logged in successfully!');
          router.push('/AdminMessagesPage');
        } else {
          alert('You are not an admin.');
        }
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

.admin-credentials {
  margin-top: 20px;
  text-align: left;
}
</style>
