<template>
    
    <!-- 다국어번역 버튼을 사용하려면 자식노드에서 가지고 오는 내용은 i18n에서 정의해야 한다. -->
   <!-- 그리고 나머지 내용들은 그냥 본문에 넣어서 번역하는 것이 둘을 구분할 수 있는 방법이다. -->
    
    
    <div>
      <div class="RainbowMenu-container">
        <RainbowMenu />
      </div>
      </div>
     
      
      <div class="LanguageDropdown-container">
    <LanguageDropdown
      :selected-language="selectedLanguage"
      @language-changed="handleLanguageChanged"
    />
  </div>
      
  
    <div class="search-container">
      <div class="smile-text">SmileNumber Motors <span class="red">S</span><span class="orange">M</span><span class="yellow">I</span><span class="green">L</span><span class="blue">E</span>! <span class="indigo">S</span><span class="purple">M</span><span class="red">I</span><span class="orange">L</span><span class="yellow">E</span>! <span class="green">S</span><span class="blue">M</span><span class="indigo">I</span><span class="purple">L</span><span class="red">E</span>!</div>
      <div class="search-input">
        <SearchComponent @search="handleSearch"></SearchComponent>
        <div class="search-buttons">
          <button @click="handleSearchType('Gasoline')">
            <div class="button-content">
              <img :src="require('@/assets/Gasoline-SS.png')" alt="Gasoline">
              <span style="text-align: center; color: skyblue; font-weight: bold;">Gasoline</span>
            </div>
          </button>
          <button @click="handleSearchType('Electric')">
            <div class="button-content">
              <img :src="require('@/assets/Electric-SSSS.png')" alt="Electric">
              <span style="text-align: center;color: skyblue; font-weight: bold;">Electric</span>
            </div>
          </button>
          <button @click="handleSearchType('Diesel')">
            <div class="button-content">
              <img :src="require('@/assets/Diesel-SS.png')" alt="Diesel">
              <span style="text-align: center; color: skyblue; font-weight: bold;">Diesel</span>
            </div>
          </button>
        </div>
      </div>
  
      <div v-if="searchResults.length > 0" class="search-results">
        <div v-for="(result, index) in searchResults" :key="index" class="result-item">
          <router-link :to="result.url" style="text-decoration: none; color:black;">
            <img :src="result.imgSrc" :alt="result.altText">
            <div>{{ result.altText }}</div>
          </router-link>
        </div>
      </div>
      <div v-else class="no-results">검색 결과가 없습니다.</div>
    </div>
  
    <div class="title-container">
      <div class="custom-grid-container">
        <RainbowText /> 
      </div>
      <img src="@/assets/a2.png" alt="A2 Image" class="a2-image">
    </div>
  
    <div class="curtain-search-button">
      <div class="header" @click="toggle">
        <img src="@/assets/Tri1.png" alt="Toggle" :class="{'rotate': isOpen}" class="toggle-image">
        <span style="font-weight: bold; margin-right: 10px;">SMILENUMBER MOTORS PLATFORM MENU AND CONTENTS</span>
        <img src="@/assets/Tri1.png" alt="Toggle" :class="{'rotate': isOpen}" class="toggle-image">
      </div>                          
  
      <br>   <br> 
      <transition name="slide-fade">
        <div class="button-container" v-show="isOpen">
          <div style="text-align: center;">
            <button class="external-link-button" @click="openLink('https://joohyewang.wixsite.com/mathematics')" style="text-decoration:none; color: red;">
              SmileNumber Mathematics Group & Thinking and Idea
            </button>
            <br> <br>
            <button class="external-link-button" @click="openLink('https://www.instagram.com/smilenumbermathematics/')" style="text-decoration:none; color: orange;">
              Monkey Love Group and Elegance Monkey
            </button>
            <br> <br>
            <button class="external-link-button" @click="openLink('https://joohyewang.wixsite.com/smilenumbermotors')" style="text-decoration:none; color: rgb(243, 243, 36);">
              SmileNumber Motors & Our Dream
            </button>                                  
            <br> <br>
            <router-link to="/AboutVue" style="text-decoration: none; color: green;">
              Our Love and Our Smile
            </router-link>
            <br> <br>
            <router-link to="/HelloSmileMonkey" style="text-decoration: none; color: blue;">
              Hello Smile Monkey!
            </router-link>
            <br> <br>
            <router-link to="/JesusSaid" style="text-decoration: none; color: indigo;">
              John 14:6
            </router-link>
            <br> <br>
            <router-link to="/Grid" style="text-decoration: none; color: purple;">
              Smile
            </router-link>
            <br>  <br>
          </div>
          
          <div class="a1-text-box">
            The marketing strategy of Smile Number Automobile is "We will keep your smile." 
            (i) We will maintain your smile through continuous customer management. 
            (ii) The smiles will start with our smiley association and will be delivered to you 
            (iii) The smiles produced by our smilenumber motors will be delivered to you in the form of various goods, 
            goods and services (vi) You will always be smiling through the Smile Africa project that we will sell. 
            The ultimate goal of our smilenumber motors is to deliver our laughter, smiles and joy to you. 
            It will be delivered to you and a mutual exchange process will be created when the customer smiles again. 
            We create and create ideas like this. The ultimate goal of our marketing is customer satisfaction. 
            It is clear to us that our customers are most satisfied when they smile at the ideas and services we provide. 
            Our smiles can be found anywhere on the planet at a price that will always make you smile, or the equivalent. 
            The Smilenumber Institute will take care of your laughter and smiles. 
            The following will model the many smile festivals, conferences, and events we will carry out. 
            Our smilenumber motors will rule the planet, second only to Microsoft.
            <br> 
          </div>
          <br> 
        </div>
      </transition>
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
  import SearchComponent from '@/components/SearchComponent.vue';
  import MapSearchComponent from '@/components/MapSearchComponent.vue';
  import RainbowText from './RainbowText.vue';
  import RainbowMenu from '@/views/RainbowMenu.vue';
  import MapVue from '@/views/MapVue.vue';




  import LanguageDropdown from '@/views/LanguageDropdown';

  import CarSpaceCarGrid0 from './CarDetailsType/CarSpaceCarGrid0.vue';
  import CarSpaceCarGrid1 from './CarDetailsType/CarSpaceCarGrid1.vue';
  import CarSpaceCarGrid2 from './CarDetailsType/CarSpaceCarGrid2.vue';
  import CarSpaceCarGridKia from './CarDetailsType/CarSpaceCarGridKia.vue';
  import CarSpaceCarGridHyundai from './CarDetailsType/CarSpaceCarGridHyundai.vue';
  import CarSpaceCarGridSamsung from './CarDetailsType/CarSpaceCarGridSamsung.vue';
  import CarSpaceCarGridSsangyong from './CarDetailsType/CarSpaceCarGridSsangyong.vue';
  import CarSpaceCarGridChevrolet from './CarDetailsType/CarSpaceCarGridChevrolet.vue';
  import CarSpaceCarGridJoy from './CarDetailsType/CarSpaceCarGridJoy.vue';
  import CarSpaceCarGridSmileTruck from './CarDetailsType/CarSpaceCarGridSmileTruck.vue';

  
  export default {
    name: 'HomeVue',
    components: {
      LanguageDropdown,
      SearchComponent,
      RainbowText,
      RainbowMenu,
      CarSpaceCarGrid0,
      CarSpaceCarGrid1,
      CarSpaceCarGrid2,
      CarSpaceCarGridKia,
      CarSpaceCarGridHyundai,
      CarSpaceCarGridSamsung,
      CarSpaceCarGridSsangyong,
      CarSpaceCarGridChevrolet,
      CarSpaceCarGridJoy,
      CarSpaceCarGridSmileTruck,
      MapVue,
      MapSearchComponent,
   
    },
    data() {
      return {
        selectedLanguage: 'ko', // 초기 선택 언어 설정
        isOpen: false,
        searchResults: [],
        search: '',
        linkColor: 'blue',
        pageTexts: [
          "JesusSaid",
          "HelloSmile",
          "CarSpace",
          "CarGasoline",
          "AboutVue",
          "ShipSchedule",
        ]
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
        this.searchResults = results;
      },
      handleSearchType(type) {
        this.searchQuery = type;
        this.searchResults = this.performSearch(type);
      },
      performSearch(query) {
      // 이 함수는 실제 검색을 수행합니다. 예시를 위해 간단하게 하드코딩된 결과를 반환합니다.
      const sampleResults = {
        Gasoline: [
    { imgSrc: require('@/assets/CarSpace1.png'), url: '/CarSpace1', altText: 'MonkeyCar1', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace4.png'), url: '/CarSpace4', altText: 'MonkeyCar4', type: 'Gasoline', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpace7.png'), url: '/CarSpace7', altText: 'MonkeyCar7', type: 'Gasoline', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace17.png'), url: '/CarSpace17', altText: 'MonkeyCar17', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace20.png'), url: '/CarSpace20', altText: 'MonkeyCar20', type: 'Gasoline', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpace23.png'), url: '/CarSpace23', altText: 'MonkeyCar23', type: 'Gasoline', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace34.png'), url: '/CarSpace34', altText: 'MonkeyCar34', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace37.png'), url: '/CarSpace37', altText: 'MonkeyCar37', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace40.png'), url: '/CarSpace40', altText: 'MonkeyCar40', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace46.png'), url: '/CarSpace46', altText: 'MonkeyCar46', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar1.png'), url: '/CarSpaceCar1', altText: 'SmileCar1', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar4.png'), url: '/CarSpaceCar4', altText: 'SmileCar4', type: 'Gasoline', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar7.png'), url: '/CarSpaceCar7', altText: 'SmileCar7', type: 'Gasoline', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar10.png'), url: '/CarSpaceCar10', altText: 'SmileCar10', type: 'Gasoline', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar13.png'), url: '/CarSpaceCar13', altText: 'SmileCar13', type: 'Gasoline', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar16.png'), url: '/CarSpaceCar16', altText: 'SmileCar16', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar19.png'), url: '/CarSpaceCar19', altText: 'SmileCar19', type: 'Gasoline', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar22.png'), url: '/CarSpaceCar22', altText: 'SmileCar22', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar25.png'), url: '/CarSpaceCar25', altText: 'SmileCar25', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar28.png'), url: '/CarSpaceCar28', altText: 'SmileCar28', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar31.png'), url: '/CarSpaceCar31', altText: 'SmileCar31', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar35.png'), url: '/CarSpaceCar35', altText: 'SmileCar35', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar38.png'), url: '/CarSpaceCar38', altText: 'SmileCar38', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar41.png'), url: '/CarSpaceCar41', altText: 'SmileCar41', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar44.png'), url: '/CarSpaceCar44', altText: 'SmileCar44', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar47.png'), url: '/CarSpaceCar47', altText: 'SmileCar47', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar50.png'), url: '/CarSpaceCar50', altText: 'SmileCar50', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar53.png'), url: '/CarSpaceCar53', altText: 'SmileCar53', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar1.png'), url: '/KiaCar1', altText: 'KiaCar1', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar2.png'), url: '/KiaCar2', altText: 'KiaCar2', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar3.png'), url: '/KiaCar3', altText: 'KiaCar3', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar4.png'), url: '/KiaCar4', altText: 'KiaCar4', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar5.png'), url: '/KiaCar5', altText: 'KiaCar5', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar6.png'), url: '/KiaCar6', altText: 'KiaCar6', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar7.png'), url: '/KiaCar7', altText: 'KiaCar7', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar8.png'), url: '/KiaCar8', altText: 'KiaCar8', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar9.png'), url: '/KiaCar9', altText: 'KiaCar9', type: 'Gasoline', sort: 'Sedan' },

    { imgSrc: require('@/assets/KiaCar10.png'), url: '/KiaCar10', altText: 'KiaCar10', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar11.png'), url: '/KiaCar11', altText: 'KiaCar11', type: 'Gasoline', sort: 'Sedan' },  
    
    { imgSrc: require('@/assets/KiaCar12.png'), url: '/KiaCar12', altText: 'KiaCar12', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar13.png'), url: '/KiaCar13', altText: 'KiaCar13', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar14.png'), url: '/KiaCar14', altText: 'KiaCar14', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar15.png'), url: '/KiaCar15', altText: 'KiaCar15', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar16.png'), url: '/KiaCar16', altText: 'KiaCar16', type: 'Gasoline', sort: 'Sedan' },
     
    { imgSrc: require('@/assets/KiaCar17.png'), url: '/KiaCar17', altText: 'KiaCar17', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar18.png'), url: '/KiaCar18', altText: 'KiaCar18', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar19.png'), url: '/KiaCar19', altText: 'KiaCar19', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar20.png'), url: '/KiaCar20', altText: 'KiaCar20', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar21.png'), url: '/KiaCar21', altText: 'KiaCar21', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar22.png'), url: '/KiaCar22', altText: 'KiaCar22', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar23.png'), url: '/KiaCar23', altText: 'KiaCar23', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar24.png'), url: '/KiaCar24', altText: 'KiaCar24', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/KiaCar25.png'), url: '/KiaCar25', altText: 'KiaCar25', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar1.png'), url: '/SamsungCar1', altText: 'SamsungCar1', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar2.png'), url: '/SamsungCar2', altText: 'SamsungCar2', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar3.png'), url: '/SamsungCar3', altText: 'SamsungCar3', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar4.png'), url: '/SamsungCar4', altText: 'SamsungCar4', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar5.png'), url: '/SamsungCar5', altText: 'SamsungCar5', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar6.png'), url: '/SamsungCar6', altText: 'SamsungCar6', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar7.png'), url: '/SamsungCar7', altText: 'SamsungCar7', type: 'Electric', sort: 'Sedan' },   
          
    { imgSrc: require('@/assets/SsangyongCar1.png'), url: '/SsangyongCar1', altText: 'SsangyongCar1', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SsangyongCar2.png'), url: '/SsangyongCar2', altText: 'SsangyongCar2', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SsangyongCar3.png'), url: '/SsangyongCar3', altText: 'SsangyongCar3', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SsangyongCar4.png'), url: '/SsangyongCar4', altText: 'SsangyongCar4', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SsangyongCar5.png'), url: '/SsangyongCar5', altText: 'SsangyongCar5', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SsangyongCar6.png'), url: '/SsangyongCar6', altText: 'SsangyongCar6', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SsangyongCar7.png'), url: '/SsangyongCar7', altText: 'SsangyongCar7', type: 'Gasoline', sort: 'Sedan' },        

    { imgSrc: require('@/assets/ChevroletCar1.png'), url: '/ChevroletCar1', altText: 'ChevroletCar1', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar2.png'), url: '/ChevroletCar2', altText: 'ChevroletCar2', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar3.png'), url: '/ChevroletCar3', altText: 'ChevroletCar3', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar4.png'), url: '/ChevroletCar4', altText: 'ChevroletCar4', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar5.png'), url: '/ChevroletCar5', altText: 'ChevroletCar5', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar6.png'), url: '/ChevroletCar6', altText: 'ChevroletCar6', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar7.png'), url: '/ChevroletCar7', altText: 'ChevroletCar7', type: 'Gasoline', sort: 'Sedan' },                      

    { imgSrc: require('@/assets/SamsungCar8.png'), url: '/SamsungCar8', altText: 'SamsungCar8', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar9.png'), url: '/SamsungCar9', altText: 'SamsungCar9', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar10.png'), url: '/SamsungCar10', altText: 'SamsungCar10', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar11.png'), url: '/SamsungCar11', altText: 'SamsungCar11', type: 'Gasoline', sort: 'Sedan' },  
    { imgSrc: require('@/assets/SamsungCar12.png'), url: '/SamsungCar12', altText: 'SamsungCar12', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar13.png'), url: '/SamsungCar13', altText: 'SamsungCar13', type: 'Gasoline', sort: 'Sedan' },
    { imgSrc: require('@/assets/SamsungCar14.png'), url: '/SamsungCar14', altText: 'SamsungCar14', type: 'Gasoline', sort: 'Sedan' },  
          
          ],
          Electric: [
    { imgSrc: require('@/assets/SmileMobile1.png'), url: '/SmileTruck1', altText: 'SmileTruck1', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile2.png'), url: '/SmileTruck2', altText: 'SmileTruck2', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile3.png'), url: '/SmileTruck3', altText: 'SmileTruck3', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile4.png'), url: '/SmileTruck4', altText: 'SmileTruck4', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile5.png'), url: '/SmileTruck5', altText: 'SmileTruck5', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile6.png'), url: '/SmileTruck6', altText: 'SmileTruck6', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile7.png'), url: '/SmileTruck7', altText: 'SmileTruck7', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile8.png'), url: '/SmileTruck8', altText: 'SmileTruck8', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile9.png'), url: '/SmileTruck9', altText: 'SmileTruck9', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile10.png'), url: '/SmileTruck10', altText: 'SmileTruck10', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile11.png'), url: '/SmileTruck11', altText: 'SmileTruck11', type: 'Electric', sort: 'Truck' },  
    { imgSrc: require('@/assets/SmileMobile12.png'), url: '/SmileTruck12', altText: 'SmileTruck12', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile13.png'), url: '/SmileTruck13', altText: 'SmileTruck13', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile14.png'), url: '/SmileTruck14', altText: 'SmileTruck14', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile15.png'), url: '/SmileTruck15', altText: 'SmileTruck15', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile16.png'), url: '/SmileTruck16', altText: 'SmileTruck16', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile17.png'), url: '/SmileTruck17', altText: 'SmileTruck17', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile18.png'), url: '/SmileTruck18', altText: 'SmileTruck18', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile19.png'), url: '/SmileTruck19', altText: 'SmileTruck19', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile20.png'), url: '/SmileTruck20', altText: 'SmileTruck20', type: 'Electric', sort: 'Truck' },
    { imgSrc: require('@/assets/SmileMobile21.png'), url: '/SmileTruck21', altText: 'SmileTruck21', type: 'Electric', sort: 'Truck' }, 

    { imgSrc: require('@/assets/CarSpace2.png'), url: '/CarSpace2', altText: 'MonkeyCar2', type: 'Electric', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace5.png'), url: '/CarSpace5', altText: 'MonkeyCar5', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace8.png'), url: '/CarSpace8', altText: 'MonkeyCar8', type: 'Electric', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpace18.png'), url: '/CarSpace18', altText: 'MonkeyCar18', type: 'Electric', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace21.png'), url: '/CarSpace21', altText: 'MonkeyCar21', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace24.png'), url: '/CarSpace24', altText: 'MonkeyCar24', type: 'Electric', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpace35.png'), url: '/CarSpace35', altText: 'MonkeyCar35', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace38.png'), url: '/CarSpace38', altText: 'MonkeyCar38', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace41.png'), url: '/CarSpace41', altText: 'MonkeyCar41', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace44.png'), url: '/CarSpace44', altText: 'MonkeyCar44', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace47.png'), url: '/CarSpace47', altText: 'MonkeyCar47', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar2.png'), url: '/CarSpaceCar2', altText: 'SmileCar2', type: 'Electric', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar5.png'), url: '/CarSpaceCar5', altText: 'SmileCar5', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar8.png'), url: '/CarSpaceCar8', altText: 'SmileCar8', type: 'Electric', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar11.png'), url: '/CarSpaceCar11', altText: 'SmileCar11', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar14.png'), url: '/CarSpaceCar14', altText: 'SmileCar14', type: 'Electric', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar17.png'), url: '/CarSpaceCar17', altText: 'SmileCar17', type: 'Electric', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar20.png'), url: '/CarSpaceCar20', altText: 'SmileCar20', type: 'Electric', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar23.png'), url: '/CarSpaceCar23', altText: 'SmileCar23', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar26.png'), url: '/CarSpaceCar26', altText: 'SmileCar26', type: 'Electric', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar29.png'), url: '/CarSpaceCar29', altText: 'SmileCar29', type: 'Electric', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar32.png'), url: '/CarSpaceCar32', altText: 'SmileCar32', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar36.png'), url: '/CarSpaceCar36', altText: 'SmileCar36', type: 'Electric', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar39.png'), url: '/CarSpaceCar39', altText: 'SmileCar39', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar42.png'), url: '/CarSpaceCar42', altText: 'SmileCar42', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar45.png'), url: '/CarSpaceCar45', altText: 'SmileCar45', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar48.png'), url: '/CarSpaceCar48', altText: 'SmileCar48', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar51.png'), url: '/CarSpaceCar51', altText: 'SmileCar51', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar54.png'), url: '/CarSpaceCar54', altText: 'SmileCar54', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar1.png'), url: '/HyundaiCar1', altText: 'HyundaiCar1', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar2.png'), url: '/HyundaiCar2', altText: 'HyundaiCar2', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar3.png'), url: '/HyundaiCar3', altText: 'HyundaiCar3', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar4.png'), url: '/HyundaiCar4', altText: 'HyundaiCar4', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar5.png'), url: '/HyundaiCar5', altText: 'HyundaiCar5', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar6.png'), url: '/HyundaiCar6', altText: 'HyundaiCar6', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar7.png'), url: '/HyundaiCar7', altText: 'HyundaiCar7', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar8.png'), url: '/HyundaiCar8', altText: 'HyundaiCar8', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar9.png'), url: '/HyundaiCar9', altText: 'HyundaiCar9', type: 'Electric', sort: 'Sedan' },

    { imgSrc: require('@/assets/ChevroletCar8.png'), url: '/ChevroletCar8', altText: 'ChevroletCar8', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar9.png'), url: '/ChevroletCar9', altText: 'ChevroletCar9', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar10.png'), url: '/ChevroletCar10', altText: 'ChevroletCar10', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar11.png'), url: '/ChevroletCar11', altText: 'ChevroletCar11', type: 'Electric', sort: 'Sedan' },  
    { imgSrc: require('@/assets/ChevroletCar12.png'), url: '/ChevroletCar12', altText: 'ChevroletCar12', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar13.png'), url: '/ChevroletCar13', altText: 'ChevroletCar13', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/ChevroletCar14.png'), url: '/ChevroletCar14', altText: 'ChevroletCar14', type: 'Electric', sort: 'Sedan' },

    { imgSrc: require('@/assets/HyundaiCar10.png'), url: '/HyundaiCar10', altText: 'HyundaiCar10', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar11.png'), url: '/HyundaiCar11', altText: 'HyundaiCar11', type: 'Electric', sort: 'Sedan' },  
    { imgSrc: require('@/assets/HyundaiCar12.png'), url: '/HyundaiCar12', altText: 'HyundaiCar12', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar13.png'), url: '/HyundaiCar13', altText: 'HyundaiCar13', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar14.png'), url: '/HyundaiCar14', altText: 'HyundaiCar14', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar15.png'), url: '/HyundaiCar15', altText: 'HyundaiCar15', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar16.png'), url: '/HyundaiCar16', altText: 'HyundaiCar16', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar17.png'), url: '/HyundaiCar17', altText: 'HyundaiCar17', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar18.png'), url: '/HyundaiCar18', altText: 'HyundaiCar18', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar19.png'), url: '/HyundaiCar19', altText: 'HyundaiCar19', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar20.png'), url: '/HyundaiCar20', altText: 'HyundaiCar20', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/HyundaiCar21.png'), url: '/HyundaiCar21', altText: 'HyundaiCar21', type: 'Electric', sort: 'Sedan' }, 
   
    { imgSrc: require('@/assets/KiaCar26.png'), url: '/KiaCar26', altText: 'KiaCar26', type: 'Electric', sort: 'SUV' },
    { imgSrc: require('@/assets/KiaCar27.png'), url: '/KiaCar27', altText: 'KiaCar27', type: 'Electric', sort: 'SUV' },
    { imgSrc: require('@/assets/KiaCar28.png'), url: '/KiaCar28', altText: 'KiaCar28', type: 'Electric', sort: 'SUV' },        
          
    { imgSrc: require('@/assets/JoyCar1.png'), url: '/JoyCar1', altText: 'JoyCar1', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar2.png'), url: '/JoyCar2', altText: 'JoyCar2', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar3.png'), url: '/JoyCar3', altText: 'JoyCar3', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar4.png'), url: '/JoyCar4', altText: 'JoyCar4', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar5.png'), url: '/JoyCar5', altText: 'JoyCar5', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar6.png'), url: '/JoyCar6', altText: 'JoyCar6', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar7.png'), url: '/JoyCar7', altText: 'JoyCar7', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar8.png'), url: '/JoyCar8', altText: 'JoyCar8', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar9.png'), url: '/JoyCar9', altText: 'JoyCar9', type: 'Electric', sort: 'Sedan' },

    { imgSrc: require('@/assets/JoyCar10.png'), url: '/JoyCar10', altText: 'JoyCar10', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar11.png'), url: '/JoyCar11', altText: 'JoyCar11', type: 'Electric', sort: 'Sedan' },  
    { imgSrc: require('@/assets/JoyCar12.png'), url: '/JoyCar12', altText: 'JoyCar12', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar13.png'), url: '/JoyCar13', altText: 'JoyCar13', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar14.png'), url: '/JoyCar14', altText: 'JoyCar14', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar15.png'), url: '/JoyCar15', altText: 'JoyCar15', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar16.png'), url: '/JoyCar16', altText: 'JoyCar16', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar17.png'), url: '/JoyCar17', altText: 'JoyCar17', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar18.png'), url: '/JoyCar18', altText: 'JoyCar18', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar19.png'), url: '/JoyCar19', altText: 'JoyCar19', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar20.png'), url: '/JoyCar20', altText: 'JoyCar20', type: 'Electric', sort: 'Sedan' },
    { imgSrc: require('@/assets/JoyCar21.png'), url: '/JoyCar21', altText: 'JoyCar21', type: 'Electric', sort: 'Sedan' },       
          ],
          Diesel: [
    { imgSrc: require('@/assets/CargoTruck1.png'), url: '/CargoTruck1', altText: 'CargoTruck1', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck2.png'), url: '/CargoTruck2', altText: 'CargoTruck2', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck3.png'), url: '/CargoTruck3', altText: 'CargoTruck3', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck4.png'), url: '/CargoTruck4', altText: 'CargoTruck4', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck5.png'), url: '/CargoTruck5', altText: 'CargoTruck5', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck6.png'), url: '/CargoTruck6', altText: 'CargoTruck6', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck7.png'), url: '/CargoTruck7', altText: 'CargoTruck7', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck8.png'), url: '/CargoTruck8', altText: 'CargoTruck8', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck9.png'), url: '/CargoTruck9', altText: 'CargoTruck9', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck10.png'), url: '/CargoTruck10', altText: 'CargoTruck10', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck11.png'), url: '/CargoTruck11', altText: 'CargoTruck11', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck12.png'), url: '/CargoTruck12', altText: 'CargoTruck12', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck13.png'), url: '/CargoTruck13', altText: 'CargoTruck13', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck14.png'), url: '/CargoTruck14', altText: 'CargoTruck14', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck15.png'), url: '/CargoTruck15', altText: 'CargoTruck15', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck16.png'), url: '/CargoTruck16', altText: 'CargoTruck16', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck17.png'), url: '/CargoTruck17', altText: 'CargoTruck17', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck18.png'), url: '/CargoTruck18', altText: 'CargoTruck18', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck19.png'), url: '/CargoTruck19', altText: 'CargoTruck19', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck20.png'), url: '/CargoTruck20', altText: 'CargoTruck20', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck21.png'), url: '/CargoTruck21', altText: 'CargoTruck21', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck22.png'), url: '/CargoTruck22', altText: 'CargoTruck22', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck23.png'), url: '/CargoTruck23', altText: 'CargoTruck23', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck24.png'), url: '/CargoTruck24', altText: 'CargoTruck24', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CarSpace3.png'), url: '/CarSpace3', altText: 'MonkeyCar3', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace6.png'), url: '/CarSpace6', altText: 'MonkeyCar6', type: 'Diesel', sort: 'Sedan'},
    { imgSrc: require('@/assets/CarSpace9.png'), url: '/CarSpace9', altText: 'MonkeyCar9', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpace10.png'), url: '/CarSpace10', altText: 'MonkeyCar10', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace13.png'), url: '/CarSpace13', altText: 'MonkeyCar13', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpace16.png'), url: '/CarSpace16', altText: 'MonkeyCar16', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace19.png'), url: '/CarSpace19', altText: 'MonkeyCar19', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpace22.png'), url: '/CarSpace22', altText: 'MonkeyCar22', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace25.png'), url: '/CarSpace25', altText: 'MonkeyCar25', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace28.png'), url: '/CarSpace28', altText: 'MonkeyCar28', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace31.png'), url: '/CarSpace31', altText: 'MonkeyCar31', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace34.png'), url: '/CarSpace34', altText: 'MonkeyCar34', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace37.png'), url: '/CarSpace37', altText: 'MonkeyCar37', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace40.png'), url: '/CarSpace40', altText: 'MonkeyCar40', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace43.png'), url: '/CarSpace43', altText: 'MonkeyCar43', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace46.png'), url: '/CarSpace46', altText: 'MonkeyCar46', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpace49.png'), url: '/CarSpace49', altText: 'MonkeyCar49', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar3.png'), url: '/CarSpaceCar3', altText: 'SmileCar3', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar6.png'), url: '/CarSpaceCar6', altText: 'SmileCar6', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar9.png'), url: '/CarSpaceCar9', altText: 'SmileCar9', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar12.png'), url: '/CarSpaceCar12', altText: 'SmileCar12', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar15.png'), url: '/CarSpaceCar15', altText: 'SmileCar15', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar18.png'), url: '/CarSpaceCar18', altText: 'SmileCar18', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar21.png'), url: '/CarSpaceCar21', altText: 'SmileCar21', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar24.png'), url: '/CarSpaceCar24', altText: 'SmileCar24', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar27.png'), url: '/CarSpaceCar27', altText: 'SmileCar27', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar30.png'), url: '/CarSpaceCar30', altText: 'SmileCar30', type: 'Diesel', sort: 'Bus' },
    { imgSrc: require('@/assets/CarSpaceCar33.png'), url: '/CarSpaceCar33', altText: 'SmileCar33', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar36.png'), url: '/CarSpaceCar36', altText: 'SmileCar36', type: 'Diesel', sort: 'Suv' },
    { imgSrc: require('@/assets/CarSpaceCar39.png'), url: '/CarSpaceCar39', altText: 'SmileCar39', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar42.png'), url: '/CarSpaceCar42', altText: 'SmileCar42', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar45.png'), url: '/CarSpaceCar45', altText: 'SmileCar45', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar48.png'), url: '/CarSpaceCar48', altText: 'SmileCar48', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar51.png'), url: '/CarSpaceCar51', altText: 'SmileCar51', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CarSpaceCar54.png'), url: '/CarSpaceCar54', altText: 'SmileCar54', type: 'Diesel', sort: 'Sedan' },
    { imgSrc: require('@/assets/CargoTruck25.png'), url: '/CargoTruck25', altText: 'CargoTruck25', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck26.png'), url: '/CargoTruck26', altText: 'CargoTruck26', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck27.png'), url: '/CargoTruck27', altText: 'CargoTruck27', type: 'Diesel', sort: 'Truck' },
    { imgSrc: require('@/assets/CargoTruck28.png'), url: '/CargoTruck28', altText: 'CargoTruck28', type: 'Diesel', sort: 'Truck' },     
          ],
      };
        return sampleResults[query] || [];
      },
      toggle() {
        this.isOpen = !this.isOpen;
      },
      openLink(url) {
        window.open(url, '_blank');
      }
    }
  };
  </script>
  
    
    <style scoped>
    #HomeVue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    .search-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 100px; /* 위로부터 100px 떨어지도록 설정 */
      
    }
    
    .smile-text {
      color: red; /* 빨강색 텍스트 */
      font-size: 1.5em;
      margin-bottom: 10px;
      text-align: center; /* 텍스트 중앙 정렬 */
      margin-top: -50px; /* 조정중,... */
    }
    
    .smile-text span {
      font-weight: bold; /* 글자를 두껍게 만듦 */
    }
    
    .red {
      color: red;
    }
    
    .orange {
      color: orange;
    }
    
    .yellow {
      color: yellow;
    }
    
    .green {
      color: green;
    }
    
    .blue {
      color: blue;
    }
    
    .indigo {
      color: indigo;
    }
    
    .purple {
      color: purple;
    }
    
    .search-input {
      display: flex;
      align-items: center;
    }
    
    .search-buttons {
      display: flex;
      gap: 0px; /* 검색 버튼 사이 간격을 줄임 */
      margin-left: 10px; /* 검색창과 버튼 사이 여백 */
      margin-top: 20px; /* 검색 버튼을 아래로 이동 */
    }
    
    .search-buttons button {
      padding: 10px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .search-buttons button img {
      width: 50px; /* 아이콘 크기 조절 */
    }
    
    .search-buttons button:hover {
      transform: scale(1.2);
    }
    
    .search-results {
      display: grid;
      grid-template-columns: repeat(7, 1fr); /* 7열 격자 */
      gap: 5px; /* 격자 항목들 간의 간격 설정 */
      margin-top: 20px;
    }
    
    .search-results .result-item img {
      width: 90%; /* 이미지 너비를 부모 요소의 너비에 맞게 조정 */
      height: auto; /* 이미지 높이는 자동으로 조정됨 */
      object-fit: cover; /* 이미지가 부모 요소에 맞게 조정될 수 있도록 */
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .result-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .result-item img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .result-item img:last-child {
      margin-right: 0; /* 마지막 이미지의 오른쪽 마진 제거 */
    }
    
    .result-item img:hover {
      transform: scale(1.1);
    }
    
    .no-results {
      margin-top: 20px;
      text-align: center;
      font-size: 1.2em;
      color: #888;
    }
    
    .button-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .button-content img {
      width: 30px;
    }
    
    .button-content span {
      margin-top: 5px;
    }
    
    .title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 130px;
    }
    
    .title {
      margin-bottom: 10px; /* 제목 사이의 간격을 10px로 설정 */
    }
    
    .a2-image {
      margin-top: -5px;
      width: 30%; 
      height: auto; /* 이미지 높이 자동 조정 */
    }
    
    .a1-text-box {
    border: 2px solid skyblue;
    padding: 10px;
    margin: 0 auto; /* 수평 중앙 정렬을 위해 margin을 auto로 설정 */
    width: 92%;
    text-align: justify;
    font-size: 1em;
    font-weight: bold; 
    color: skyblue; /* 텍스트 색상을 하늘색으로 설정 */
  }
  
    
    .grid-container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      max-width: 1500px; /* 예시 값, 원하는 크기로 조절해보세요 */
      align-items: center;
    }

    
    
    
    .grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .grid-item img {
      width: 170px; /* Adjust the width to your desired size */
      height: auto;
      cursor: pointer;
      margin: 2px; /* Reduce the margin to make the grid more compact */
      transition: transform 0.3s;
      align-items: center;
    }
    
    .grid-item img.enlarged {
      transform: scale(1.1); /* 마우스가 이미지 위로 이동했을 때 이미지를 110% 크기로 확대합니다. */
    }
    
    .grid-image {
      width: 200px; /* 이미지의 너비를 200px로 조절합니다. */
      height: auto; /* 이미지의 높이를 자동으로 조정합니다. */
      align-items: center;
    }
    
    .grid-item img {
      transition: transform 0.3s ease, filter 0.3s ease; /* 부드러운 변화를 위한 트랜지션 효과 추가 */
    }
    .grid-image:hover {
      transform: scale(1.1);
    }
    
    .dream-text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px; /* 필요한 경우 높이를 조절 */
      margin-top: 20px; /* 텍스트 상단 여백 조절 */
    }
    
    .dream-text-container p {
      font-size: 1.7em;
      font-weight: bold;
      text-align: center;
    }
    
    .language-selector {
      position: absolute;
      top: 100px;
      right: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    .Monkey-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      display: flex;
      align-items: center;
    }
    
    .Monkey-icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  
    .custom-grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10dvh;
    margin-top: 120px;
    margin-bottom: 0px;
  }
  .curtain-search-button {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    background-color:skyblue;
    border: 1px solid #ccc;
    color: white; /* 텍스트 색상을 오렌지 색상으로 설정 */
    border-radius: 5px;
  }
  
  .toggle-image {
    width: 30px; /* Set the width of the image */
    height: 30px; /* Set the height of the image */
    transition: transform 0.3s;
    margin-right: 10px;
  }
  
  .header img.rotate {
    transform: rotate(180deg);
  }
  
  .button-container {
    overflow: hidden;
  }
  
  /* Hide text frame box */
  .button-container button,
  .router-link {
    background: none;
    border: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
  }
  
  .button-container button:hover,
  .router-link:hover {
    text-decoration: none;
  }
  
  .search-row {
    display: flex;
    justify-content: center;
    margin: 5px 0;
  }
  
  .search-button {
    margin: 0 5px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-button:hover {
    background-color: #e00f0f;
  }
  
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
    max-height: 0;
    padding: 0;
    margin: 0;
  }
  
  /* 내부 및 외부 링크 텍스트를 볼드체로 변경 */
  .button-container button,
  .router-link,
  a {
    font-weight: bold;
  }
  
  .car-space-grid {
    display: flex;
    flex-direction: column; /* 또는 row */
  }
  
  .car-grid-item {
    margin: 5px; /* 필요에 따라 간격을 조정 */
  }
  
  
  .BottomCar-grid-container {
  height: 300px; /* 원하는 높이로 조정 */
  transform: scale(0.7);
  margin-top: -40px;
}

.MapVue-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
}
.MapSearch-grid-container {
  margin-top: 5750px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}

.LanguageDropdown-container {
  position: absolute;
  right: -20px;
  top:930px;
  transform: translateX(0); /* 현재 transform을 초기화합니다. */
}


    </style>

