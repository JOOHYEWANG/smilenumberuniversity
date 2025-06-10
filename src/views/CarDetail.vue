<template>
  <div v-if="car">
    <h1>{{ car.name }}</h1>
    <img :src="car.image" :alt="car.name" />
    <p>{{ car.description }}</p>
    <h2>Specifications</h2>
    <ul>
      <li>Horsepower: {{ car.specs.horsepower }}</li>
      <li>Torque: {{ car.specs.torque }}</li>
      <li>Weight: {{ car.specs.weight }} kg</li>
      <li>0-60 mph: {{ car.specs.zeroToSixty }} seconds</li>
    </ul>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  width: 400px;
  height: auto;
}
</style>
