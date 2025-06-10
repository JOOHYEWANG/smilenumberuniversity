<template>
  <div class="RainbowMenu-container">
          <RainbowMenu />
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
  
  
   
  
  
    <div class="content">
        <div v-if="selectedLanguage === 'ko'">
          <h1>{{ translatedContent.ko.titleAfrica1 }}</h1>
  
          <br><br>  
  
          <h2>1. 음식(Food)</h2>
  
          <h3>1.1. 식량부족</h3>
          <p>{{ translatedContent.ko.food1 }}</p>
  
          <h3>1.2. 영양결핍</h3>
          <p>{{ translatedContent.ko.food2 }}</p>
          <br><br>  
           
          <h2>2. 물(Water)</h2>
  
          <h3>2.1. 깨끗한 물 접근성</h3>
          <h3>{{ translatedContent.ko.water }}</h3>
         
          <p>{{ translatedContent.ko.water1 }}</p>
  
           <h3>2.2. 인프라 부족</h3>
          <p>{{ translatedContent.ko.water2 }}</p>
  
          <br><br>
  
          <h2>3. 교육환경(Education)</h2>
  
          <h3>{{ translatedContent.ko.education }}</h3>
  
          <h3>3.1. 학교시설부족</h3>
          <p>{{ translatedContent.ko.education1 }}</p>
  
          <h3>3.2. 교사부족</h3>
          <p>{{ translatedContent.ko.education2 }}</p>
  
          <h3>3.3. 여아의 교육</h3>
          <p>{{ translatedContent.ko.education3 }}</p>
  
          <br><br>
     
          <h2>4. 아동인권(Human Rights)</h2>
          <h2>{{ translatedContent.ko.humanRights }}</h2>
  
          <h3>4.1. 아동노동</h3>
          <p>{{ translatedContent.ko.humanRights1 }}</p>
  
          <h3>4.2. 아동결혼</h3>
          <p>{{ translatedContent.ko.humanRights2 }}</p>
  
          <h3>4.3. 폭력과 착취</h3>
          <p>{{ translatedContent.ko.humanRights3 }}</p>
  
          <br><br>
          
          <h2>5. 앞으로의 노력(Struggle)</h2>
          <h3>{{ translatedContent.ko.efforts }}</h3>
  
          <h3>5.1. 국제 기구와 NGO의 지원</h3>
          <p>{{ translatedContent.ko.efforts1 }}</p>
  
          <h3>5.2. 지역사회의 노력</h3>
          <p>{{ translatedContent.ko.efforts2 }}</p>
  
          <br><br>
  
          <h3>작은결론(Conclusion)</h3>
          <p>{{ translatedContent.ko.conclusion }}</p>
        </div>
  
  
        <div v-else-if="selectedLanguage === 'en'">
          <!-- 영어 내용 -->
          <h2>{{ translatedContent.en.titleAfrica1 }}</h2>
          <p>{{ translatedContent.en.food1 }}</p>
          <p>{{ translatedContent.en.food2 }}</p>
          <h3>{{ translatedContent.en.water }}</h3>
          <p>{{ translatedContent.en.water1 }}</p>
          <p>{{ translatedContent.en.water2 }}</p>
          <h3>{{ translatedContent.en.education }}</h3>
          <p>{{ translatedContent.en.education1 }}</p>
          <p>{{ translatedContent.en.education2 }}</p>
          <p>{{ translatedContent.en.education3 }}</p>
          <h3>{{ translatedContent.en.humanRights }}</h3>
          <p>{{ translatedContent.en.humanRights1 }}</p>
          <p>{{ translatedContent.en.humanRights2 }}</p>
          <p>{{ translatedContent.en.humanRights3 }}</p>
          <h3>{{ translatedContent.en.efforts }}</h3>
          <p>{{ translatedContent.en.efforts1 }}</p>
          <p>{{ translatedContent.en.efforts2 }}</p>
          <p>{{ translatedContent.en.conclusion }}</p>
        </div>
        <div v-else-if="selectedLanguage === 'Be'">
          <!-- Benin 언어 내용 -->
          <h2>{{ translatedContent.Be.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Be.food1 }}</p>
          <p>{{ translatedContent.Be.food2 }}</p>
          <h3>{{ translatedContent.Be.water }}</h3>
          <p>{{ translatedContent.Be.water1 }}</p>
          <p>{{ translatedContent.Be.water2 }}</p>
          <h3>{{ translatedContent.Be.education }}</h3>
          <p>{{ translatedContent.Be.education1 }}</p>
          <p>{{ translatedContent.Be.education2 }}</p>
          <p>{{ translatedContent.Be.education3 }}</p>
          <h3>{{ translatedContent.Be.humanRights }}</h3>
          <p>{{ translatedContent.Be.humanRights1 }}</p>
          <p>{{ translatedContent.Be.humanRights2 }}</p>
          <p>{{ translatedContent.Be.humanRights3 }}</p>
          <h3>{{ translatedContent.Be.efforts }}</h3>
          <p>{{ translatedContent.Be.efforts1 }}</p>
          <p>{{ translatedContent.Be.efforts2 }}</p>
          <p>{{ translatedContent.Be.conclusion }}</p>
        </div>
          <div v-else-if="selectedLanguage === 'Bo'">
          <!-- Botswana 언어 내용 -->
          <h2>{{ translatedContent.Bo.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Bo.food1 }}</p>
          <p>{{ translatedContent.Bo.food2 }}</p>
          <h3>{{ translatedContent.Bo.water }}</h3>
          <p>{{ translatedContent.Bo.water1 }}</p>
          <p>{{ translatedContent.Bo.water2 }}</p>
          <h3>{{ translatedContent.Bo.education }}</h3>
          <p>{{ translatedContent.Bo.education1 }}</p>
          <p>{{ translatedContent.Bo.education2 }}</p>
          <p>{{ translatedContent.Bo.education3 }}</p>
          <h3>{{ translatedContent.Bo.humanRights }}</h3>
          <p>{{ translatedContent.Bo.humanRights1 }}</p>
          <p>{{ translatedContent.Bo.humanRights2 }}</p>
          <p>{{ translatedContent.Bo.humanRights3 }}</p>
          <h3>{{ translatedContent.Bo.efforts }}</h3>
          <p>{{ translatedContent.Bo.efforts1 }}</p>
          <p>{{ translatedContent.Bo.efforts2 }}</p>
          <p>{{ translatedContent.Bo.conclusion }}</p>
        </div>
  
        <div v-else-if="selectedLanguage === 'Bu'">
          <!-- Bulkina 언어 내용 -->
          <h2>{{ translatedContent.Bu.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Bu.food1 }}</p>
          <p>{{ translatedContent.Bu.food2 }}</p>
          <h3>{{ translatedContent.Bu.water }}</h3>
          <p>{{ translatedContent.Bu.water1 }}</p>
          <p>{{ translatedContent.Bu.water2 }}</p>
          <h3>{{ translatedContent.Bu.education }}</h3>
          <p>{{ translatedContent.Bu.education1 }}</p>
          <p>{{ translatedContent.Bu.education2 }}</p>
          <p>{{ translatedContent.Bu.education3 }}</p>
          <h3>{{ translatedContent.Bu.humanRights }}</h3>
          <p>{{ translatedContent.Bu.humanRights1 }}</p>
          <p>{{ translatedContent.Bu.humanRights2 }}</p>
          <p>{{ translatedContent.Bu.humanRights3 }}</p>
          <h3>{{ translatedContent.Bu.efforts }}</h3>
          <p>{{ translatedContent.Bu.efforts1 }}</p>
          <p>{{ translatedContent.Bu.efforts2 }}</p>
          <p>{{ translatedContent.Bu.conclusion }}</p>
        </div>
  
        <div v-else-if="selectedLanguage === 'Bur'">
          <!-- Burundi 언어 내용 -->
          <h2>{{ translatedContent.Bur.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Bur.food1 }}</p>
          <p>{{ translatedContent.Bur.food2 }}</p>
          <h3>{{ translatedContent.Bur.water }}</h3>
          <p>{{ translatedContent.Bur.water1 }}</p>
          <p>{{ translatedContent.Bur.water2 }}</p>
          <h3>{{ translatedContent.Bur.education }}</h3>
          <p>{{ translatedContent.Bur.education1 }}</p>
          <p>{{ translatedContent.Bur.education2 }}</p>
          <p>{{ translatedContent.Bur.education3 }}</p>
          <h3>{{ translatedContent.Bur.humanRights }}</h3>
          <p>{{ translatedContent.Bur.humanRights1 }}</p>
          <p>{{ translatedContent.Bur.humanRights2 }}</p>
          <p>{{ translatedContent.Bur.humanRights3 }}</p>
          <h3>{{ translatedContent.Bur.efforts }}</h3>
          <p>{{ translatedContent.Bur.efforts1 }}</p>
          <p>{{ translatedContent.Bur.efforts2 }}</p>
          <p>{{ translatedContent.Bur.conclusion }}</p>
        </div>
        
        <div v-else-if="selectedLanguage === 'Ca'">
          <!-- Cameroon 언어 내용 -->
         <h2>{{ translatedContent.Ca.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Ca.food1 }}</p>
          <p>{{ translatedContent.Ca.food2 }}</p>
         <h3>{{ translatedContent.Ca.water }}</h3>
          <p>{{ translatedContent.Ca.water1 }}</p>
          <p>{{ translatedContent.Ca.water2 }}</p>
         <h3>{{ translatedContent.Ca.education }}</h3>
          <p>{{ translatedContent.Ca.education1 }}</p>
          <p>{{ translatedContent.Ca.education2 }}</p>
          <p>{{ translatedContent.Ca.education3 }}</p>
         <h3>{{ translatedContent.Ca.humanRights }}</h3>
          <p>{{ translatedContent.Ca.humanRights1 }}</p>
          <p>{{ translatedContent.Ca.humanRights2 }}</p>
          <p>{{ translatedContent.Ca.humanRights3 }}</p>
         <h3>{{ translatedContent.Ca.efforts }}</h3>
          <p>{{ translatedContent.Ca.efforts1 }}</p>
          <p>{{ translatedContent.Ca.efforts2 }}</p>
          <p>{{ translatedContent.Ca.conclusion }}</p>
        </div>
        
        <div v-else-if="selectedLanguage === 'Cap'">
          <!-- Cape Verdi 언어 내용 -->
         <h2>{{ translatedContent.Cap.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Cap.food1 }}</p>
          <p>{{ translatedContent.Cap.food2 }}</p>
         <h3>{{ translatedContent.Cap.water }}</h3>
          <p>{{ translatedContent.Cap.water1 }}</p>
          <p>{{ translatedContent.Cap.water2 }}</p>
         <h3>{{ translatedContent.Cap.education }}</h3>
          <p>{{ translatedContent.Cap.education1 }}</p>
          <p>{{ translatedContent.Cap.education2 }}</p>
          <p>{{ translatedContent.Cap.education3 }}</p>
         <h3>{{ translatedContent.Cap.humanRights }}</h3>
          <p>{{ translatedContent.Cap.humanRights1 }}</p>
          <p>{{ translatedContent.Cap.humanRights2 }}</p>
          <p>{{ translatedContent.Cap.humanRights3 }}</p>
         <h3>{{ translatedContent.Cap.efforts }}</h3>
          <p>{{ translatedContent.Cap.efforts1 }}</p>
          <p>{{ translatedContent.Cap.efforts2 }}</p>
          <p>{{ translatedContent.Cap.conclusion }}</p>
        </div>
  
        <div v-else-if="selectedLanguage === 'Ma'">
          <!-- Malawi 언어 내용 -->
         <h2>{{ translatedContent.Ma.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Ma.food1 }}</p>
          <p>{{ translatedContent.Ma.food2 }}</p>
         <h3>{{ translatedContent.Ma.water }}</h3>
          <p>{{ translatedContent.Ma.water1 }}</p>
          <p>{{ translatedContent.Ma.water2 }}</p>
         <h3>{{ translatedContent.Ma.education }}</h3>
          <p>{{ translatedContent.Ma.education1 }}</p>
          <p>{{ translatedContent.Ma.education2 }}</p>
          <p>{{ translatedContent.Ma.education3 }}</p>
         <h3>{{ translatedContent.Ma.humanRights }}</h3>
          <p>{{ translatedContent.Ma.humanRights1 }}</p>
          <p>{{ translatedContent.Ma.humanRights2 }}</p>
          <p>{{ translatedContent.Ma.humanRights3 }}</p>
         <h3>{{ translatedContent.Ma.efforts }}</h3>
          <p>{{ translatedContent.Ma.efforts1 }}</p>
          <p>{{ translatedContent.Ma.efforts2 }}</p>
          <p>{{ translatedContent.Ma.conclusion }}</p>
        </div>
  
        <div v-else-if="selectedLanguage === 'Ch'">
          <!-- Chad 언어 내용 -->
         <h2>{{ translatedContent.Ch.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Ch.food1 }}</p>
          <p>{{ translatedContent.Ch.food2 }}</p>
         <h3>{{ translatedContent.Ch.water }}</h3>
          <p>{{ translatedContent.Ch.water1 }}</p>
          <p>{{ translatedContent.Ch.water2 }}</p>
         <h3>{{ translatedContent.Ch.education }}</h3>
          <p>{{ translatedContent.Ch.education1 }}</p>
          <p>{{ translatedContent.Ch.education2 }}</p>
          <p>{{ translatedContent.Ch.education3 }}</p>
         <h3>{{ translatedContent.Ch.humanRights }}</h3>
          <p>{{ translatedContent.Ch.humanRights1 }}</p>
          <p>{{ translatedContent.Ch.humanRights2 }}</p>
          <p>{{ translatedContent.Ch.humanRights3 }}</p>
         <h3>{{ translatedContent.Ch.efforts }}</h3>
          <p>{{ translatedContent.Ch.efforts1 }}</p>
          <p>{{ translatedContent.Ch.efforts2 }}</p>
          <p>{{ translatedContent.Ch.conclusion }}</p>
        </div>
         
        <div v-else-if="selectedLanguage === 'Co'">
          <!-- Comoros 언어 내용 -->
         <h2>{{ translatedContent.Co.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Co.food1 }}</p>
          <p>{{ translatedContent.Co.food2 }}</p>
         <h3>{{ translatedContent.Co.water }}</h3>
          <p>{{ translatedContent.Co.water1 }}</p>
          <p>{{ translatedContent.Co.water2 }}</p>
         <h3>{{ translatedContent.Co.education }}</h3>
          <p>{{ translatedContent.Co.education1 }}</p>
          <p>{{ translatedContent.Co.education2 }}</p>
          <p>{{ translatedContent.Co.education3 }}</p>
         <h3>{{ translatedContent.Co.humanRights }}</h3>
          <p>{{ translatedContent.Co.humanRights1 }}</p>
          <p>{{ translatedContent.Co.humanRights2 }}</p>
          <p>{{ translatedContent.Co.humanRights3 }}</p>
         <h3>{{ translatedContent.Co.efforts }}</h3>
          <p>{{ translatedContent.Co.efforts1 }}</p>
          <p>{{ translatedContent.Co.efforts2 }}</p>
          <p>{{ translatedContent.Co.conclusion }}</p>
        </div>
  
        <div v-else-if="selectedLanguage === 'Rw'">
          <!-- Rwanda 언어 내용 -->
         <h2>{{ translatedContent.Rw.titleAfrica1 }}</h2>
          <p>{{ translatedContent.Rw.food1 }}</p>
          <p>{{ translatedContent.Rw.food2 }}</p>
         <h3>{{ translatedContent.Rw.water }}</h3>
          <p>{{ translatedContent.Rw.water1 }}</p>
          <p>{{ translatedContent.Rw.water2 }}</p>
         <h3>{{ translatedContent.Rw.education }}</h3>
          <p>{{ translatedContent.Rw.education1 }}</p>
          <p>{{ translatedContent.Rw.education2 }}</p>
          <p>{{ translatedContent.Rw.education3 }}</p>
         <h3>{{ translatedContent.Rw.humanRights }}</h3>
          <p>{{ translatedContent.Rw.humanRights1 }}</p>
          <p>{{ translatedContent.Rw.humanRights2 }}</p>
          <p>{{ translatedContent.Rw.humanRights3 }}</p>
         <h3>{{ translatedContent.Rw.efforts }}</h3>
          <p>{{ translatedContent.Rw.efforts1 }}</p>
          <p>{{ translatedContent.Rw.efforts2 }}</p>
          <p>{{ translatedContent.Rw.conclusion }}</p>
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
    name: 'AfricaSmileCarComponent',
    components: {
      RainbowMenu,
      MapVue,
      MapSearchComponent,
    },
    data() {
      return {
        showLanguageDropdown: false,
        selectedLanguage: 'ko', // 초기 선택 언어 설정 (한국어)
        translatedContent: {
          ko: {
            titleAfrica1: "아프리카 어린이: 식량, 물, 교육, 인권 ,...",
            food1: "많은 아프리카 국가와 개발 도상국에서는 가뭄, 기후 변화, 불안정한 농업 생산 등으로 인해 식량 부족이 심각한 문제입니다.",
            food2: "어린이들에게 특히 심각한 문제로, 성장과 발달에 필수적인 영양소를 충분히 섭취하지 못하는 경우가 많습니다. 이에 따라 체중 저하, 발육 부진, 면역력 저하 등의 문제가 발생합니다.",
            water1: "많은 개발 도상국가에서는 안전하고 깨끗한 물에 대한 접근성이 제한적입니다. 이는 오염된 물로 인한 질병, 예를 들어 콜레라와 같은 수인성 질병의 발생률을 높입니다.",
            water2: " 적절한 물 공급 인프라가 부족하여, 많은 사람들이 멀리 떨어진 장소에서 물을 길어와야 하는 경우가 많습니다. 이는 어린이들이 물을 구하러 다니느라 학교에 가지 못하는 문제를 초래합니다.",
            education1: "학교 건물, 교재, 책상 등 기본적인 학습 환경이 부족한 경우가 많습니다. 또한, 많은 학교는 전기와 인터넷 등의 필수 인프라를 갖추지 못하고 있습니다.",
            education2: "교육을 담당할 훈련된 교사 수가 부족하여, 학생 대 교사 비율이 매우 높습니다. 이는 양질의 교육을 받기 어렵게 만듭니다.",
            education3: "여학생은 남학생보다 교육을 받기 어려운 상황에 처해 있는 경우가 많습니다. 문화적, 경제적 이유로 여아의 교육이 저해되기도 합니다.",
            humanRights1: "많은 개발 도상국에서는 어린이들이 학교 대신 노동을 해야 하는 상황이 빈번합니다. 이는 경제적 어려움과 관련이 깊습니다.",
            humanRights2: "일부 지역에서는 어린 나이에 결혼을 강요받는 경우가 많습니다. 이는 여아의 교육 기회를 박탈하고, 건강과 안전을 위협합니다.",
            humanRights3: "어린이들이 가정 내, 혹은 사회적으로 폭력과 착취에 노출되는 경우가 많습니다. 이는 신체적, 정신적 건강에 심각한 영향을 미칩니다.",
            efforts1: "유니세프, 월드 비전, 세이브 더 칠드런 등 많은 국제 기구와 비정부 기구(NGO)가 아프리카와 개발 도상국의 어린이들을 돕기 위해 다양한 프로젝트를 진행하고 있습니다. 이들은 식량 지원, 깨끗한 물 공급, 교육 인프라 개선, 아동 인권 보호 등의 활동을 하고 있습니다.",
            efforts2: "많은 지역 사회가 스스로 문제를 해결하기 위해 노력하고 있습니다. 예를 들어, 공동체 기반의 학교 설립, 지역 농업 기술 향상, 여성의 교육 권리 확대 등의 활동이 있습니다.",
            conclusion: "이러한 문제들은 복합적이고 상호 연관되어 있지만, 지속적인 국제적 관심과 지원, 그리고 지역 사회의 적극적인 참여를 통해 점차 개선될 수 있습니다."
          },
          en: {
            titleAfrica1: "African Children: Food, Water, Education, Human Rights",
            food1: "1.1. Food scarcity: Many African and developing countries suffer from severe food shortages due to drought, climate change, and unstable agricultural production.",
            food2: "1.2. Malnutrition: Malnutrition is a serious issue for children, who often do not get enough essential nutrients needed for growth and development. This leads to weight loss, stunted growth, and weakened immunity.",
            water1: "2.1. Access to clean water: Many developing countries have limited access to safe and clean water, which increases the incidence of waterborne diseases such as cholera.",
            water2: "2.2. Lack of infrastructure: A lack of proper water supply infrastructure means many people must fetch water from distant locations, preventing children from attending school.",
            education1: "3.1. Lack of school facilities: Many schools lack basic learning environments such as buildings, textbooks, and desks. Additionally, many schools lack essential infrastructure such as electricity and internet.",
            education2: "3.2. Shortage of teachers: A shortage of trained teachers results in very high student teacher ratios, making quality education difficult to obtain.",
            education3: "3.3. Girls' education: Girls often face greater barriers to education than boys due to cultural and economic reasons.",
            humanRights1: "4.1. Child labor: Many developing countries see children forced into labor instead of attending school due to economic hardships.",
            humanRights2: "4.2. Child marriage: In some regions, children are often forced into marriage at a young age. This deprives girls of educational opportunities and threatens their health and safety.",
            humanRights3: "4.3. Violence and exploitation: Children are frequently exposed to violence and exploitation within their homes or within society, which severely impacts their physical and mental health.",
            efforts1: "5.1. Support from international organizations and NGOs: Organizations like UNICEF, World Vision, Save the Children, and many others conduct various projects to support children in Africa and developing countries. These efforts include providing food aid, improving access to clean water, enhancing educational infrastructure, and protecting children's rights.",
            efforts2: "5.2. Efforts from local communities: Many local communities are taking initiatives to address these issues themselves. Examples include establishing community-based schools, improving local agricultural techniques, and expanding women's access to education rights.",
            conclusion: "These issues are complex and interconnected, but can be gradually improved through sustained international attention and support, as well as active participation from local communities."
          },
          Be: {
            titleAfrica1: "Les enfants africains : problèmes alimentaires, hydrique, éducatifs et droits de l'homme",
            food1: "1.1. Pénurie alimentaire : De nombreux pays africains et en développement souffrent de graves pénuries alimentaires en raison de la sécheresse, du changement climatique et de la production agricole instable.",
            food2: "1.2. Malnutrition : La malnutrition est un problème grave pour les enfants, qui ne reçoivent souvent pas suffisamment de nutriments essentiels nécessaires à leur croissance et à leur développement. Cela entraîne une perte de poids, un retard de croissance et une immunité affaiblie.",
            water1: "2.1. Accès à l'eau potable : De nombreux pays en développement ont un accès limité à une eau sûre et propre, ce qui augmente l'incidence des maladies hydriques telles que le choléra.",
            water2: "2.2. Manque d'infrastructures : Le manque d'infrastructures adéquates en matière d'approvisionnement en eau signifie que de nombreuses personnes doivent aller chercher de l'eau dans des endroits éloignés, empêchant ainsi les enfants de fréquenter l'école.",
            education1: "3.1. Manque d'installations scolaires : De nombreuses écoles manquent d'environnements d'apprentissage de base tels que des bâtiments, des manuels et des pupitres. De plus, beaucoup d'écoles manquent d'infrastructures essentielles telles que l'électricité et l'internet.",
            education2: "3.2. Pénurie d'enseignants : Une pénurie d'enseignants formés entraîne un ratio élève-enseignant très élevé, rendant difficile l'obtention d'une éducation de qualité.",
            education3: "3.3. Éducation des filles : Les filles font souvent face à de plus grands obstacles à l'éducation que les garçons en raison de raisons culturelles et économiques.",
            humanRights1: "4.1. Travail des enfants : De nombreux pays en développement voient les enfants contraints de travailler au lieu d'aller à l'école en raison des difficultés économiques.",
            humanRights2: "4.2. Mariage des enfants : Dans certaines régions, les enfants sont souvent forcés de se marier à un jeune âge. Cela prive les filles d'opportunités éducatives et menace leur santé et leur sécurité.",
            humanRights3: "4.3. Violence et exploitation : Les enfants sont souvent exposés à la violence et à l'exploitation au sein de leur foyer ou de la société, ce qui affecte gravement leur santé physique et mentale.",
            efforts1: "5.1. Soutien des organisations internationales et des ONG : Des organisations telles que l'UNICEF, Vision Mondiale, Save the Children et bien d'autres mènent divers projets pour soutenir les enfants en Afrique et dans les pays en développement. Ces efforts comprennent la fourniture d'aide alimentaire, l'amélioration de l'accès à l'eau potable, l'amélioration des infrastructures éducatives et la protection des droits des enfants.",
            efforts2: "5.2. Efforts des communautés locales : De nombreuses communautés locales prennent des initiatives pour résoudre ces problèmes elles-mêmes. Cela comprend par exemple la création d'écoles communautaires, l'amélioration des techniques agricoles locales et l'extension des droits d'accès à l'éducation des femmes.",
            conclusion: "Ces problèmes sont complexes et interconnectés, mais peuvent être progressivement améliorés grâce à une attention et un soutien internationaux soutenus, ainsi qu'à la participation active des communautés locales."
          },
          Bo: {
            titleAfrica1: "Bana ba Aforika: Dijo, Metsi, Thuto, Ditshwanelo tsa Batho",
            food1: "1.1. Khumanego ya dijo: Dinaga di le dintsi tsa Aforika le tse di tlhabologang di itemogela tlhokego e kgolo ya dijo ka ntlha ya komelelo, phetogo ya maemo a bosa, le tlhagiso e e sa tswang tlhago ya temo.",
            food2: "1.2. Go tlhoka dikotla tsa dijo: Go tlhoka dikotla tsa dijo ke bothata jo bogolo mo baneng, ba gantsi ba sa amogele dikotla tse di lekaneng tse di botlhokwa go gola le go tlhabologa. Seno se dira gore ba fele metsi mme ba sa gola sentle, le go fokotsa boitekanelo jwa bone.",
            water1: "2.1. Go tsena mo metseng e e phepa: Dinaga tse dintsi tse di tlhabologang ga di na tsela e e siameng ya go tsena mo metseng e e phepa, e e oketsang go tlhoga ga malwetse a a tswang mo metseng jaaka cholera.",
            water2: "2.2. Tlhokego ya didirisiwa: Go tlhoka didirisiwa tse di siameng tsa go fana ka metsi go raya gore batho ba le bantsi ba tshwanetse go tsaya metsi kwa mafelong a a kgakala, go thibela bana go tsena sekolong.",
            education1: "3.1. Tlhokego ya dikago tsa sekolo: Dikolo tse dintsi ga di na tikologo e e siameng ya go ithuta jaaka dikago, dibuka, le ditulo. Gape, dikolo tse dintsi ga di na didirisiwa tse di botlhokwa jaaka motlakase le inthanete.",
            education2: "3.2. Kemo ya barutabana: Go tlhoka barutabana ba ba koetlisitsweng go felela ka palo e e kwa godimo ya barutwana go ba le barutabana, go dira gore thuto ya boleng e nne thata go e bona.",
            education3: "3.3. Thuto ya basetsana: Basetsana gantsi ba itemogela dikgwetlho tse dikgolo go feta basimane mo thutong ka ntlha ya mabaka a setso le a ikonomi.",
            humanRights1: "4.1. Tiriso ya bana: Dinaga tse dintsi tse di tlhabologang di bona bana ba patelediwa go direla mo boemong jwa go tsena sekolong ka ntlha ya mathata a ikonomi.",
            humanRights2: "4.2. Lenyalong la bana: Mo dikarolong dingwe, bana ba gantsi ba patelediwa go tsena lenyalong ba sa le basha. Seno se amoga basetsana menyetla ya thuto mme se kotsi mo boitekanelong le polokelong ya bone.",
            humanRights3: "4.3. Thubakanyo le pogiso: Bana gantsi ba itemogela thubakanyo le pogiso mo magaeng a bone kgotsa mo setšhabeng, se se amang boitekanelo jwa bone jwa mmele le maikutlo.",
            efforts1: "5.1. Tshegetso go tswa mo ditlhopheng tsa boditšhabatšhaba le NGOs: Ditlhopha jaaka UNICEF, World Vision, Save the Children, le tse dingwe tse dintsi di dira diporojeke tse di farologaneng go tshegetsa bana mo Aforika le dinaga tse di tlhabologang. Maiteko a tseno a akaretsa go fana ka dijo, go tokafatsa go tsena mo metseng e e phepa, go tokafatsa didirisiwa tsa thuto, le go sireletsa ditshwanelo tsa bana.",
            efforts2: "5.2. Maiteko go tswa mo setšhabeng sa gae: Ditšhaba tse dintsi tsa gae di tsaya dikgato go rarabolola mathata a. Mehlala e akaretsa go tlhoma dikolo tsa setšhaba, go tokafatsa mekgele ya temo ya lehae, le go atolosa ditshwanelo tsa basadi go tsena thutong.",
            conclusion: "Mathata a ke a mantsi mme a tseneletseng, mme a ka tokafadiwa go bokoa ka tlhokomelo e e tswelelang ya boditšhabatšhaba le tshegetso, le go tsenelela ga setšhaba sa gae."
          },
  
          Bu: {
            titleAfrica1: "Biiga Yelemde: Lafi, Kiiga, Kunnem, Yiibi Ye",
            food1: "1.1. Lafi kɔmam: Laafi be Aafriika la yi n lafi zɔɔre ka ba sɔtama la wa kanga, lafi zɔɔre ta la wema se ka ni ba tigri la yaaba lafim.",
            food2: "1.2. Laafi n zɔɔre: Laafi n zɔɔre ye naam wut zɔɔr ba be biiga la yi n taaba n nimba ye. Tigi yelga la yi ba fuir, la taaba dega, la ti ba naabo gooma.",
            water1: "2.1. Kiiga kɛnd zoand ka biiga: Laafi be Aafriika la yi n la kiiga n d tikema ba yi ta tɛm kɛnd zoand kiiga n ta yelga cholera ka biiga.",
            water2: "2.2. Kiiga saanga: Kiiga saanga ka yelga taara ba ye la yelka ne kiiga fo yelemde ka taaba n ti, ka biiga la yi n yi’ se yaanga.",
            education1: "3.1. Kunnem saanga: Laarmin la yi kɛnd ne kɔnenga yelemde sa la ki tiir la yelga, sigira, bɛngda. Goma laarfi la yi saanga ne kɛn ta ye la tiir ne motta na internet.",
            education2: "3.2. Zana kɛnd n wut biiga: Zana kɛnd n saanga la tigi ne tɛ kɛnd n naam naamba biiga n ti la yi kɛn kɛnd biiga.",
            education3: "3.3. Poko la kunneme: Poko la yi ne wut zɔɔr kunneme dega ka n wa ba puli n ka fo sɛnd naamba ye la kɛn ti biiga.",
            humanRights1: "4.1. Biiga la sigila: Laafi be Aafriika la yi ne biiga ne sigil n na yelga kunneme ka biiga n wa sigil n ti sɛnd yaange.",
            humanRights2: "4.2. Biiga la nimde: Laafi ne biiga yi’ na nimde n wa ne sigil kunneme. Sɔnd n naamba ye la wa biiga n yɛl na ti waara, ka sɛnd la kiya.",
            humanRights3: "4.3. Sɛn yaange: Biiga la yi ne sɔn sɛn yaange ne sɛnd kiya waara, taabga se dɔn ka sɔnd la sika sɛnd teega.",
            efforts1: "5.1. Nong Kɛnd n tɛ Aafriika n NGOs: Nong kɛnd UNICEF, World Vision, Save the Children, n sɛnd yaange tɛ, ne sɔn ne kɛn ki biiga ne Aafriika. Nong kɛnd n yɛl ka la ki tiir lafim, ne kɛn kiiga kɛnd zoand, ne kɛn kunneme yelemde, ne kɛn biiga ye.",
            efforts2: "5.2. Nong kɛnd la wa la yi n: Nong kɛnd ne yi n ti ki tigi yelga ki taaba ye laafi. Siina be ti sigil yelemde la yelemda, ne kɛn tɛ lafim, ne kɛn sɛnd biiga kunneme.",
            conclusion: "Naam n de naam dega, sɛnd waara ti se ki ti kɛnd n la tɛ Aafriika, ne laafi n tɛ, ne ki kɛnd ne wa la yelga waara."
          },
  
          Bur: {
            titleAfrica1: "Abana b'Afurika: Ibiribwa, Amazi, Amashuri, Uburenganzira bwa muntu",
            food1: "1.1. Ibiribwa bike: Ibihugu byinshi by'Afurika n'ibihugu bikiri mu nzira y'iterambere bibura ibiribwa bihagije kubera amapfa, ihindagurika ry'ikirere, n'ubuhinzi butajegajega.",
            food2: "1.2. Imirire mibi: Imirire mibi ni ikibazo gikomeye ku bana, kenshi ntibabona intungamubiri z'ingenzi zikeneye gukura no gutera imbere. Ibi bitera kugabanuka kw'ibiro, guhagarara gukura, no kugabanyuka k'ubudahangarwa.",
            water1: "2.1. Kugera ku mazi meza: Ibihugu byinshi bikiri mu nzira y'iterambere bifite amazi meza make, bitera indwara zituruka ku mazi mabi nk'ikorera.",
            water2: "2.2. Kubura imiyoboro: Kubura imiyoboro y'amazi ivuguruye bituma abantu benshi bashaka amazi kure, bikabuza abana kwiga.",
            education1: "3.1. Kubura ibikorwaremezo by'amashuri: Amashuri menshi afite ibikorwaremezo bike nk'inyubako, ibitabo, n'ameza. Byongeye, amashuri menshi abura ibikorwaremezo nk'amashanyarazi n'interineti.",
            education2: "3.2. Kubura abarimu: Kubura abarimu bize bihagije bituma umubare w'abanyeshuri ku mwalimu umwe uba mwinshi cyane, bigatuma uburezi bufite ireme bigoranye kuboneka.",
            education3: "3.3. Uburezi bw'abakobwa: Abakobwa bakunze guhura n'imbogamizi nyinshi kuruta abahungu mu bijyanye no kwiga kubera impamvu z'umuco n'ubukungu.",
            humanRights1: "4.1. Gukoresha abana mu mirimo: Mu bihugu byinshi bikiri mu nzira y'iterambere abana bakora imirimo aho kujya kwiga kubera ubukene.",
            humanRights2: "4.2. Gushyingira abana: Mu turere tumwe na tumwe, abana bashyingirwa bakiri bato. Ibi bibabuza amahirwe yo kwiga kandi bikabashyira mu kaga k'ubuzima bwabo n'umutekano.",
            humanRights3: "4.3. Ihohoterwa n'ubucakara: Abana bakunze guhura n'ihohoterwa n'ubucakara mu ngo cyangwa mu muryango, bigira ingaruka zikomeye ku buzima bwabo bw'umubiri n'ubw'umutima.",
            efforts1: "5.1. Inkunga y'imiryango mpuzamahanga na NGOs: Imiryango nka UNICEF, World Vision, Save the Children, n'indi myinshi ikora imishinga itandukanye yo gushyigikira abana b'Afurika n'ibihugu bikiri mu nzira y'iterambere. Ibi bikorwa birimo gutanga inkunga y'ibiribwa, kunoza uburyo bwo kubona amazi meza, kuvugurura ibikorwaremezo by'amashuri, no kurengera uburenganzira bw'abana.",
            efforts2: "5.2. Imigambi y'imiryango y'imbere mu gihugu: Imiryango myinshi y'imbere mu gihugu iri kwiyemeza kwikemurira ibi bibazo ubwabo. Ingero zirimo gushyiraho amashuri y'ibanze y'abaturage, kunoza uburyo bw'ubuhinzi bw'aho, no kwagura uburenganzira bw'abagore mu bijyanye no kwiga.",
            conclusion: "Ibi bibazo biragoye kandi bifitanye isano, ariko bishobora kugenda bikemuka buhoro buhoro binyuze mu kwitabwaho n'inkunga mpuzamahanga ihamye, kimwe n'ubufatanye bw'imiryango y'imbere mu gihugu."
          },
  
          Ca: {
            titleAfrica1: "Enfants Africains: Nourriture, Eau, Éducation, Droits de l'Homme",
            food1: "1.1. Pénurie alimentaire: De nombreux pays africains et en développement souffrent de graves pénuries alimentaires en raison de la sécheresse, du changement climatique et de la production agricole instable.",
            food2: "1.2. Malnutrition: La malnutrition est un problème grave pour les enfants, qui ne reçoivent souvent pas suffisamment de nutriments essentiels nécessaires à leur croissance et à leur développement. Cela conduit à une perte de poids, un retard de croissance et un affaiblissement de l'immunité.",
            water1: "2.1. Accès à l'eau potable: De nombreux pays en développement ont un accès limité à une eau sûre et potable, ce qui augmente l'incidence des maladies hydriques telles que le choléra.",
            water2: "2.2. Manque d'infrastructure: Le manque d'infrastructure adéquate d'approvisionnement en eau signifie que beaucoup de gens doivent aller chercher de l'eau loin de chez eux, empêchant les enfants d'aller à l'école.",
            education1: "3.1. Manque d'installations scolaires: De nombreuses écoles manquent d'environnements d'apprentissage de base tels que des bâtiments, des manuels et des bureaux. De plus, beaucoup d'écoles manquent d'infrastructures essentielles comme l'électricité et Internet.",
            education2: "3.2. Pénurie d'enseignants: Une pénurie d'enseignants qualifiés entraîne des ratios élèves-enseignant très élevés, rendant difficile l'obtention d'une éducation de qualité.",
            education3: "3.3. Éducation des filles: Les filles rencontrent souvent plus de barrières à l'éducation que les garçons en raison de raisons culturelles et économiques.",
            humanRights1: "4.1. Travail des enfants: De nombreux pays en développement voient les enfants contraints au travail au lieu d'aller à l'école en raison de difficultés économiques.",
            humanRights2: "4.2. Mariage des enfants: Dans certaines régions, les enfants sont souvent forcés de se marier à un jeune âge. Cela prive les filles de possibilités éducatives et menace leur santé et leur sécurité.",
            humanRights3: "4.3. Violence et exploitation: Les enfants sont fréquemment exposés à la violence et à l'exploitation au sein de leurs foyers ou de la société, ce qui affecte gravement leur santé physique et mentale.",
            efforts1: "5.1. Soutien des organisations internationales et des ONG: Des organisations comme l'UNICEF, World Vision, Save the Children, et bien d'autres mènent divers projets pour soutenir les enfants en Afrique et dans les pays en développement. Ces efforts comprennent la fourniture d'une aide alimentaire, l'amélioration de l'accès à l'eau potable, l'amélioration des infrastructures éducatives et la protection des droits des enfants.",
            efforts2: "5.2. Efforts des communautés locales: De nombreuses communautés locales prennent des initiatives pour résoudre ces problèmes elles-mêmes. Les exemples incluent la création d'écoles communautaires, l'amélioration des techniques agricoles locales et l'expansion de l'accès des femmes aux droits à l'éducation.",
            conclusion: "Ces problèmes sont complexes et interdépendants, mais peuvent être progressivement améliorés grâce à une attention et un soutien internationaux soutenus, ainsi qu'à la participation active des communautés locales."
          },
  
          Cap: {
            titleAfrica1: "Crianças Africanas: Comida, Água, Educação, Direitos Humanos",
            food1: "1.1. Escassez de alimentos: Muitos países africanos e em desenvolvimento sofrem com graves escassezes de alimentos devido à seca, mudanças climáticas e produção agrícola instável.",
            food2: "1.2. Desnutrição: A desnutrição é um problema sério para as crianças, que frequentemente não recebem nutrientes essenciais necessários para o crescimento e desenvolvimento. Isso leva à perda de peso, crescimento atrofiado e imunidade enfraquecida.",
            water1: "2.1. Acesso a água potável: Muitos países em desenvolvimento têm acesso limitado a água segura e limpa, o que aumenta a incidência de doenças transmitidas pela água, como a cólera.",
            water2: "2.2. Falta de infraestrutura: A falta de infraestrutura adequada de abastecimento de água significa que muitas pessoas precisam buscar água em locais distantes, impedindo que as crianças frequentem a escola.",
            education1: "3.1. Falta de instalações escolares: Muitas escolas carecem de ambientes básicos de aprendizagem, como edifícios, livros didáticos e carteiras. Além disso, muitas escolas carecem de infraestrutura essencial, como eletricidade e internet.",
            education2: "3.2. Falta de professores: A falta de professores qualificados resulta em proporções muito altas de alunos por professor, dificultando a obtenção de uma educação de qualidade.",
            education3: "3.3. Educação das meninas: As meninas frequentemente enfrentam maiores barreiras à educação do que os meninos, devido a razões culturais e econômicas.",
            humanRights1: "4.1. Trabalho infantil: Muitos países em desenvolvimento veem crianças sendo forçadas a trabalhar em vez de frequentar a escola devido a dificuldades econômicas.",
            humanRights2: "4.2. Casamento infantil: Em algumas regiões, as crianças são frequentemente forçadas a se casar em uma idade jovem. Isso priva as meninas de oportunidades educacionais e ameaça sua saúde e segurança.",
            humanRights3: "4.3. Violência e exploração: As crianças são frequentemente expostas à violência e exploração dentro de suas casas ou na sociedade, o que afeta gravemente sua saúde física e mental.",
            efforts1: "5.1. Apoio de organizações internacionais e ONGs: Organizações como UNICEF, World Vision, Save the Children e muitas outras conduzem vários projetos para apoiar as crianças na África e em países em desenvolvimento. Esses esforços incluem fornecer ajuda alimentar, melhorar o acesso a água potável, aprimorar a infraestrutura educacional e proteger os direitos das crianças.",
            efforts2: "5.2. Esforços das comunidades locais: Muitas comunidades locais estão tomando iniciativas para resolver esses problemas por conta própria. Exemplos incluem a criação de escolas comunitárias, melhoria das técnicas agrícolas locais e ampliação do acesso das mulheres aos direitos educacionais.",
            conclusion: "Esses problemas são complexos e interconectados, mas podem ser gradualmente melhorados através de atenção e apoio internacionais sustentados, bem como da participação ativa das comunidades locais."
          },
  
          Ma: {
            titleAfrica1: "Ana a ku Africa: Chakudya, Madzi, Maphunziro, Ufulu wa Anthu",
            food1: "1.1. Kusowa kwa chakudya: Mayiko ambiri a ku Africa ndi omwe akukula akuvutika ndi kusowa kwakukulu kwa chakudya chifukwa cha chilala, kusintha kwa nyengo, ndi kupanga kwaulimi kosakhazikika.",
            food2: "1.2. Kusowa kwa zakudya zoyenera: Kusowa kwa zakudya zoyenera ndi vuto lalikulu kwa ana, omwe nthawi zambiri samapeza zakudya zofunikira kuti akule ndi kukula bwino. Izi zimapangitsa kuchepa kwa thupi, kukula kochepa, ndi kuchepa kwa chitetezo cha mthupi.",
            water1: "2.1. Kupeza madzi oyera: Mayiko ambiri omwe akukula alibe mwayi wopeza madzi otetezeka ndi oyera, zomwe zimapangitsa kuchuluka kwa matenda omwe amabwera ndi madzi monga cholera.",
            water2: "2.2. Kusowa kwa chilengedwe choyenera: Kusowa kwa chilengedwe choyenera chogawa madzi kumatanthauza kuti anthu ambiri ayenera kutenga madzi kutali, zomwe zimalepheretsa ana kupita kusukulu.",
            education1: "3.1. Kusowa kwa zipangizo zamasukulu: Masukulu ambiri alibe malo oyenera ophunzirira monga nyumba, mabuku, ndi matebulo. Kuphatikiza apo, masukulu ambiri alibe zipangizo zofunikira monga magetsi ndi intaneti.",
            education2: "3.2. Kusowa kwa aphunzitsi: Kusowa kwa aphunzitsi ophunzitsidwa kumapangitsa kuti ana akhale ambiri pa mphunzitsi m'modzi, zomwe zimapangitsa kukhala kovuta kupeza maphunziro abwino.",
            education3: "3.3. Maphunziro a atsikana: Atsikana nthawi zambiri amakumana ndi zopinga zambiri kuposa anyamata pazifukwa zachikhalidwe ndi zachuma.",
            humanRights1: "4.1. Kugwiritsa ntchito ana ntchito: Mayiko ambiri omwe akukula amaona ana akukakamizidwa kugwira ntchito m'malo mopita kusukulu chifukwa cha mavuto azachuma.",
            humanRights2: "4.2. Ukwati wa ana: M'madera ena, ana amakakamizidwa kukwatira ali aang'ono. Izi zimachititsa atsikana kutaya mwayi wophunzira ndikuwopseza thanzi lawo ndi chitetezo chawo.",
            humanRights3: "4.3. Nkhanza ndi kugwiriridwa: Ana nthawi zambiri amapezeka pa nkhanza ndi kugwiriridwa m'nyumba zawo kapena m'dera, zomwe zimakhudza kwambiri thanzi lawo lamthupi ndi lamaganizo.",
            efforts1: "5.1. Thandizo lochokera ku mabungwe apadziko lonse ndi ma NGO: Mabungwe ngati UNICEF, World Vision, Save the Children, ndi ena ambiri amachita ntchito zosiyanasiyana pothandiza ana ku Africa ndi mayiko omwe akukula. Zinthu izi zikuphatikizapo kupereka thandizo la chakudya, kukonza njira zopezera madzi oyera, kukonza zipangizo zamasukulu, ndi kuteteza ufulu wa ana.",
            efforts2: "5.2. Zochita za mdera: Madera ambiri akuchita khama kuthetsa mavuto awa okha. Zitsanzo zikuphatikizapo kukhazikitsa masukulu a mdera, kukonza njira zaulimi zamtunda, ndi kukulitsa mwayi wa atsikana wopeza maphunziro.",
            conclusion: "Mavuto awa ndi ovuta komanso olumikizidwa, koma angathe kusintha pang'onopang'ono kudzera mu chisamaliro chapatali chapatali komanso chithandizo, komanso kutenga mbali kwa madera amderawo."
          },
  
          Ch: {
            titleAfrica1: "Enfants Africains: Nourriture, Eau, Éducation, Droits de l'Homme",
            food1: "1.1. Pénurie alimentaire: De nombreux pays africains et en développement souffrent de graves pénuries alimentaires en raison de la sécheresse, du changement climatique et de la production agricole instable.",
            food2: "1.2. Malnutrition: La malnutrition est un problème sérieux pour les enfants, qui ne reçoivent souvent pas suffisamment de nutriments essentiels nécessaires à leur croissance et à leur développement. Cela conduit à une perte de poids, un retard de croissance et un affaiblissement de l'immunité.",
            water1: "2.1. Accès à l'eau potable: De nombreux pays en développement ont un accès limité à une eau sûre et propre, ce qui augmente l'incidence des maladies hydriques telles que le choléra.",
            water2: "2.2. Manque d'infrastructure: Un manque d'infrastructure adéquate d'approvisionnement en eau signifie que beaucoup de gens doivent aller chercher de l'eau loin de chez eux, empêchant les enfants de fréquenter l'école.",
            education1: "3.1. Manque d'installations scolaires: De nombreuses écoles manquent d'environnements d'apprentissage de base tels que des bâtiments, des manuels et des bureaux. De plus, beaucoup d'écoles manquent d'infrastructures essentielles comme l'électricité et Internet.",
            education2: "3.2. Pénurie d'enseignants: Une pénurie d'enseignants qualifiés entraîne des ratios élèves-enseignant très élevés, rendant difficile l'obtention d'une éducation de qualité.",
            education3: "3.3. Éducation des filles: Les filles rencontrent souvent plus de barrières à l'éducation que les garçons en raison de raisons culturelles et économiques.",
            humanRights1: "4.1. Travail des enfants: De nombreux pays en développement voient les enfants contraints au travail au lieu de fréquenter l'école en raison de difficultés économiques.",
            humanRights2: "4.2. Mariage des enfants: Dans certaines régions, les enfants sont souvent forcés de se marier à un jeune âge. Cela prive les filles de possibilités éducatives et menace leur santé et leur sécurité.",
            humanRights3: "4.3. Violence et exploitation: Les enfants sont fréquemment exposés à la violence et à l'exploitation au sein de leurs foyers ou de la société, ce qui affecte gravement leur santé physique et mentale.",
            efforts1: "5.1. Soutien des organisations internationales et des ONG: Des organisations comme l'UNICEF, World Vision, Save the Children, et bien d'autres mènent divers projets pour soutenir les enfants en Afrique et dans les pays en développement. Ces efforts comprennent la fourniture d'une aide alimentaire, l'amélioration de l'accès à l'eau potable, l'amélioration des infrastructures éducatives et la protection des droits des enfants.",
            efforts2: "5.2. Efforts des communautés locales: De nombreuses communautés locales prennent des initiatives pour résoudre ces problèmes elles-mêmes. Les exemples incluent la création d'écoles communautaires, l'amélioration des techniques agricoles locales et l'expansion de l'accès des femmes aux droits à l'éducation.",
            conclusion: "Ces problèmes sont complexes et interdépendants, mais peuvent être progressivement améliorés grâce à une attention et un soutien internationaux soutenus, ainsi qu'à la participation active des communautés locales."
          },
  
          Co: {
            titleAfrica1: "Wana wa Afrika: Chakula, Maji, Elimu, Haki za Binadamu",
            food1: "1.1. Upungufu wa chakula: Nchi nyingi za Afrika na zinazoendelea zinakabiliwa na upungufu mkubwa wa chakula kutokana na ukame, mabadiliko ya hali ya hewa, na uzalishaji wa kilimo usio imara.",
            food2: "1.2. Utapiamlo: Utapiamlo ni tatizo kubwa kwa watoto, ambao mara nyingi hawapati virutubisho muhimu vinavyohitajika kwa ukuaji na maendeleo. Hii husababisha kupoteza uzito, kudumaa kwa ukuaji, na kupungua kwa kinga ya mwili.",
            water1: "2.1. Upatikanaji wa maji safi: Nchi nyingi zinazoendelea zina upatikanaji mdogo wa maji salama na safi, ambayo huongeza matukio ya magonjwa yanayoenezwa kwa maji kama vile kipindupindu.",
            water2: "2.2. Ukosefu wa miundombinu: Ukosefu wa miundombinu sahihi ya usambazaji wa maji unamaanisha kwamba watu wengi wanapaswa kutafuta maji kutoka maeneo ya mbali, jambo ambalo linawazuia watoto kuhudhuria shule.",
            education1: "3.1. Ukosefu wa vifaa vya shule: Shule nyingi hazina mazingira ya msingi ya kujifunzia kama vile majengo, vitabu, na madawati. Kwa kuongezea, shule nyingi hazina miundombinu muhimu kama vile umeme na intaneti.",
            education2: "3.2. Upungufu wa walimu: Upungufu wa walimu waliofunzwa husababisha uwiano mkubwa sana wa wanafunzi kwa mwalimu, jambo ambalo linafanya kuwa vigumu kupata elimu bora.",
            education3: "3.3. Elimu ya wasichana: Wasichana mara nyingi wanakabiliwa na vikwazo vikubwa zaidi kwa elimu kuliko wavulana kutokana na sababu za kitamaduni na kiuchumi.",
            humanRights1: "4.1. Ajira ya watoto: Nchi nyingi zinazoendelea zinawaona watoto wakilazimishwa kufanya kazi badala ya kuhudhuria shule kutokana na shida za kiuchumi.",
            humanRights2: "4.2. Ndoa za utotoni: Katika baadhi ya maeneo, watoto mara nyingi wanalazimishwa kuoa wakiwa na umri mdogo. Hii inawanyima wasichana fursa za kielimu na kutishia afya na usalama wao.",
            humanRights3: "4.3. Vurugu na unyonyaji: Watoto mara nyingi wanakabiliwa na vurugu na unyonyaji ndani ya nyumba zao au ndani ya jamii, jambo ambalo linadhuru sana afya yao ya mwili na akili.",
            efforts1: "5.1. Msaada kutoka kwa mashirika ya kimataifa na NGOs: Mashirika kama vile UNICEF, World Vision, Save the Children, na mengine mengi yanaendesha miradi mbalimbali kusaidia watoto Afrika na nchi zinazoendelea. Juhudi hizi zinajumuisha kutoa msaada wa chakula, kuboresha upatikanaji wa maji safi, kuboresha miundombinu ya elimu, na kulinda haki za watoto.",
            efforts2: "5.2. Juhudi za jamii za mitaa: Jamii nyingi za mitaa zinachukua hatua za kukabiliana na matatizo haya wenyewe. Mifano ni pamoja na kuanzisha shule za jamii, kuboresha mbinu za kilimo za ndani, na kupanua upatikanaji wa wanawake kwa haki za elimu.",
            conclusion: "Masuala haya ni magumu na yameunganishwa, lakini yanaweza kuboreshwa hatua kwa hatua kupitia umakini na msaada wa kimataifa wa kudumu, pamoja na ushiriki hai kutoka kwa jamii za mitaa."
          },
  
          Rw: {
            titleAfrica1: "Abana b'Afurika: Ibiribwa, Amazi, Uburezi, Uburenganzira bwa Muntu",
            food1: "1.1. Kubura ibiribwa: Ibihugu byinshi by'Afurika n'ibihugu bikiri mu nzira y'amajyambere birahura n'ikibazo gikomeye cyo kubura ibiribwa kubera amapfa, ihindagurika ry'ikirere, no kubura umusaruro w'ubuhinzi uhagije.",
            food2: "1.2. Imirire mibi: Imirire mibi ni ikibazo gikomeye ku bana, cyane ko bakunze kutabona intungamubiri z'ibanze zikenewe mu mikurire no mu iterambere. Ibi bitera kubura ibiro, kudakura neza, no kugabanya ubudahangarwa bw'umubiri.",
            water1: "2.1. Kugera ku mazi meza: Ibihugu byinshi bikiri mu nzira y'amajyambere bifite ikibazo cyo kugera ku mazi meza kandi asukuye, ibi bikongera ibyago byo kurwara indwara zituruka ku mazi mabi nk'ikirungurira (cholera).",
            water2: "2.2. Kubura ibikorwaremezo: Kubura ibikorwaremezo bihagije byo gutanga amazi bisobanura ko abantu benshi bagomba kujya kuvoma kure, bikabuza abana kujya ku ishuri.",
            education1: "3.1. Kubura ibikoresho by'amashuri: Amashuri menshi afite ibibazo byo kubura inyubako, ibitabo, n'ameza yo kwicaraho. Byongeye kandi, amashuri menshi abura ibikorwaremezo by'ibanze nk'umuriro n'itumanaho rya interineti.",
            education2: "3.2. Kubura abarimu: Kubura abarimu bize bihagije bituma habaho umubare munini w'abana b'abanyeshuri kuri mwarimu umwe, bikagora kubona uburezi bufite ireme.",
            education3: "3.3. Uburezi bw'abakobwa: Abakobwa akenshi bahura n'imbogamizi zikomeye mu burezi kurusha abahungu kubera impamvu z'umuco n'ubukungu.",
            humanRights1: "4.1. Gukoresha abana imirimo ivunanye: Mu bihugu byinshi bikiri mu nzira y'amajyambere abana bakora imirimo ivunanye aho kujya ku ishuri kubera ibibazo by'ubukungu.",
            humanRights2: "4.2. Gushyingira abana: Mu bice bimwe na bimwe, abana bashyingirwa bakiri bato. Ibi bituma abakobwa babura amahirwe yo kwiga kandi bikangiza ubuzima bwabo.",
            humanRights3: "4.3. Ihohoterwa n'inyungu z'abandi: Abana akenshi bahura n'ihohoterwa n'inyungu z'abandi mu ngo zabo cyangwa mu muryango, ibi bigira ingaruka zikomeye ku buzima bwabo bw'umubiri n'ubw'ubwenge.",
            efforts1: "5.1. Inkunga itangwa n'imiryango mpuzamahanga n'Imiryango itegamiye kuri Leta: Imiryango nka UNICEF, World Vision, Save the Children, n'indi myinshi ikora imishinga itandukanye yo gufasha abana muri Afurika n'ibihugu bikiri mu nzira y'amajyambere. Izi ngamba zirimo gutanga imfashanyo y'ibiribwa, kunoza uburyo bwo kugera ku mazi meza, guteza imbere ibikorwaremezo by'uburezi, no kurengera uburenganzira bw'abana.",
            efforts2: "5.2. Imbaraga z'ibihugu: Mu bihugu byinshi, abaturage bafata ingamba zo gukemura ibi bibazo ubwabo. Ingero zirimo gushinga amashuri ashingiye ku baturage, kunoza uburyo bw'ubuhinzi bwa kinyamwuga, no kwagura uburenganzira bw'abagore ku burezi.",
            conclusion: "Ibi bibazo ni binini kandi bifitanye isano, ariko birashobora kugenda bikemuka buhoro buhoro binyuze mu guhora bitabwaho n'inkunga mpuzamahanga, ndetse n'uruhare rufatika rw'abaturage."
          },
  
  
        }
      };
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
  };
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
    width: 44px; /* 국기 아이콘 크기 */
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
    display: none;
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