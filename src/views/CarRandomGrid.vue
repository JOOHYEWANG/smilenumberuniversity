<template>
  <div class="car-gallery">
    <!-- 검색창 추가 -->
    <div class="search-container">
      <input type="text" v-model="searchQuery" @input="handleSearch" placeholder="검색어를 입력하세요">
    </div>
    
    <!-- 차량 썸네일 -->
    <div class="car-thumbnails">
      <a v-for="(car, index) in filteredCars" :key="index" :href="car.url">
        <img :src="car.imgSrc" :alt="car.altText" />
      </a>
    </div>
  </div>
</template>

<script>
import SmileCar1 from '@/assets/SmileCar1.png';
import SmileCar2 from '@/assets/SmileCar2.png';
import SmileCar3 from '@/assets/SmileCar3.png';
import SmileCar4 from '@/assets/SmileCar4.png';
import SmileCar5 from '@/assets/SmileCar5.png';
import SmileCar6 from '@/assets/SmileCar6.png';
import SmileCar7 from '@/assets/SmileCar7.png';
import SmileCar8 from '@/assets/SmileCar8.png';
import SmileCar9 from '@/assets/SmileCar9.png';
import SmileCar10 from '@/assets/SmileCar10.png';
import SmileCar11 from '@/assets/SmileCar11.png';
import SmileCar12 from '@/assets/SmileCar12.png';
import SmileCar13 from '@/assets/SmileCar13.png';
import SmileCar14 from '@/assets/SmileCar14.png';
import SmileCar15 from '@/assets/SmileCar15.png';
import SmileCar16 from '@/assets/SmileCar16.png';
import SmileCar17 from '@/assets/SmileCar17.png';
import SmileCar18 from '@/assets/SmileCar18.png';

export default {
  name: 'CarGallery',
  data() {
    return {
      cars: [
        { imgSrc: SmileCar1, url: '/CarSpace1', altText: 'Smile Car 1' },
        { imgSrc: SmileCar2, url: '/CarSpace2', altText: 'Smile Car 2' },
        { imgSrc: SmileCar3, url: '/CarSpace3', altText: 'Smile Car 3' },
        { imgSrc: SmileCar4, url: '/CarSpace4', altText: 'Smile Car 4' },
        { imgSrc: SmileCar5, url: '/CarSpace5', altText: 'Smile Car 5' },
        { imgSrc: SmileCar6, url: '/CarSpace6', altText: 'Smile Car 6' },
        { imgSrc: SmileCar7, url: '/CarSpace7', altText: 'Smile Car 7' },
        { imgSrc: SmileCar8, url: '/CarSpace8', altText: 'Smile Car 8' },
        { imgSrc: SmileCar9, url: '/CarSpace9', altText: 'Smile Car 9' },
        { imgSrc: SmileCar10, url: '/CarSpace10', altText: 'Smile Car 10' },
        { imgSrc: SmileCar11, url: '/CarSpace11', altText: 'Smile Car 11' },
        { imgSrc: SmileCar12, url: '/CarSpace12', altText: 'Smile Car 12' },
        { imgSrc: SmileCar13, url: '/CarSpace13', altText: 'Smile Car 13' },
        { imgSrc: SmileCar14, url: '/CarSpace14', altText: 'Smile Car 14' },
        { imgSrc: SmileCar15, url: '/CarSpace15', altText: 'Smile Car 15' },
        { imgSrc: SmileCar16, url: '/CarSpace16', altText: 'Smile Car 16' },
        { imgSrc: SmileCar17, url: '/CarSpace15', altText: 'Smile Car 17' },
        { imgSrc: SmileCar18, url: '/CarSpace16', altText: 'Smile Car 18' },
      ],
      shuffledCars: [],
      filteredCars: [], // 변경된 부분
      searchQuery: ''
    };
  },
  methods: {
    shuffleCars() {
      const shuffled = [...this.cars];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      this.shuffledCars = shuffled;
    },
    handleSearch() {
      const query = this.searchQuery.toLowerCase();
      if (!query) {
        this.filteredCars = [...this.shuffledCars];
      } else {
        this.filteredCars = this.shuffledCars.filter(car =>
          car.altText.toLowerCase().includes(query)
        );
      }
    }
  },
  created() {
    this.shuffleCars();
    this.filteredCars = [...this.shuffledCars]; // 변경된 부분
  }
};
</script>

<style scoped>
.car-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.car-thumbnails {
  grid-template-columns: repeat(6, 1fr);
  gap: 0px;
  width: 80%;
  margin-top: 20px;
  text-align: center;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* language-selector를 위치시키기 위해 추가 */
}

.car-thumbnails img {
  width: 95%;
  cursor: pointer;
  transition: transform 0.2s;
}

.car-thumbnails img:hover {
  transform: scale(1.1);
}
</style>
