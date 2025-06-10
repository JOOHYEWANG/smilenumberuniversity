<template>
  <div>
    <div class="RainbowMenu-container">
      <RainbowMenu />
    </div>
    <br><br>

    <div class="LanguageDropdown-container">
      <LanguageDropdown
        :selected-language="selectedLanguage"
        @language-changed="handleLanguageChanged"
      />
    </div>

    <div class="Title">
      <h1> MONKEY-RUN GAME</h1>
    </div>

    <div class="container">
      <div class="monkey"></div>
      <div class="RunRunRun-container">
        <strong>Run! Run! Run! Smile! Monkey!</strong>
      </div>
    </div>

    <br><br>

    <div class="MapSearch-grid-container">
      <MapSearchComponent />
    </div>

    <div class="Map-grid-container">
      <MapVue />
    </div>
  </div>
</template>

<script>
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';
import LanguageDropdown from '@/views/LanguageDropdown.vue';

export default {
  name: "MonkeyAnimation",
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
    LanguageDropdown,
  },
  data() {
    return {
      selectedLanguage: 'ko', // 초기 선택 언어 설정
    };
  },
  computed: {
    searchResults() {
      if (!this.search) return [];
      return this.pageTexts.filter(text => text.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  methods: {
    handleLanguageChanged(language) {
      this.selectedLanguage = language;
    },
    enlargeImage(index) {
      const image = document.querySelector(`.image-${index + 1}`);
      if (image) {
        image.classList.add('enlarged');
      }
    },
    resetImage(index) {
      const image = document.querySelector(`.image-${index + 1}`);
      if (image) {
        image.classList.remove('enlarged');
      }
    },
    handleSearch() {
      const searchResult = this.searchResults;
      if (searchResult.length > 0) {
        // 검색 결과 중 첫 번째 항목으로 이동
        this.$router.push('/' + searchResult[0]);
      } else {
        // 검색 결과가 없는 경우 사용자에게 메시지 표시 등의 처리
        console.log("No results found.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: skyblue; 
}

.monkey {
  width: 330px; /* 개별 이미지 너비 */
  height: 330px; /* 개별 이미지 높이 */
  background-image: url('@/assets/tile000.png'); /* 첫 번째 이미지로 초기 설정 */
  animation: run 1s steps(9) infinite; 
}

@keyframes run {
  0%  { background-image: url('@/assets/tile000.png'); }
  10% { background-image: url('@/assets/tile001.png'); }
  20% { background-image: url('@/assets/tile002.png'); }
  30% { background-image: url('@/assets/tile003.png'); }
  40% { background-image: url('@/assets/tile004.png'); }
  50% { background-image: url('@/assets/tile005.png'); }
  60% { background-image: url('@/assets/tile006.png'); }
  70% { background-image: url('@/assets/tile007.png'); }
  85% { background-image: url('@/assets/tile008.png'); }
  100% { background-image: url('@/assets/tile000.png'); } /* 다시 첫 번째 이미지로 돌아가기 */
}

.MapSearch-grid-container {
  margin-top: 0px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}

.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}

.LanguageDropdown-container {
  padding: 0px;
  position: relative;
  z-index: 10; /* 다른 요소들보다 위에 올라가도록 설정 */
  top: -100px;  /* 위로 30px 이동 */
}

.RunRunRun-container strong {
  color: white; /* 텍스트 색상 하얀색으로 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
}
</style>
