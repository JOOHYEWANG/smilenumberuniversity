<template>
<div class="RainbowMenu-container">
        <RainbowMenu />
      </div>

  <div>
    <div class="language-dropdown">
      <button @click="toggleLanguageDropdown">
        <img :src="getFlagImagePath(selectedLanguage)" alt="Flag" class="flag-icon">
        LANGUAGE
      </button>
      <ul v-if="showLanguageDropdown">
        <li><a @click="changeLanguage('ko')"><img src="@/assets/ko.png" class="flag-icon-small" alt="한국어"> 한국어</a></li>
        <li><a @click="changeLanguage('en')"><img src="@/assets/en.png" class="flag-icon-small" alt="English"> English</a></li>
        <li><a @click="changeLanguage('Be')"><img src="@/assets/FlagBenin.png" class="flag-icon-small" alt="Benin"> Benin</a></li>
      </ul>
    </div>
  </div>

  <div class="content">
      <div v-if="selectedLanguage === 'ko'">
        <h1>{{ translatedContent.ko.titleAfrica1 }}</h1>

        <br><br>  

        <h3>식량부족</h3>
        <p>{{ translatedContent.ko.food1 }}</p>

        <h3>영양결핍</h3>
        <p>{{ translatedContent.ko.food2 }}</p>

        <h3>깨끗한 물 접근성</h3>
        <h3>{{ translatedContent.ko.water }}</h3>

        <p>{{ translatedContent.ko.water1 }}</p>

         <h3>인프라 부족</h3>
        <p>{{ translatedContent.ko.water2 }}</p>

        <br><br>


        <h3>{{ translatedContent.ko.education }}</h3>

        <h3>학교시설부족</h3>
        <p>{{ translatedContent.ko.education1 }}</p>

        <h3>교사부족</h3>
        <p>{{ translatedContent.ko.education2 }}</p>

        <h3>여아의 교육</h3>
        <p>{{ translatedContent.ko.education3 }}</p>

        <br><br>

        <h2>{{ translatedContent.ko.humanRights }}</h2>

        <h3>아동노동</h3>
        <p>{{ translatedContent.ko.humanRights1 }}</p>

        <h3>아동결혼</h3>
        <p>{{ translatedContent.ko.humanRights2 }}</p>

        <h3>폭력과 착취</h3>
        <p>{{ translatedContent.ko.humanRights3 }}</p>

        <br><br>

        <h3>{{ translatedContent.ko.efforts }}</h3>

        <h3>국제 기구와 NGO의 지원</h3>
        <p>{{ translatedContent.ko.efforts1 }}</p>

        <h3>지역사회의 노력</h3>
        <p>{{ translatedContent.ko.efforts2 }}</p>

        <br><br>

        <h3>앞으로의 노력</h3>
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
          titleAfrica1: "아프리카 어린이: 식량, 물, 교육, 인권 문제",
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
        }
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
  left: 10px; /* 원하는 위치로 조정 */
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
  width: 20px; /* 국기 아이콘 크기 */
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
  width: 20px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
}

.flag-icon-small {
  width: 16px;
  height: auto;
  margin-right: 5px;
 
}

.content {
  margin-top: 20px;
  border: 2px solid skyblue; /* 프레임을 하늘색으로 설정 */
  padding: 15px; /* 프레임 안쪽 여백 설정 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
  color: skyblue; /* 프레임 안의 텍스트를 하늘색으로 설정 */
  font-weight: bold;
  width: 700px; /* 프레임 너비를 500px로 설정 */
  margin-left: auto; /* 왼쪽 마진 자동 설정으로 중앙 정렬 */
  margin-right: auto; /* 오른쪽 마진 자동 설정으로 중앙 정렬 */
}

h1, h2, h3 {
  color: black; /* 제목 색상을 검정색으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
}

</style>