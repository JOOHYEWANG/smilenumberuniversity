<template>
  <div>
    <div class="search-with-buttons">
      <input type="text"
             v-model="search"
             :placeholder="$t('searchPlaceholder')"
             style="width: 70%; height: 40px; text-decoration: none; color: black"
             @keyup.enter="handleSearch">
      <p v-if="search && searchResults.length === 0">{{ $t('noResults') }}</p>
      <ul v-if="searchResults.length > 0">
        <li v-for="(item, index) in searchResults" :key="index">
          <!-- 검색 결과에 해당하는 텍스트에 라우터 링크를 추가 -->
          <router-link :to="`/${item.text}`" style="text-decoration: none; color: orange; font-weight: bold;" @click.native="scrollToTop">
            {{ item.text }}
          </router-link>
        </li>
      </ul>
      <br><br><br>

      <div style="display: flex; justify-content: space-around;">
        <router-link to="/CarSales" class="car-search-button" style="width: 150px; padding: 7px; box-sizing: border-box; text-decoration: none; color: white; font-weight: bold;" @click.native="scrollToTop">{{ $t('ourMobile') }}</router-link>
        <router-link to="/Dream" class="car-search-button" style="width: 150px; padding: 7px; box-sizing: border-box; text-decoration: none; color: white; font-weight: bold;" @click.native="scrollToTop">{{ $t('ourDream') }}</router-link>
        <router-link to="/AboutVue" class="car-search-button" style="width: 150px; padding: 7px; box-sizing: border-box; text-decoration: none; color: white; font-weight: bold;" @click.native="scrollToTop">{{ $t('ourFuture') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '', // Holds the search input value
      searchResults: [] // Holds the search results
    };
  },
  props: {
    pageTexts: {
      type: Array,
      default: () => [
        { text: "/" , searchTerm: "Home+Main" },
        { text: "AfricaStory1", searchTerm: "Africa+Story+1" },
        { text: "AfricaStory2", searchTerm: "Africa+Story+2" },
        { text: "JesusSaid", searchTerm: "Jesus+Said" },
        { text: "HelloSmileMonkey", searchTerm: "Hello+Smile+Monkey+Yeram+고예람" },
        { text: "CarSpaceCarGrid0", searchTerm: "Car+Space+Car+Grid+0+SmileCar" },
        { text: "CarSpaceCarGrid1", searchTerm: "Car+Space+Car+Grid+1_MonkeyCar" },
        { text: "CarSpaceCarGrid2", searchTerm: "Car+Space+Car+Grid+2" },
        { text: "CarSpaceCarGridChevrolet", searchTerm: "Car+Space+Car+Grid+Chevrolet" },
        { text: "CarSpaceCarGridHyundai", searchTerm: "Car+Space+Car+Grid+Hyundai" },
        { text: "CarSpaceCarGridJoy", searchTerm: "Car+Space+Car+Grid+Joy" },
        { text: "CarSpaceCarGridKia", searchTerm: "Car+Space+Car+Grid+Kia" },
        { text: "CarSpaceCarGridSamsung", searchTerm: "Car+Space+Car+Grid+Samsung" },
        { text: "CarSpaceCarGridSsangyong", searchTerm: "Car+Space+Car+Grid+Ssangyong" },
        { text: "CarSpaceCarGridSmileTruck", searchTerm: "Car+Space+Car+Grid+Smile+Truck" },
        { text: "CarSales", searchTerm: "Car+Sales" },
        { text: "CarGasoline", searchTerm: "Car+Gasoline" },
        { text: "AboutVue", searchTerm: "About+Vue" },
        { text: "Dream", searchTerm: "Dream" },
        { text: "Grid", searchTerm: "Grid" },
        { text: "SunFlowerText", searchTerm: "Sun+Flower+Text+마태복음18장+성경+예수님말씀" },
        { text: "SunFlowerText1", searchTerm: "Sun+Flower+Text+1+누가복음23장+성경+예수님말씀" },
        { text: "SunFlowerText2", searchTerm: "Sun+Flower+Text+2+고린도전서13장+성경+예수님말씀" },
        { text: "ContactVue", searchTerm: "Contact+Vue" },
        { text: "HowToBuyCar", searchTerm: "How+To+Buy+Car" },
        { text: "ShipSchedule", searchTerm: "Ship+Schedule" },
        { text: "ShipSchedule1", searchTerm: "Ship+Schedule+1+Kenya" },
        { text: "ShipSchedule2", searchTerm: "Ship+Schedule+2+Malawi" },
        { text: "ShipSchedule3", searchTerm: "Ship+Schedule+3+Rwanda" },
        { text: "ShipSchedule4", searchTerm: "Ship+Schedule+4+Congo" },
        { text: "ShipSchedule5", searchTerm: "Ship+Schedule+5+Ghana" },
        { text: "ShipSchedule6", searchTerm: "Ship+Schedule+6+Uganda" },
        { text: "ShipSchedule7", searchTerm: "Ship+Schedule+7+Niger" },
        { text: "ShipSchedule8", searchTerm: "Ship+Schedule+8+Algeria" },
        { text: "ShipSchedule9", searchTerm: "Ship+Schedule+9+Sudan" },
        { text: "ShipSchedule10", searchTerm: "Ship+Schedule+10+Tchad" },
      ]
    }
  },
  methods: {
    handleSearch() {
      // Filter pageTexts based on search input
      if (this.search) {
        this.searchResults = this.pageTexts.filter(page =>
          page.text.toLowerCase().includes(this.search.toLowerCase()) ||
          page.searchTerm.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.searchResults = [];
      }
    },
    scrollToTop() {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 0);
    }
  }
};
</script>

<style scoped>
.search-with-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 4px;
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  background-color: white; /* 프레임을 하늘색으로 설정 */
}

.search-input {
  width: calc(100% - 80px); /* 입력창 너비 조정 */
  height: 40px; /* 높이를 40px로 설정 */
  padding: 10px; /* 내부 여백 설정 */
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px 0 0 4px; /* 왼쪽 끝을 둥글게 */
  outline: none;
}

.search-button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #f0f0f0; /* 회색 배경색 */
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0; /* 오른쪽 끝을 둥글게 */
  cursor: pointer;
}

.search-button:hover {
  background-color: #e0e0e0; /* 호버 시 더 짙은 회색 */
}

.no-results {
  margin-top: 10px;
  color: red;
}

.link-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.car-search-button {
  width: 150px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  background-color: #DAA520;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.car-search-button:hover {
  background-color: #e0e0e0; /* 호버 시 더 짙은 회색 */
}
</style>
