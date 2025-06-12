<template>
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
</template>

<script>
export default {
  name: 'LanguageDropdown',
  props: {
    selectedLanguage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showLanguageDropdown: false
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.$emit('language-changed', lang);
      localStorage.setItem('selectedLanguage', lang); // 선택한 언어를 로컬 스토리지에 저장
    },
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    getFlagImagePath(language) {
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
  },
  created() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.$i18n.locale = savedLanguage;
      this.$emit('language-changed', savedLanguage);
    }
  }
};
</script>

<style scoped>
.language-dropdown {
  position: absolute;
  top: 115px;
  right: 100px;
}

.language-dropdown button {
  background-color: #999;
  border: 2px solid white; /* 프레임 경계를 하얀색으로 설정 */
  padding: 10px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  font-weight: bold; /* 텍스트를 볼드체로 설정 */
  color: white; /* 텍스트 색상을 하얀색으로 설정 */
}

.language-dropdown button img {
  width: 44px;
  height: auto;
  margin-right: 5px;
}

.language-dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.language-dropdown ul li {
  padding: 8px 12px;
}

.language-dropdown ul li a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.language-dropdown:hover ul {
  display: block;
}

.flag-icon {
  width: 24px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
}

.flag-icon-small {
  width: 24px;
  height: auto;
  margin-right: 5px;
}
</style>
