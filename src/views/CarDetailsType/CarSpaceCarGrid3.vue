
<template>
  <div class="grid-container-0">
    <div v-for="i in 56" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="'SmileCar' + i" :class="'image-0-' + i" @click="goToCarSpaceCar(i)" />
      <p class="image-label">{{ 'SmileCar' + i }}</p>
    </div>
  </div>
</template>





<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/CarSpaceCar${i}.png`);
    },
    goToCarSpaceCar(i) {
      this.$router.push({ name: `CarSpaceCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-0-${i}`);
      if (image) {
        image.classList.add('enlarged-0');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-0-${i}`);
      if (image) {
        image.classList.remove('enlarged-0');
      }
    }
  }
}

</script>

<style scoped>
.grid-container-0 {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.grid-item img {
  width: 90%;
  height: auto;
  cursor: pointer;
  transition: width 0.3s, height 0.3s;
}
.grid-item img.enlarged-0 {
  width: 100%;
  height: auto;
}
.image-label {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}
</style>
