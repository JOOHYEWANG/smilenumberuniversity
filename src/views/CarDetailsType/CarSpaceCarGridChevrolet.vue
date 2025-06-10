<template>
  <div class="grid-container-ChevroletCar">
    <div v-for="i in 14" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="`${$t('CarName.chevroletCar')} ${i}`" :class="'image-ChevroletCar-' + i" @click="goToChevroletCar(i)" />
      <p class="image-label">{{ $t('CarName.chevroletCar') + '(좀 좋아!)' + i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/ChevroletCar${i}.png`);
    },
    goToChevroletCar(i) {
      this.$router.push({ name: `ChevroletCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-ChevroletCar-${i}`);
      if (image) {
        image.classList.add('enlarged-ChevroletCar');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-ChevroletCar-${i}`);
      if (image) {
        image.classList.remove('enlarged-ChevroletCar');
      }
    }
  }
}
</script>

<style scoped>
.grid-container-ChevroletCar {
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
.grid-item img.enlarged-ChevroletCar {
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
