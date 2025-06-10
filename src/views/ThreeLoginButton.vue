<template>
  <div class="login-buttons">
    <div class="dropdown" v-if="!loggedInUser">
      <button class="dropbtn">LOGIN / SIGN UP</button>
      <div class="dropdown-content">
        <a @click="goToCustomerLogin">Customer Login</a>
        <a @click="goToDealerLogin">Dealer Login</a>
        <a @click="goToAdminLogin">Admin Login</a>
        <a @click="goToRegister">Sign Up</a>
      </div>
    </div>
    <div v-if="loggedInUser" class="logged-in-buttons">
      <button @click="showUserInfo">{{ loggedInUser.email }}</button>
      <button @click="logout">Logout</button>
    </div>
  </div>

  <div v-if="userInfoVisible" class="user-info">
    <p><strong>Logged in as:</strong></p>
    <p><strong>Name:</strong> {{ loggedInUser.name }}</p>
    <p><strong>Email:</strong> {{ loggedInUser.email }}</p>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import router from '@/router';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      userInfoVisible: false,
    };
  },
  computed: {
    ...mapState(['loggedInUser', 'messages']),
    ...mapGetters(['isAdmin']),
  },
  methods: {
    ...mapActions(['addMessage', 'fetchMessages', 'logoutUser']),
    async submitForm() {
      try {
        await this.addMessage(this.form);
        alert('Thank you for your message. We will get back to you shortly.');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (err) {
        console.error('Error adding message:', err);
      }
    },
    goToCustomerLogin() {
      router.push('/CustomerLoginPage');
    },
    goToDealerLogin() {
      router.push('/DealerLoginPage');
    },
    goToAdminLogin() {
      router.push('/AdminLoginPage');
    },
    goToRegister() {
      router.push('/RegisterPage');
    },
    showUserInfo() {
      this.userInfoVisible = !this.userInfoVisible;
    },
    async logout() {
      try {
        await this.logoutUser();
        router.push('/');
      } catch (err) {
        console.error('Error logging out:', err);
      }
    }
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
}

.contact-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #87ceeb;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.login-buttons {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dropbtn {
  background-color: #87ceeb;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #0056b3;
}

.logged-in-buttons button {
  margin: 0 2px;
}

.user-info {
  text-align: center;
  margin-top: 20px;
}

.admin-message-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #ddd;
}
</style>
