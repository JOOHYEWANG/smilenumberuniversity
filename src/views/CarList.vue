<template>
  <div>
    <h1>Car List</h1>
    <ul>
      <li v-for="car in cars" :key="car.id">
        <router-link :to="{ name: 'CarDetailWrapper', params: { id: car.id } }">
          <img :src="car.image" :alt="car.name" />
          <p>{{ car.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cars: []
    };
  },
  created() {
    axios.get('/api/cars')
      .then(response => {
        this.cars = response.data;
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 20px 0;
}
img {
  width: 200px;
  height: auto;
}
</style>
