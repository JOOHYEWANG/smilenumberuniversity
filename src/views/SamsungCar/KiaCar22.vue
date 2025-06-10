<template>
  
  <div class="RainbowMenu-container">
     <RainbowMenu />
   </div>
   
<br><br>

<div class="car-details">
   <div class="main-title">{{ car.model }}</div>
   <div class="another-smile-car">ANOTHER KIA CAR</div>
   <div class="main-content">
     <div class="main-image">
       <img :src="mainImage" alt="Main Car" @mousemove="showMagnifier" @mouseleave="hideMagnifier" />
       <div
         class="magnifier"
         v-if="magnifierVisible"
         :style="{
           backgroundImage: 'url(' + mainImage + ')',
           backgroundPosition: magnifierBackgroundPosition,
           backgroundSize: magnifierBackgroundSize,
           top: magnifierTop,
           left: magnifierLeft,
         }"
       ></div>
     </div>
     <div class="car-info-box">
       <ul class="car-info">
         <li><strong>제조사:</strong> {{ car.manufacturer }}</li>
         <li><strong>모델명:</strong> {{ car.model }}</li>
         <li><strong>연식:</strong> {{ car.year }}</li>
         <li><strong>차체 유형:</strong> {{ car.bodyType }}</li>
         <li><strong>엔진 타입:</strong> {{ car.engineType }}</li>
         <li><strong>배기량:</strong> {{ car.engineDisplacement }} cc</li>
         <li><strong>변속기:</strong> {{ car.transmission }}</li>
         <li><strong>구동 방식:</strong> {{ car.drivetrain }}</li>
         <li><strong>연비:</strong> {{ car.fuelEfficiency }} km/L</li>
         <li><strong>출력:</strong> {{ car.horsepower }} HP</li>
         <li><strong>토크:</strong> {{ car.torque }} Nm</li>
         <li><strong>최고 속도:</strong> {{ car.topSpeed }} km/h</li>
         <li><strong>가속력:</strong> {{ car.acceleration }} 초 (0-100 km/h)</li>
         <li><strong>차량 크기:</strong> {{ car.dimensions }}</li>
         <li><strong>안전 장치:</strong> {{ car.safetyFeatures }}</li>
       </ul>
     </div>
   </div>
   <div class="part-images">
     <img
       v-for="(part, index) in carParts"
       :key="index"
       :src="part.src"
       :alt="part.name"
       @click="updateMainImage(part.src)"
     />
   </div>
   <div class="logo">
     <img src="@/assets/MonkeyLogo.png" alt="Monkey Logo" />
     <div class="logo-text" style="text-align: center; margin-top: 5px; font-size: 1em; font-weight: bold;">Monkey: "네"</div>
   </div>
   <div class="car-thumbnails">
     <router-link v-for="(car, index) in cars" :key="index" :to="car.url">
       <img :src="car.imgSrc" :alt="car.altText" />
     </router-link>
   </div>
 </div>
 <div class="car-grid-container">
  <CarSpaceCarGridKia />
</div>
</template>


<script>
import CarSpaceCarGridKia from '@/views/CarDetailsType/CarSpaceCarGridKia.vue';
import RainbowMenu from '@/views/RainbowMenu.vue';

export default {
 name: 'CarDetails',
 components: {
   CarSpaceCarGridKia, // 컴포넌트 등록
   RainbowMenu,
 },
 data() {
   return {
     car: {
       manufacturer: 'SmileNumber Motors',
       model: "SmileNumber's KIA Car",
       year: 2024,
       bodyType: 'Sedan',
       engineType: 'Electric',
       engineDisplacement: 0,
       transmission: 'Automatic',
       drivetrain: 'FWD',
       fuelEfficiency: 15,
       horsepower: 300,
       torque: 400,
       topSpeed: 240,
       acceleration: 5.5,
       dimensions: '4900 x 1800 x 1400 mm',
       safetyFeatures: 'Smile, Love, Airbags, ABS, ESC',
       price: 35000,
     },
     carParts: [
       { name: 'main View', src: require('@/assets/KiaCar22.png') },
       { name: 'Front View', src: require('@/assets/SmileCarFront.png') },
       { name: 'Side View', src: require('@/assets/SmileCarSide.png') },
       { name: 'Rear View', src: require('@/assets/SmileCarRear.png') },
       { name: 'Interior', src: require('@/assets/SmileCarInterior.png') },
     ],
     mainImage: require('@/assets/KiaCar22.png'), // 초기 메인 이미지
     cars: [
       
     ],
     magnifierVisible: false,
     magnifierBackgroundPosition: '0px 0px',
     magnifierBackgroundSize: '200%' // 배경 이미지 확대 비율
   };
 },
 methods: {
   updateMainImage(src) {
     this.mainImage = src;
   },
   showMagnifier(event) {
     const magnifierWidth = 800; // 돋보기의 너비
     const magnifierHeight = 800; // 돋보기의 높이
     const scale = 2; // 확대 배율
     const mainImageRect = event.target.getBoundingClientRect();
     const x = event.clientX - mainImageRect.left;
     const y = event.clientY - mainImageRect.top;
     const bgX = -(x * scale - magnifierWidth / 2);
     const bgY = -(y * scale - magnifierHeight / 2);
     
     // 돋보기 위치를 마우스 중심으로 설정
     const offsetX = event.clientX - mainImageRect.left - magnifierWidth / 2;
     const offsetY = event.clientY - mainImageRect.top - magnifierHeight / 2;

   
     this.magnifierBackgroundPosition = `${bgX}px ${bgY}px`;
     this.magnifierTop = `${offsetY}px`;
     this.magnifierLeft = `${offsetX}px`;
     this.magnifierVisible = true;
   },
   hideMagnifier() {
     this.magnifierVisible = false;
   }
 }
};
</script>

<style scoped>
.car-details {
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 2px solid #ddd;
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0 0 10px rgba(28, 17, 17, 0.1);
 height: 3000px; 
}

.main-title {
 font-size: 2em;
 font-weight: bold;
 margin-bottom: 20px;
}

.main-content {
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 width: 100%;
 max-width: 800px;
 margin-bottom: 20px;
}

.main-image {
 position: relative;
}

.main-image img {
 width: 100%;
 max-width: 600px;
 margin-left: -1.0cm; /* 좌측으로 3cm 이동 */
}

.magnifier {
 position: absolute;
 top: 0;
 left: 100%;
 width: 400px; /* 늘린 돋보기 너비 */
 height: 400px; /* 늘린 돋보기 높이 */
 background-repeat: no-repeat;
 background-size: 200%; /* 배경 이미지 크기 */
 border: 1px solid #ccc;
 pointer-events: none;
 z-index: 10;
}

.car-info-box {
 border: 2px solid #ddd;
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0 0 10px rgba(28, 17, 17, 0.1);
 background-color: #f9f9f9;
}

.car-info {
 list-style: none;
 padding: 0;
 margin: 0;
 text-align: left;
}

.car-info li {
 margin: 0px 0;
 width: 100%; /* 요소의 너비를 100%로 설정 */
 padding-right: 30px; /* 박스 프레임의 오른쪽 여백을 30px 추가 */
 box-sizing: border-box; /* 패딩을 포함하여 요소의 전체 크기를 설정 */
}

.part-images {
 display: flex;
 justify-content: center;
 width: 60%;
 margin-left: -9.5cm; /* 좌측으로 3cm 이동 */
}

.part-images img {
 width: 100px;
 margin: 0 10px;
 cursor: pointer;
 transition: transform 0.2s;
}

.part-images img:hover {
 transform: scale(1.2);
}

.logo {
 position: relative;
 top: 20px; 
 right: -230px;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: -170px;
}

.logo img {
 width: 150px;
 height: auto;
}

/* 추가된 스타일 */
.another-smile-car {
 font-size: 1.2em;
 font-weight: bold;
 text-align: center;
 position: absolute;
 top: calc(50% - 20px); /* 중앙 정렬 */
 margin-top: 490px;
 left: 50%;
 transform: translateX(-50%);
 background-color: white;
 padding: 5px 10px;
 border: 2px solid #ddd;
 border-radius: 5px;
 box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.car-grid-container {
position: relative;
margin-top: -2340px; /* 원하는 만큼 요소를 위쪽으로 이동 */
transform: scale(0.7); /* 요소를 50% 축소 */
}
</style>
