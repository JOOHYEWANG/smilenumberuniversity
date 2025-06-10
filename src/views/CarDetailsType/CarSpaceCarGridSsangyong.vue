<template>
  <div class="grid-container-SsangyongCar">
    <div v-for="i in 7" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="`${$t('CarName.ssangyongCar')} ${i}`" :class="'image-SsangyongCar-' + i" @click="goToSsangyongCar(i)" />
      <p class="image-label">{{ $t('CarName.ssangyongCar') + '(휘발유)' + i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/SsangyongCar${i}.png`);
    },
    goToSsangyongCar(i) {
      this.$router.push({ name: `SsangyongCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-SsangyongCar-${i}`);
      if (image) {
        image.classList.add('enlarged-SsangyongCar');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-SsangyongCar-${i}`);
      if (image) {
        image.classList.remove('enlarged-SsangyongCar');
      }
    }
  }
}
</script>

<style scoped>
.grid-container-SsangyongCar {
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
.grid-item img.enlarged-SsangyongCar {
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
