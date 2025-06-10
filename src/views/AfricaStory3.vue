<template>
  <div class="RainbowMenu-container">
    <RainbowMenu />
  </div>

  <div class="FlagButton-grid-container">
  <FlagButton @changeLanguage="changeLanguage" />
</div>



  <div class="frame">
    <div class="content">
      <br>
      <div class="how-to-buy-car">
        <h1>{{ $t('titleAfrica1') }}</h1>
      </div>
      <br /><br />

      <section>
        <h2>{{ $t('food') }}</h2>
        <p>{{ $t('food1') }}</p>
        <p>{{ $t('food2') }}</p>
      </section>
      
      <section>
        <h2>{{ $t('water') }}</h2>
        <p>{{ $t('water1') }}</p>
        <p>{{ $t('water2') }}</p>
      </section>
      
      <section>
        <h2>{{ $t('education') }}</h2>
        <p>{{ $t('education1') }}</p>
        <p>{{ $t('education2') }}</p>
        <p>{{ $t('education3') }}</p>
      </section>
      
      <section>
        <h2>{{ $t('humanRights') }}</h2>
        <p>{{ $t('humanRights1') }}</p>
        <p>{{ $t('humanRights2') }}</p>
        <p>{{ $t('humanRights3') }}</p>
      </section>
      
      <section>
        <h2>{{ $t('efforts') }}</h2>
        <p>{{ $t('efforts1') }}</p>
        <p>{{ $t('efforts2') }}</p>
        <p>{{ $t('conclusion') }}</p>
      </section>
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
import FlagButton from '@/views/FlagButton.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
  name: 'HowToBuyCar',
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
    FlagButton,
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
  }
}
};
</script>

<style scoped>
.how-to-buy-car {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

section {
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
}

ol, ul {
  padding-left: 20px;
  list-style-position: inside;
}

ol li, ul li {
  margin-bottom: 10px;
}

strong {
  color: #2980b9;
  display: block;
  margin-bottom: 5px;
}

p {
  text-align: left;
  font-weight: bold;
  color: #3498db;
}

.frame {
  width: 55%;
  max-width: 800px;
  margin: 0 auto;
}

.content {
  padding: 20px;
}

.MapSearch-grid-container {
  margin-top: 750px;
}

.Map-grid-container {
  margin-top: 80px;
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
</style>
