<template>
  <div class="grid-container-HyundaiCar">
    <div v-for="i in 21" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="`${$t('CarName.hyundaiCar')}${i}`" :class="'image-HyundaiCar-' + i" @click="goToHyundaiCar(i)" />
      <p class="image-label">{{ $t('CarName.hyundaiCar') + i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/HyundaiCar${i}.png`);
    },
    goToHyundaiCar(i) {
      this.$router.push({ name: `HyundaiCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-HyundaiCar-${i}`);
      if (image) {
        image.classList.add('enlarged-HyundaiCar');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-HyundaiCar-${i}`);
      if (image) {
        image.classList.remove('enlarged-HyundaiCar');
      }
    }
  }
}
</script>

<style scoped>
.grid-container-HyundaiCar {
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
.grid-item img.enlarged-HyundaiCar {
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
