<template>
  
    <div class="RainbowMenu-container">
      <RainbowMenu />
    </div>
    <br><br>

    <div class="language-dropdown-container">
    <!-- LanguageDropdown 자식 컴포넌트 -->
    <LanguageDropdown
      :selected-language="selectedLanguage"
      @language-changed="handleLanguageChanged"
    />
  </div>

    <!-- 여기에 다국어로 표시할 내용을 넣으세요 -->
    <div class="text-container">
      <h1>"웃는숫자 쉐보레 자동차"<br>
        <br>
           "웃음! 그리고 웃음! 언제나 웃음 가득한 우리의 세계!"</h1>
           <br>
    </div>
    <br>

    <div class="CarSpaceCarGrid-container">
      <CarSpaceCarGridChevrolet />
    </div>
    <br><br>

    <div class="MapSearch-grid-container">
      <MapSearchComponent />
    </div>

    <div class="Map-grid-container">
      <MapVue />
    </div>

</template>

<script>
import LanguageDropdown from '@/views/LanguageDropdown'; // 경로는 실제 프로젝트에 맞게 변경해주세요
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import CarSpaceCarGridChevrolet from '@/views/CarDetailsType/CarSpaceCarGridChevrolet.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
  components: {
    LanguageDropdown,
    RainbowMenu,
    MapVue,
    MapSearchComponent,
    CarSpaceCarGridChevrolet,
  },
  data() {
    return {
      selectedLanguage: 'ko', // 초기 선택 언어 설정
    };
  },
  methods: {
    handleLanguageChanged(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>

<style scoped>
.text-container {
  margin: 20px auto; /* 상단 여백과 가운데 정렬 */
  padding: 15px; /* 내부 여백 */
  text-align: center; /* 텍스트 왼쪽 정렬 */
  font-weight: bold; /* 글꼴 굵기 */
}

h2 {
  color: black; /* 제목 색상을 검정색으로 설정 */
  text-align: center; /* 제목들을 중앙 정렬 */
}

h1, h3 {
  text-align: center; /* 텍스트 중앙 정렬 */
  color: black; /* 텍스트 색상 */
}

.language-dropdown-container {
  /* 원하는 위치 조정 스타일을 여기에 추가하세요 */
  position: relative; /* 또는 absolute */
  top: -70px; /* 조정 가능한 위치 값 */
  left: 0px; /* 조정 가능한 위치 값 */
  /* 다른 스타일 */
}
</style>
