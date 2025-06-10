<template>
  <div class="container">
    <div class="top-text">GASOLINE CAR</div>
    <img src="@/assets/GasolineCar10.png" alt="Top Image" class="top-image">
    <div class="car-specs">
      <h1>{{ car.model }}</h1>
      <ul>
        <li><strong>제조사:</strong> {{ car.manufacturer }}</li>
        <li><strong>연식:</strong> {{ car.year }}</li>
        <li><strong>연료:</strong> {{ car.fuel }}</li>
        <li><strong>마력:</strong> {{ car.horsepower }} HP</li>
        <li><strong>가격:</strong> ${{ car.price }}</li>
      </ul>
    </div>
    <div class="bottom-text">
      "대한민국 휘발유다! 하하! 성질 건들면? ,..."
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarSpecs',
  data() {
    return {
      car: {
        model: 'Model S',
        manufacturer: 'Tesla',
        year: 2022,
        fuel: 'Electric',
        horsepower: 1020,
        price: 79990
      }
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
}

.top-text {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  color: red;
  font-size: 24px;
  font-weight: bold;
}

.top-image {
  width: 20%;
  height: auto;
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.car-specs {
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 380px auto 20px auto; /* Adjusted to make space for the fixed image */
  background-color: #f9f9f9;
  position: relative;
  z-index: 1;
}

.car-specs h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.car-specs ul {
  list-style-type: none;
  padding: 0;
}

.car-specs li {
  margin-bottom: 5px;
}

.car-specs li strong {
  width: 150px; /* Adjusted width to better fit the new item */
  display: inline-block;
}

.bottom-text {
  margin-top: 50px;
  font-size: 16px;
  color: black;
  font-weight: bold;
  padding: 10px;
}
</style>