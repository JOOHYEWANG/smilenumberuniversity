<template>
  <br>
  <div>
    <div class="title-container" style="text-align: center;">
      <h1 style="font-weight: bold;">{{ $t('smileMotors') }}</h1>
    </div>
    <br>

    <div class="LanguageDropdown-container">
      <LanguageDropdown :selected-language="selectedLanguage" @language-changed="handleLanguageChanged" />
    </div>

    <div class="grid-container">
      <router-link v-for="(menu, index) in menus" :key="index" :to="menu.link" class="grid-item" @click.native="scrollToTop">
        <img :src="menu.image" :alt="menu.name" />
        <p class="bold-text">{{ $t(menu.title) }}</p>
      </router-link>
    </div>
    <br><br>

    <div class="SearchComponent-grid-container">
      <SearchComponent @search="handleSearch" />
      <div class="sort-buttons">
        <router-link to="/OurCar4"><button @click.native="scrollToTop">{{ $t('modification1') }}</button></router-link>
        <router-link to="/OurCar5"><button @click.native="scrollToTop">{{ $t('modification2') }}</button></router-link>
        <router-link to="OurCar6"><button @click.native="scrollToTop">{{ $t('modification3') }}</button></router-link>
      </div>
      <div class="vehicle-type-buttons">
        <button @click="searchVehicleType('Bus'); ">{{ $t('bus') }}</button>
        <button @click="searchVehicleType('Truck'); ">{{ $t('truck') }}</button>
        <button @click="searchVehicleType('Sedan'); ">{{ $t('sedan') }}</button>
        <button @click="searchVehicleType('SUV'); ">{{ $t('suv') }}</button>
      </div>
      <div v-if="searchResults.length" class="search-results">
        <div v-for="(result, index) in searchResults" :key="index" class="search-result-item">
          <router-link :to="result.url" style="text-decoration: none; color:black;" @click.native="scrollToTop">
            <img :src="result.imgSrc" :alt="result.altText"/>
          </router-link>
        </div>
      </div>
    </div>
    <br><br>

    <div class="ButtonComponent-grid-container">
      <ButtonComponent />
    </div>

    <div class="BottomCar-grid-container">
      <CarSpaceCarGrid0 />
      <CarSpaceCarGrid1 />
      <CarSpaceCarGrid2 />
      <CarSpaceCarGridKia />
      <CarSpaceCarGridHyundai />
      <CarSpaceCarGridSamsung />
      <CarSpaceCarGridSsangyong />
      <CarSpaceCarGridChevrolet />
      <CarSpaceCarGridJoy />
      <CarSpaceCarGridSmileTruck />
    </div>
  </div>
  <br><br><br>

  <div class="MapSearch-grid-container">
    <MapSearchComponent />
  </div>

  <div class="Map-grid-container">
    <MapVue />
  </div>

  <br>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import RainbowMenu from '@/views/RainbowMenu.vue';
import CarSpaceCarGrid0 from './CarDetailsType/CarSpaceCarGrid0.vue';
import CarSpaceCarGrid1 from './CarDetailsType/CarSpaceCarGrid1.vue';
import CarSpaceCarGrid2 from './CarDetailsType/CarSpaceCarGrid2.vue';
import CarSpaceCarGrid3 from './CarDetailsType/CarSpaceCarGrid3.vue';
import CarSpaceCarGrid4 from './CarDetailsType/CarSpaceCarGrid4.vue';
import CarSpaceCarGrid5 from './CarDetailsType/CarSpaceCarGrid5.vue';
import CarSpaceCarGridKia from './CarDetailsType/CarSpaceCarGridKia.vue';
import CarSpaceCarGridHyundai from './CarDetailsType/CarSpaceCarGridHyundai.vue';
import CarSpaceCarGridSamsung from './CarDetailsType/CarSpaceCarGridSamsung.vue';
import CarSpaceCarGridSsangyong from './CarDetailsType/CarSpaceCarGridSsangyong.vue';
import CarSpaceCarGridChevrolet from './CarDetailsType/CarSpaceCarGridChevrolet.vue';
import CarSpaceCarGridJoy from './CarDetailsType/CarSpaceCarGridJoy.vue';
import CarSpaceCarGridSmileTruck from './CarDetailsType/CarSpaceCarGridSmileTruck.vue';

import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

import LanguageDropdown from '@/views/LanguageDropdown';

import ButtonComponent from '@/components/ButtonComponent.vue';

// 비동기 컴포넌트 로딩
const SearchComponent = defineAsyncComponent(() => import('@/components/SearchComponent.vue'));

export default {
  name: 'GridContainer',
  components: {
    SearchComponent,
    RainbowMenu,
    CarSpaceCarGrid0,
    CarSpaceCarGrid1,
    CarSpaceCarGrid2,
    CarSpaceCarGrid3,
    CarSpaceCarGrid4,
    CarSpaceCarGrid5,
    CarSpaceCarGridKia,
    CarSpaceCarGridHyundai,
    CarSpaceCarGridSamsung,
    CarSpaceCarGridChevrolet,
    CarSpaceCarGridJoy,
    CarSpaceCarGridSmileTruck,
    MapVue,
    MapSearchComponent,
    ButtonComponent,
    CarSpaceCarGridSsangyong,
    LanguageDropdown,
  },
  data() {
    return {
      selectedLanguage: 'ko', // 초기 선택 언어 설정
      menus: [
        { name: 'Menu 1', title: 'home', image: require('@/assets/Menu1.png'), link: '/' },
        { name: 'Menu 2', title: 'shippingScheduleCarSales', image: require('@/assets/Menu2.png'), link: '/ShipSchedule' },
        { name: 'Menu 3', title: 'ourStory', image: require('@/assets/Menu3.png'), link: '/AboutVue' },
        { name: 'Menu 4', title: 'worldsChildren', image: require('@/assets/Menu4.png'), link: '/Grid' },
        { name: 'Menu 5', title: 'howToBuyCar', image: require('@/assets/Menu5.png'), link: '/HowToBuyCar' },
        { name: 'Menu 6', title: 'alwaysGrateful', image: require('@/assets/Menu6.png'), link: '/jesusSaid' },
        { name: 'Menu 7', title: 'contact', image: require('@/assets/Menu7.png'), link: '/ConTactVue' }
      ],
      searchResults: [],
      sortOrder: 'default', // 기본 정렬 옵션
      vehicleType: null // 차량 유형
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    handleLanguageChanged(language) {
      this.selectedLanguage = language;
    },
    handleSearch(results) {
      this.searchResults = Array.isArray(results) ? results : []; // 배열로 보장
      this.sortResults(); // 검색 결과가 들어올 때마다 정렬
    },
    applySort(order) {
      this.sortOrder = order;
      this.sortResults();
    },
    sortResults() {
      if (Array.isArray(this.searchResults) && this.searchResults.length > 0) {
        if (this.sortOrder === 'asc') {
          this.searchResults.sort((a, b) => a.title.localeCompare(b.title));
        } else if (this.sortOrder === 'desc') {
          this.searchResults.sort((a, b) => b.title.localeCompare(a.title));
        }
        // 기본 정렬은 서버에서 제공하는 순서 그대로 유지
      }
    },
    searchVehicleType(type) {
      this.vehicleType = type;
      // 예: 서버에 요청하여 해당 차량 유형의 결과를 가져온다고 가정
      // 아래는 가정된 서버 응답 예시
      const results = [
        { url: '/details/bus1', imgSrc: require('@/assets/bus1.png'), altText: 'Bus 1', title: 'Bus A' },
        { url: '/details/bus2', imgSrc: require('@/assets/bus2.png'), altText: 'Bus 2', title: 'Bus B' },
        { url: '/details/truck1', imgSrc: require('@/assets/truck1.png'), altText: 'Truck 1', title: 'Truck A' },
        { url: '/details/truck2', imgSrc: require('@/assets/truck2.png'), altText: 'Truck 2', title: 'Truck B' },
        { url: '/details/sedan1', imgSrc: require('@/assets/sedan1.png'), altText: 'Sedan 1', title: 'Sedan A' },
        { url: '/details/sedan2', imgSrc: require('@/assets/sedan2.png'), altText: 'Sedan 2', title: 'Sedan B' },
        { url: '/details/suv1', imgSrc: require('@/assets/SUV1.png'), altText: 'SUV 1', title: 'SUV A' },
        { url: '/details/suv2', imgSrc: require('@/assets/SUV2.png'), altText: 'SUV 2', title: 'SUV B' }
      ];

      // 특정 차량 유형으로 필터링
      const filteredResults = results.filter(result => result.title.toLowerCase().includes(type.toLowerCase()));
      this.handleSearch(filteredResults);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  width: 90%; /* 컨테이너 너비를 100%로 설정 */
  margin: auto; /* 중앙 정렬 */
}

.grid-item {
  flex: 1 0 12%; /* 각 아이템이 7열로 배치되도록 14% 너비 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px; /* 고정된 높이 */
  border: 1px solid white;
  box-sizing: border-box;
  text-decoration: none;
  margin: 5px;
  overflow: hidden; /* 이미지가 그리드 아이템을 초과하는 경우 숨김 */
}

.grid-item img {
  max-width: 100%; /* 이미지 너비를 아이템 너비에 맞춤 */
  height: 120%; /* 높이를 자동으로 설정하여 비율 유지 */
  object-fit: contain; /* 이미지를 컨테이너 내에 맞춤 */
}

.grid-item:link {
  color: skyblue; /* 하이퍼링크의 초기 색상 */
}

.grid-item:visited {
  color: orange; /* 링크 연결된 후의 색상 */
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-item img:hover {
  transform: scale(1.1);
}

.search-results {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.search-result-item {
  width: 150px;
  height: 150px;
  border: 1px solid #ddd;
  overflow: hidden;
  text-align: center;
}

.search-result-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.search-result-item img:hover {
  transform: scale(1.1);
}

.result-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.result-link p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #333;
}

.FlagButton-grid-container {
  position: absolute;
  margin-left: 2.5cm;
  margin-top: 3.8cm;
  display: flex;
  flex-direction: row-reverse;
  width: 24px;
  height: auto;
}

.sort-buttons, .vehicle-type-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.sort-buttons button, .vehicle-type-buttons button {
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: #ddd;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  margin: 0 5px;
  font-weight: bold; /* 텍스트를 볼드체로 변경 */
}

.sort-buttons button:hover, .vehicle-type-buttons button:hover {
  background-color: gray;
}

.MapVue-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
}
.MapSearch-grid-container {
  margin-top: 6000px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}

.BottomCar-grid-container {
  top: 50px;
  height: 80px; /* 원하는 높이로 조정 */
  transform: scale(0.7);
}

.LanguageDropdown-container {
  position: absolute;
  right: 100px;
  top: -70px;
  transform: translateX(0); /* 현재 transform을 초기화합니다. */
  z-index: 10; /* 다른 요소들보다 위에 올라가도록 설정 */
}

.bold-text {
  font-weight: bold;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 표시 */
  text-align: center; /* 텍스트를 가운데 정렬 */
}

.grid-container .bold-text {
  font-size: 1em; /* 폰트 크기를 반으로 줄임 */
}
</style>
