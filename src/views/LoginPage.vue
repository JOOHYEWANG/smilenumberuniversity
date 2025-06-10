<template>
  <div id="app">
    <h1>Welcome to Our App</h1>
    <div v-if="!isLoggedIn">
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <button @click="register">Register</button>
    </div>
    <div v-else>
      <p>Welcome, {{ username }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 여기에 실제 로그인 로직을 추가합니다.
      // 예를 들어, 서버에 요청을 보내고 성공하면 isLoggedIn을 true로 설정합니다.
      this.isLoggedIn = true; // 실제 로그인 성공 시 설정
    },
    register() {
      // 여기에 실제 가입 로직을 추가합니다.
      // 예를 들어, 서버에 요청을 보내고 성공하면 사용자에게 알림을 보냅니다.
      alert('Registration is not implemented yet.');
    },
    logout() {
      this.isLoggedIn = false;
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style>
/* 스타일을 여기에 추가할 수 있습니다. */
</style>
