<template>
  <div class="language-buttons">
    <button v-for="(language, index) in languages" :key="index" @click="changeLanguage(language.code)">
      <img :src="getImagePath(language.code)" alt="Flag" class="flag-icon">
      {{ language.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { code: 'en', name: 'English' },
        { code: 'ko', name: 'Korean' },
        { code: 'FlagBenin', name: 'Benin' },
        { code: 'FlagBotswana', name: 'Botswana' },
        { code: 'FlagBurkina', name: 'Burkina Faso' },
        { code: 'FlagBurundi', name: 'Burundi' },
        { code: 'FlagCameroon', name: 'Cameroon' },
        { code: 'FlagCapeVerde', name: 'Cape Verde' },
        { code: 'FlagMalawi', name: 'Malawi' },
        { code: 'FlagChad', name: 'Chad' },
        { code: 'FlagComoros', name: 'Comoros' },
        { code: 'FlagRwanda', name: 'Rwanda' },
        { code: '13FlagCongo', name: 'Congo' },
        { code: '14FlagDjibouti', name: 'Djibouti' },
        { code: '15FlagEgypt', name: 'Egypt' },
        { code: '16FlagEquatorialGuinea', name: 'Equatorial Guinea' },
        { code: '17FlagEritrea', name: 'Eritrea' },
        { code: '18FlagEswatini', name: 'Eswatini' },
        { code: '19FlagEthiopia', name: 'Ethiopia' },
        { code: '20FlagGabon', name: 'Gabon' },
        // 추가한 국가들
        { code: 'FlagGambia', name: 'Gambia' },
        { code: 'FlagGhana', name: 'Ghana' },
        { code: 'FlagGuinea', name: 'Guinea' },
        { code: 'FlagGuineaBissau', name: 'Guinea Bissau' },
        { code: 'FlagIvoryCoast', name: 'Ivory Coast' },
        { code: 'FlagKenya', name: 'Kenya' },
        { code: 'FlagLesotho', name: 'Lesotho' },
        { code: 'FlagLiberia', name: 'Liberia' },
        { code: 'FlagLibya', name: 'Libya' },
        { code: 'FlagMadagascar', name: 'Madagascar' },
        { code: 'FlagMali', name: 'Mali' },
        { code: 'FlagMauritania', name: 'Mauritania' },
        { code: 'FlagMauritius', name: 'Mauritius' },
        { code: 'FlagMorocco', name: 'Morocco' },
        { code: 'FlagMozambique', name: 'Mozambique' },
        { code: 'FlagNamibia', name: 'Namibia' },
        { code: 'FlagNiger', name: 'Niger' },
        { code: 'FlagNigeria', name: 'Nigeria' },
        { code: 'FlagSaoTomeAndPrincipe', name: 'Sao Tome and Principe' },
        { code: 'FlagSenegal', name: 'Senegal' },
        { code: 'FlagSeychelles', name: 'Seychelles' },
        { code: 'FlagSierraLeone', name: 'Sierra Leone' },
        { code: 'FlagSomalia', name: 'Somalia' },
        { code: 'FlagSouthAfrica', name: 'South Africa' },
        { code: 'FlagSouthSudan', name: 'South Sudan' },
        { code: 'FlagSudan', name: 'Sudan' },
        { code: 'FlagTanzania', name: 'Tanzania' },
        { code: 'FlagTogo', name: 'Togo' },
        { code: 'FlagTunisia', name: 'Tunisia' },
        { code: 'FlagUganda', name: 'Uganda' },
        { code: 'FlagZambia', name: 'Zambia' },
        { code: 'FlagZimbabwe', name: 'Zimbabwe' }
      ]
    };
  },
  methods: {
    changeLanguage(language) {
      this.$emit('changeLanguage', language.toLowerCase()); // 부모 컴포넌트로 이벤트 전송
    },
    getImagePath(language) {
      // 언어에 따라 이미지 파일 경로를 반환합니다.
      return require(`@/assets/${language}.png`);
    }
  }
};
</script>

<style scoped>
.language-buttons {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.language-buttons button {
  margin-right: -1.5cm;
  margin-bottom: 0cm;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.language-buttons button:hover {
  background-color: #f0f0f0;
}

.flag-icon {
  width: 54px;
  height: auto;
  margin-right: 0.5cm;
}
</style>
