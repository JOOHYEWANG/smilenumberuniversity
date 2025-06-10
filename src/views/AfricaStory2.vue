<template>
      
      <div class="RainbowMenu-container">
        <RainbowMenu />
      </div>

    <div class="frame">
    <div class="content">

      <br>

      <div class="how-to-buy-car">
        <h1>"모든 아이들이 웃는 그날을 꿈 꿉니다."</h1>
      </div>
      <br><br>

      <div class="AfricaSmileCar">
     <img src="@/assets/BigSmile.png" alt="Our Dream Image">
     </div>
      <br><br>

    <section>
      <br>
      
      <!-- <strong> 태그를 <p> 태그로 변경하고 텍스트를 좌측 정렬합니다. -->
        <p>[이사야 35장: 1 광야와 메마른 땅이 기뻐하며 사막이 백합화 같이 피어 즐거워하며 
          2 무성하게 피어 기쁜 노래로 즐거워하며 레바논의 영광과 갈멜과 사론의 아름다움을 얻을 것이라 그것들이 여호와의 영광 곧 우리 하나님의 아름다움을 보리로다 
          3 너희는 약한 손을 강하게 하여주며 떨리는 무릎을 굳게 하여주며
          4 겁내는 자에게 이르기를 너는 굳세게 하라, 두려워 말라, 보라 너희 하나님이 오사 보수하시며 보복하여 주실 것이라 그가 오사 너희를 구하시리라 하라 
          5 그 때에 소경의 눈이 밝을 것이며 귀머거리의 귀가 열릴 것이며
          6 그 때에 저는 자는 사슴 같이 뛸 것이며 벙어리의 혀는 노래하리니 이는 광야에서 물이 솟겠고 사막에서 시내가 흐를 것임이라 
          7 뜨거운 사막이 변하여 못이 될 것이며 메마른 땅이 변하여 원천이 될 것이며 시랑의 눕던 곳에 풀과 갈대와 부들이 날 것이며 
          8 거기 대로가 있어 그 길을 거룩한 길이라 일컫는바 되리니 깨끗지 못한 자는 지나지 못하겠고 오직 구속함을 입은 자들을 위하여 있게 된 것이라 우매한 행인은 그 길을 범치 못할 것이며 
          9 거기는 사자가 없고 사나운 짐승이 그리로 올라가지 아니하므로 그것을 만나지 못하겠고 오직 구속함을 얻은 자만 그리로 행할 것이며 
          10 여호와의 속량함을 얻은 자들이 돌아오되 노래하며 시온에 이르러 그 머리 위에 영영한 희락을 띠고 기쁨과 즐거움을 얻으리니 슬픔과 탄식이 달아나리로다]</p>
        
      
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

export default {
  name: 'AfricaSmileCarComponent',
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
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

.AfricaSmileCar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh; /* 부모 요소가 페이지 전체 높이를 차지하게 설정 */
}

.AfricaSmileCar img {
  width: 65%;
  height: auto; /* 이미지 비율을 유지합니다. */
}

        
.MapSearch-grid-container {
  margin-top: 50px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
</style>
