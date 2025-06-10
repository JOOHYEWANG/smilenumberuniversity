<template>
      
      <div class="RainbowMenu-container">
        <RainbowMenu />
      </div>


      <div>
    <!-- LanguageDropdown 자식 컴포넌트 -->
    <LanguageDropdown
      :selected-language="selectedLanguage"
      @language-changed="handleLanguageChanged"
    /></div>

    <div class="frame">
    <div class="content">

      <br>

      <div class="how-to-buy-car">
        <h1>아프리카에서 대한민국 중고자동차 구입 방법</h1>
      </div>
      <br /><br />

    <section>
      <h2>수입 절차</h2>
      
      <!-- <strong> 태그를 <p> 태그로 변경하고 텍스트를 좌측 정렬합니다. -->
      <p>
        1. 중고차 선택 및 구매:  신뢰할 수 있는 딜러나 온라인 플랫폼에서 중고차를 선택하고 구매합니다. 
        2. 서류 준비: 구매 계약서, 차량 등록증, 수출허가서, 선적 서류 등 필요한 서류를 준비합니다. 
        3. 선적 준비: 해운사와 계약을 맺고, 차량을 항구로 이동시킵니다. 
        4. 통관 절차: 목적지 항구에서 통관을 진행합니다.
      </p>
    </section>
        
    <section>
      <h2>필요 비용</h2>
      
      <!-- <strong> 태그를 <p> 태그로 변경하고 텍스트를 좌측 정렬합니다. -->
      <p>
        1. 차량 가격: 구매하는 차량의 가격. 
        2. 운송비: 해상 운송비 및 항구 비용. 
        3. 보험비: 해상 보험 비용. 
        4. 관세 및 세금: 목적지 국가의 관세 및 세금.
      </p>
    </section>
    
    <section>
      <h2>선적 스케줄</h2>
      
      <!-- <strong> 태그를 <p> 태그로 변경하고 텍스트를 좌측 정렬합니다. -->
      <p>해운사에 연락하여 선적 스케줄을 확인하고 예약합니다. 해운사의 일정에 따라 출발 및 도착 날짜를 확인합니다.</p>
    </section>
    
    <section>
      <h2>관세 및 세금</h2>
      
      <!-- <strong> 태그를 <p> 태그로 변경하고 텍스트를 좌측 정렬합니다. -->
      <p>
        1. 관세: 국가별로 다르며, 차량 가격의 일정 비율입니다. 
        2. 부가가치세 (VAT): 국가별로 다르며, 차량 가격의 일정 비율입니다. 
        3. 기타 세금 및 비용: 통관 수수료, 환경세 등이 포함될 수 있습니다.
      </p>
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
import MapSearchComponent from '@/components/MapSearchComponent.vue';
import LanguageDropdown from '@/views/LanguageDropdown';

export default {
  name: 'HowToBuyCar',
  components: {
    LanguageDropdown,
    RainbowMenu,
    MapVue,
    MapSearchComponent,
  },
  data() {
      return {
        selectedLanguage: 'ko', // 초기 선택 언어 설정
      };
    },
    methods: {
      handleLanguageChanged(language) {
      this.selectedLanguage = language;
    }
  },
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

/* 이 부분이 추가되는 부분입니다. */
p {
  text-align: left; /* 텍스트를 좌측 정렬합니다. */
  font-weight: bold; /* 텍스트를 볼드체로 설정합니다. */
  color: #3498db; /* 텍스트의 색상을 하늘색으로 설정합니다. */
}

.frame {
  width: 55%; /* 프레임의 초기 너비를 설정합니다. */
  max-width: 800px; /* 프레임의 최대 너비를 설정합니다. */
  margin: 0 auto; /* 가운데 정렬을 수행합니다. */
}

.content {
  padding: 20px; /* 내용을 감싸는 컨테이너에 안쪽 여백을 추가합니다. */
}

.MapSearch-grid-container {
  margin-top: 50px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
</style>
