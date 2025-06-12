<template>
  <div>
    <div class="RainbowMenu-container">
      <RainbowMenu />
    </div>
    
    <br>

    <div class="contact-page">
      <h3>CONTACT SMILENUMBER MOTORS</h3>
      <div class="contact-info">
        <p>If you have any questions or need further information, please feel free to contact us:</p>
        <br>
        <ul>
          <li><strong>Phone:</strong> +82 10 3319 3141</li>
          <li><strong>Email:</strong> joohyewang@gmail.com</li>
          <li><strong>Address:</strong> PI-si, Gangwon-do, South Korea</li>
        </ul>
      </div>
      <div class="contact-form">
        <h3>Send Us a Message</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    <div class="MapSearch-grid-container">
      <MapSearchComponent />
    </div>

    <div class="Map-grid-container">
      <MapVue />
    </div>
  </div>
</template>

<script>
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form);
    }
  }
}
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
  background-color: #999;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: ##DAA520;
}

.user-info {
  text-align: center;
  margin-top: 20px;
}

.MapSearch-grid-container {
  margin-top: 50px;
}

.Map-grid-container {
  margin-top: 80px;
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
