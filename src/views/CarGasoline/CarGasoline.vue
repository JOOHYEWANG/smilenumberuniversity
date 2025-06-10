<template>
  <div class="car-space">
    <h1>GASOLINE CAR</h1>
  </div>
  <br><br>
  <div class="car-space">
    <div v-for="(car, index) in cars" :key="car.url" class="car-item">
      <router-link :to="car.url">
        <img :src="car.imgSrc" :alt="car.altText" class="car-image" style="height: 70%;" />
        <div class="car-text">Smile car</div>
      </router-link>
    </div>
  </div>
  <div class="bottom-text">
    "대한민국 원주-휘발유다! 하하! 성질 건들면? ,..."
  </div>
</template>

<script>
import GasolineCar1 from '@/assets/GasolineCar1.png';
import GasolineCar2 from '@/assets/GasolineCar2.png';
import GasolineCar3 from '@/assets/GasolineCar3.png';
import GasolineCar4 from '@/assets/GasolineCar4.png';
import GasolineCar5 from '@/assets/GasolineCar5.png';
import GasolineCar6 from '@/assets/GasolineCar6.png';
import GasolineCar7 from '@/assets/GasolineCar7.png';
import GasolineCar8 from '@/assets/GasolineCar8.png';
import GasolineCar9 from '@/assets/GasolineCar9.png';
import GasolineCar10 from '@/assets/GasolineCar10.png';
import GasolineCar11 from '@/assets/GasolineCar11.png';
import GasolineCar12 from '@/assets/GasolineCar12.png';

export default {
  name: 'CarSpace',
  data() {
    return {
      cars: [
        { imgSrc: GasolineCar1, url: '/CarGasoline1', altText: 'Gasoline Car 1' },
        { imgSrc: GasolineCar2, url: '/CarGasoline2', altText: 'Gasoline Car 2' },
        { imgSrc: GasolineCar3, url: '/CarGasoline3', altText: 'Gasoline Car 3' },
        { imgSrc: GasolineCar4, url: '/CarGasoline4', altText: 'Gasoline Car 4' },
        { imgSrc: GasolineCar5, url: '/CarGasoline5', altText: 'Gasoline Car 5' },
        { imgSrc: GasolineCar6, url: '/CarGasoline6', altText: 'Gasoline Car 6' },
        { imgSrc: GasolineCar7, url: '/CarGasoline7', altText: 'Gasoline Car 7' },
        { imgSrc: GasolineCar8, url: '/CarGasoline8', altText: 'Gasoline Car 8' },
        { imgSrc: GasolineCar9, url: '/CarGasoline9', altText: 'Gasoline Car 9' },
        { imgSrc: GasolineCar10, url: '/CarGasoline10', altText: 'Gasoline Car 10' },
        { imgSrc: GasolineCar11, url: '/CarGasoline11', altText: 'Gasoline Car 11' },
        { imgSrc: GasolineCar12, url: '/CarGasoline12', altText: 'Gasoline Car 12' }
      ]
    };
  }
};
</script>

<style scoped>
.car-space {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}

.car-item {
  width: 200px;
  text-align: center;
}

.car-image {
  width: 100%;
  height: auto;
  display: block;
}

.car-text {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.bottom-text {
  margin-top: 50px;
  font-size: 16px;
  color: black;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}
</style>