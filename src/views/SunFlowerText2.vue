<template>
  <div>
    <div class="RainbowMenu-container">
      <RainbowMenu />
    </div>
    <br><br>
    <div>
      <div class="FlowerContainer">
        <div class="text-frame" @mousedown="scrollToTop">
          <h1>고린도전서 13장</h1>
          1 내가 사람의 방언과 천사의 말을 할찌라도 사랑이 없으면 소리나는 구리와 울리는 꽹과리가 되고 
          2 내가 예언하는 능이 있어 모든 비밀과 모든 지식을 알고 또 산을 옮길만한 모든 믿음이 있을찌라도 사랑이 없으면 내가 아무 것도 아니요 
          3 내가 내게 있는 모든 것으로 구제하고 또 내 몸을 불사르게 내어 줄찌라도 사랑이 없으면 내게 아무 유익이 없느니라 
          4 사랑은 오래 참고 사랑은 온유하며 투기하는 자가 되지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며 
          5 무례히 행치 아니하며 자기의 유익을 구치 아니하며 성내지 아니하며 악한 것을 생각지 아니하며 
          6 불의를 기뻐하지 아니하며 진리와 함께 기뻐하고 
          7 모든 것을 참으며 모든 것을 믿으며 모든 것을 바라며 모든 것을 견디느니라 
          8 사랑은 언제까지든지 떨어지지 아니하나 예언도 폐하고 방언도 그치고 지식도 폐하리라 
          9 우리가 부분적으로 알고 부분적으로 예언하니 
          10 온전한 것이 올 때에는 부분적으로 하던 것이 폐하리라 
          11 내가 어렸을 때에는 말하는 것이 어린 아이와 같고 깨닫는 것이 어린 아이와 같고 생각하는 것이 어린 아이와 같다가 장성한 사람이 되어서는 어린 아이의 일을 버렸노라 
          12 우리가 이제는 거울로 보는것 같이 희미하나 그 때에는 얼굴과 얼굴을 대하여 볼 것이요 이제는 내가 부분적으로 아나 그 때에는 주께서 나를 아신 것 같이 내가 온전히 알리라 
          13 그런즉 믿음, 소망, 사랑, 이 세 가지는 항상 있을 것인데 그 중에 제일은 사랑이라
        </div>
        <div v-for="index in 5" :key="index" class="flower" ref="flowerRefs">
          <div class="flower-shape" @click="navigate(1, index)"></div>
        </div>
      </div>
    </div>
    <div class="MapSearch-grid-container">
      <MapSearchComponent />
    </div>
    <div class="Map-grid-container">
      <MapVue />
    </div>
  </div>
</template>

<script>
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
  name: 'Bible',
  components: {
    RainbowMenu,
    MapVue,
    MapSearchComponent,
  },

  data() {
    return {
      links: {
        1: 'https://www.instagram.com/smilenumbermathematics/',
        2: 'https://www.instagram.com/smilenumbermathematics/',
        3: 'https://www.instagram.com/smilenumbermathematics/',
        4: 'https://www.instagram.com/smilenumbermathematics/',
        5: 'https://www.instagram.com/smilenumbermathematics/',
      },
      flowers: []
    };
  },
  mounted() {
    this.randomizeFlowers();
  },
  methods: {
    navigate(pointNumber, flowerIndex) {
      if (this.links[pointNumber]) {
        window.open(this.links[pointNumber], '_blank');
      }
    },
    randomizeFlowers() {
      const flowerRefs = this.$refs.flowerRefs;
      const positions = [];

      flowerRefs.forEach((flower, index) => {
        const newPosition = this.getRandomPosition(positions);
        flower.style.position = 'absolute';
        flower.style.top = `${newPosition.top}px`;
        flower.style.left = `${newPosition.left}px`;
        positions.push(newPosition);
      });
    },
    getRandomPosition(positions) {
      const containerWidth = this.$el.clientWidth;
      const containerHeight = this.$el.clientHeight;
      const flowerWidth = 30; // Width of flower element in pixels
      const flowerHeight = 30; // Height of flower element in pixels

      let top = Math.random() * (containerHeight - flowerHeight);
      let left = Math.random() * (containerWidth - flowerWidth);

      // Check for collisions with existing positions
      positions.forEach(pos => {
        while (
          top > pos.top - flowerHeight &&
          top < pos.top + flowerHeight &&
          left > pos.left - flowerWidth &&
          left < pos.left + flowerWidth
        ) {
          top = Math.random() * (containerHeight - flowerHeight);
          left = Math.random() * (containerWidth - flowerWidth);
        }
      });

      return { top, left };
    }
  }
};
</script>

<style>
.FlowerContainer {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: white;
}

.flower {
  width: 30px; /* Adjust flower width */
  height: 30px; /* Adjust flower height */
}

.flower-shape {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: pink;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  cursor: pointer;
}

.flower-shape:hover {
  opacity: 0.8;
  transform: scale(1.6); /* Scale the flower to 160% of its original size */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
}

.text-frame {
  border: 2px solid #000; /* 테두리 */
  padding: 20px; /* 패딩 */
  resize: both; /* 크기 조절 가능 */
  overflow: auto; /* 내용이 프레임을 넘치면 스크롤 생성 */
  width: 70%; /* 초기 너비 */
  max-width: 70%; /* 최대 너비 */
  min-height: 200px; /* 최소 높이 */
  margin: 20px auto; /* 중앙 정렬 */
  font-weight: bold; /* 텍스트를 볼드체로 */
  margin-top: 80px;
}

.MapSearch-grid-container {
  position: relative;
  margin-top: 200px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
</style>
