<template>

<div>
      <div class="RainbowMenu-container">
        <RainbowMenu />
      </div>
      </div>
      <br><br>

  <div class="about-container">
    <!-- Language Selector -->
    <div class="language-selector">
      <button @click="changeLanguage('en')" class="flag-button">
        <img src="@/assets/en.png" alt="English" class="flag-icon"> {{ $t('english') }}
      </button>
      <button @click="changeLanguage('ko')" class="flag-button">
        <img src="@/assets/ko.png" alt="한국어" class="flag-icon"> {{ $t('한국어') }}
      </button>
    </div>

    <div class="content">
      <h1>{{ $t('title1') }}</h1>
      <h1>{{ $t('title2') }}</h1>
      <br><br>
      <p class="bold-text">{{ $t('destination') }}</p>
      <p class="bold-text">{{ $t('plan') }}</p>
      <p class="bold-text">{{ $t('mathLab') }}</p>
      <p class="bold-text">{{ $t('system') }}</p>
      <p class="bold-text">{{ $t('usedCarExport') }}</p>
      <p class="bold-text">{{ $t('reverseTimeFlow') }}</p>
      <p class="bold-text">
        "Until the day when all time is filled with love, the Smilenumber motors will be with you." - Amen.
      </p>
    </div>
  </div>

  <div class="MapSearch-grid-container">
  <MapSearchComponent />
</div>

<div class="Map-grid-container">
  <MapVue />
</div>

</template>

<script>
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';


export default {
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
  },

  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.about-container {
  text-align: center;
  padding: 20px;
  position: relative; /* language-selector를 위치시키기 위해 추가 */
}

.language-selector {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.flag-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
}

.flag-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.content {
  text-align: justify;
  margin: 20px;
  padding-right: 100px; /* 오른쪽 여백 추가 */
}

h1 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

p {
  font-size: 1em;
  line-height: 1.5;
}

.bold-text {
  font-weight: bolder;
}

.content h1 {
    text-align: center;
    font-weight: bold;
    color: black;
  }
  .bold-text {
    font-weight: bold;
  }

  .MapSearch-grid-container {
  margin-top: 50px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
</style>
