<template>
  <div>
      <div class="RainbowMenu-container">
        <RainbowMenu />
      </div>
      </div>

      <div class="container">
  <div class="top-text">SHIPPING SCHEDULE TO AFRICA KENYA</div>
  <img src="@/assets/ShipSchedule4.png" alt="Top Image" class="top-image">
  <div class="shipping-schedule">
    <h2>Shipping Schedule to Africa Kenya</h2>
    <ul>
      <li><strong>Depature from Busan:</strong> 1st and 15th of the month</li>
      <li><strong>Arrival at Cape Town:</strong> 20 days after departure</li>
      <li><strong>Arrival at Lagos:</strong> 25 days after departure</li>
    </ul>
  </div>
  <div class="bottom-text">
    <p>"중고자동차이지만 당신의 마음은 슈퍼카를 가지게 된 듯 가슴뛰기를 소망 합니다."</p>
    
  </div>
</div>

<div class="MapSearch-grid-container">
  <MapSearchComponent />
</div>

<div class="Map-grid-container">
  <MapVue />
</div>

</template>

<script>
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
  name: 'ShippingSchedule',
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
  }
}
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
}

.top-text {
  position: relative;
  top: 50px;
  left: 48%;
  transform: translateX(-50%);
  z-index: 1001;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.top-image {
  width: 40%;
  height: auto;
  position: relative;
  top: 100px;
  left: 47%;
  transform: translateX(-120%);
  z-index: 1000;
}

.shipping-schedule {
  font-family: Arial, sans-serif;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 475px;
  left: -1%;
  margin: 150px auto 50px auto; /* Adjusted to make space for the fixed image */
  background-color: #f9f9f9;
  position: relative;
  z-index: 1;
  top:-40px;
}

.shipping-schedule h2 {
  font-size: 20px;
  margin-bottom: 0px;
  margin-top: 30px;
}

.shipping-schedule ul {
  list-style-type: none;
  padding: 0;
}

.shipping-schedule li {
  margin-bottom: 5px;
}

.shipping-schedule li strong {
  width: 200px;
  display: inline-block;
}

.bottom-text {
  margin-top: 50px;
  margin-left: -2%;
  font-size: 16px;
  color: black;
  font-weight: bold;

}
.bottom-text {
  color: white;
}
.MapSearch-grid-container {
  margin-top: 50px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
</style>