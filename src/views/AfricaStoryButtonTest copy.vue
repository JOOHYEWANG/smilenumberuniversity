<template>
  
  <div class="AfricaStory1-container">
        <AfricaStory1 />
      </div>


  <div>
    <div class="language-dropdown">
      <button @click="toggleLanguageDropdown">
        <img :src="getFlagImagePath(selectedLanguage)" alt="Flag" class="flag-icon">
        Language
      </button>
      <ul v-if="showLanguageDropdown">
        <li><a @click="changeLanguage('ko')"><img src="@/assets/ko.png" class="flag-icon-small" alt="한국어"> 한국어</a></li>
        <li><a @click="changeLanguage('en')"><img src="@/assets/en.png" class="flag-icon-small" alt="English"> English</a></li>
        <li><a @click="changeLanguage('Be')"><img src="@/assets/FlagBenin.png" class="flag-icon-small" alt="Benin"> Benin</a></li>
        <li><a @click="changeLanguage('Bo')"><img src="@/assets/FlagBotswana.png" class="flag-icon-small" alt="Botswana"> Botswana</a></li>
        <li><a @click="changeLanguage('Bu')"><img src="@/assets/FlagBurkina.png" class="flag-icon-small" alt="Burkina"> Burkina Faso</a></li>
        <li><a @click="changeLanguage('Bur')"><img src="@/assets/FlagBurundi.png" class="flag-icon-small" alt="Burundi"> Burundi</a></li>
        <li><a @click="changeLanguage('Ca')"><img src="@/assets/FlagCameroon.png" class="flag-icon-small" alt="Cameroon">Cameroon</a></li>
        <li><a @click="changeLanguage('Cap')"><img src="@/assets/FlagCapeVerde.png" class="flag-icon-small" alt="CapeVerde">Cape Verde</a></li>
        <li><a @click="changeLanguage('Ma')"><img src="@/assets/FlagMalawi.png" class="flag-icon-small" alt="Malawi">Malawi</a></li>
        <li><a @click="changeLanguage('Ch')"><img src="@/assets/FlagChad.png" class="flag-icon-small" alt="Chad">Chad</a></li>
        <li><a @click="changeLanguage('Co')"><img src="@/assets/FlagComoros.png" class="flag-icon-small" alt="Comoros">Comoros</a></li>
        <li><a @click="changeLanguage('Rw')"><img src="@/assets/FlagRwanda.png" class="flag-icon-small" alt="Rwanda">Rwanda</a></li>
      </ul>
    </div>
  </div>

  <div class="content"></div>

  
</template>

<script>
import AfricaStory1 from '@/views/AfricaStory1.vue';

export default {
  name: 'AfricaSmileCarComponent',
  components: {
    AfricaStory1,
  },
  data() {
    return {
      showLanguageDropdown: false,
      selectedLanguage: 'ko', // 초기 선택 언어 설정 (한국어)
      translatedContent: {} 
    }
  },
  methods: {
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    changeLanguage(lang) {
      this.selectedLanguage = lang;
    },
    getFlagImagePath(language) {
      // 각 언어 코드에 따른 국기 이미지 경로 반환
      switch (language) {
        case 'ko':
          return require('@/assets/ko.png');
        case 'en':
          return require('@/assets/en.png');
        case 'Be':
          return require('@/assets/FlagBenin.png');
        case 'Bo':
          return require('@/assets/FlagBotswana.png');
        case 'Bu':
          return require('@/assets/FlagBurkina.png');
        case 'Bur':
          return require('@/assets/FlagBurundi.png');
        case 'Ca':
          return require('@/assets/FlagCameroon.png');
        case 'Cap':
          return require('@/assets/FlagCapeVerde.png');
        case 'Ma':
          return require('@/assets/FlagMalawi.png');
        case 'Ch':
          return require('@/assets/FlagChad.png');
        case 'Co':
          return require('@/assets/FlagComoros.png');
        case 'Rw':
          return require('@/assets/FlagRwanda.png');
        default:
          return '';
      }
    }
  }
}
</script>

<style scoped>
.language-dropdown {
  position: absolute;
  top: 80px; /* 원하는 위치로 조정 */
  left: 100px; /* 원하는 위치로 조정 */
}

.language-dropdown button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 수직으로 정렬 */
}

.language-dropdown button img {
  width: 64px; /* 국기 아이콘 크기 */
  height: auto;
  margin-right: 5px; /* 아이콘과 텍스트 사이의 간격 */
}

.language-dropdown ul {
  position: absolute;
  top: 100%; /* 버튼 아래에 위치 */
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.language-dropdown ul li {
  padding: 8px 12px;
}

.language-dropdown ul li a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 수직으로 정렬 */
}

.language-dropdown:hover ul {
  display: block;
}

.flag-icon {
  width: 54px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
}

.flag-icon-small {
  width: 54px;
  height: auto;
  margin-right: 5px;
}

.content {
  margin-top: 20px;
  border: 2px white; /* 프레임을 하늘색으로 설정 */
  padding: 15px; /* 프레임 안쪽 여백 설정 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
  color: #3498db; /* 프레임 안의 텍스트를 #3498db으로 설정 */
  font-weight: bold;
  width: 700px; /* 프레임 너비를 500px로 설정 */
  margin-left: auto; /* 왼쪽 마진 자동 설정으로 중앙 정렬 */
  margin-right: auto; /* 오른쪽 마진 자동 설정으로 중앙 정렬 */
}

h1, h2 {
  color: black; /* 제목 색상을 검정색으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
}

h3 {
  color: black; /* 제목 색상을 검정색으로 설정 */
  text-align: left;
}
</style>
