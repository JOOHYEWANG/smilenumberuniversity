<template>
  <div class="admin-message-page">
    <h1>Admin Message Page</h1>
    <div v-if="isAdmin">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(message, index) in messages" :key="index">
            <td>{{ message.name }}</td>
            <td>{{ message.email }}</td>
            <td>{{ message.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>You do not have permission to view this page.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['messages', 'loggedInUser']),
    ...mapGetters(['isAdmin']),
  },
  methods: {
    ...mapActions(['fetchMessages']),
  },
  mounted() {
    console.log('isAdmin:', this.isAdmin);
    console.log('loggedInUser:', this.loggedInUser);
    if (this.isAdmin) {
      this.fetchMessages();
    }
  },
};
</script>

<style scoped>
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
