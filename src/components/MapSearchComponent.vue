<template>
  <div>
    <div class="search-with-buttons">
      <!-- 검색 입력 -->
      <input
        type="text"
        v-model="search"
        :placeholder="$t('searchPlaceholder')"
        class="search-input"
        @keyup.enter="handleSearch"
      />

      <!-- 검색 결과 -->
      <p v-if="search && searchResults.length === 0">{{ $t('noResults') }}</p>
      <ul v-if="searchResults.length > 0">
        <li v-for="(item, index) in searchResults" :key="index">
          <router-link
            :to="`/${item.text}`"
            class="search-result-link"
            @click.native="scrollToTop"
          >
            {{ item.text }}
          </router-link>
        </li>
      </ul>

      <!-- 가로 버튼 배열 -->
      <div class="link-buttons">
        <router-link to="/CarSales" class="car-search-button" @click.native="scrollToTop">{{ $t('ourMobile') }}</router-link>
        <router-link to="/Dream" class="car-search-button" @click.native="scrollToTop">{{ $t('ourDream') }}</router-link>
        <router-link to="/AboutVue" class="car-search-button" @click.native="scrollToTop">{{ $t('ourFuture') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searchResults: []
    };
  },
  props: {
    pageTexts: {
      type: Array,
      default: () => [
        { text: "/", searchTerm: "Home+Main" },
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
  background-color: white;
}

.search-input {
  width: 140%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 12px;
}

.search-result-link {
  text-decoration: none;
  color: orange;
  font-weight: bold;
}

.link-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  flex-wrap: nowrap; /* 모바일에서도 한 줄에 유지 */
  overflow-x: auto; /* 넘치면 가로 스크롤 */
}

.car-search-button {
  flex: 1 1 auto;
  min-width: 100px;
  max-width: 33%;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  background-color: #999;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;
}

/* 버튼 호버 */
.car-search-button:hover {
  background-color: #2a2929;
}

/* ✅ 반응형: 모바일 화면 대응 */
@media (max-width: 600px) {
  .search-with-buttons {
    width: 90%;
  }

  .search-input {
    width: 100%;
  }

  .link-buttons {
    gap: 8px;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 8px;
  }

  .car-search-button {
    max-width: none;
    flex: 0 0 auto;
    font-size: 13px;
    padding: 8px;
  }
}
</style>

