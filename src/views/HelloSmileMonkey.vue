<template>
  

  <div>
  <div class="RainbowMenu-container">
    <RainbowMenu />,
  </div>
  </div>
  <br><br>


  <div class="MonkeyLove-container">
    <h1>
      <span class="red">H</span>
      <span class="orange">E</span>
      <span class="dark-yellow">L</span>
      <span class="green">L</span>
      <span class="blue">O</span>
      <span class="indigo">&nbsp;</span>
      <span class="indigo">&nbsp;</span>
      <span class="red">M</span>
      <span class="orange">Y</span>
      <span class="dark-yellow">&nbsp;</span>
      <span class="dark-yellow">&nbsp;</span>
      <span class="green">S</span>
      <span class="blue">M</span>
      <span class="indigo">I</span>
      <span class="violet">L</span>
      <span class="red">E</span>
      <span class="orange">&nbsp;</span>
      <span class="orange">&nbsp;</span>
      <span class="dark-yellow">M</span>
      <span class="green">O</span>
      <span class="blue">N</span>
      <span class="indigo">K</span>
      <span class="violet">E</span>
      <span class="red">Y</span>
      <span class="orange">!</span>
    </h1>
    <p class="skyblue bold">Welcome to the HelloSmileMonkey page.</p>
  </div>
<br><br>

<div>
<div class="RainbowTextLong-grid-container">
  
  <RainbowTextLong />,
  
</div>
</div>

<div>
<div class="container">
  <img src="@/assets/MonkeyCar8.png" alt="Monkey Image" class="monkey-image">
  <p>MONKEY!MONKEY! SMILE-MONKEY!</p>
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
import RainbowTextLong from '@/views/RainbowTextLong.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
name: 'HelloSmile',
components: {
RainbowMenu,
RainbowTextLong,
MapVue,
MapSearchComponent,
}
}
</script>

<style scoped>

.container {
text-align: center; /* 텍스트를 가운데 정렬 */
color: white;
font-weight: bold; 
}
.MonkeyLove-container {
text-align: center; /* 텍스트를 가운데 정렬 */
bottom: 100px; 
}

.monkey-image {
    margin-top: 20px; /* 이미지와 텍스트 사이의 간격 설정 */
    width: 50%; /* 이미지의 너비를 50%로 설정하여 원본 크기의 절반으로 줄임 */
    height: auto; /* 높이를 자동으로 조정하여 가로세로 비율을 유지 */
    background-color: white; /* 이미지 주위 배경을 하얀색으로 설정 */
}


.RainbowTextLong-grid-container {
display: flex;
justify-content: center;
align-items: center;
height: 10dvh;
margin-top: 200px;
margin-bottom: 0px;
position: relative; /* 상대 위치 설정 */
transform: translateX(10px); 
}
.MapVue-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
}
.MapSearch-grid-container {
  margin-top: 50px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 60px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.red { color: red; }
.orange { color: orange; }
.dark-yellow { color: #DAA520; } /* 어두운 노란색 */
.green { color: green; }
.blue { color: blue; }
.indigo { color: indigo; }
.violet { color: violet; }
.skyblue { color: skyblue; }
.bold { font-weight: bold; }

</style>