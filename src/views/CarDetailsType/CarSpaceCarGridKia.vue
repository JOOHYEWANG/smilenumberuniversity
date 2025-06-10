<template>
  <div class="grid-container-KiaCar">
    <div v-for="i in 28" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="`${$t('CarName.kiaCar')}${i}`" :class="'image-KiaCar-' + i" @click="goToKiaCar(i)" />
      <p class="image-label">{{ $t('CarName.kiaCar') + i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/KiaCar${i}.png`);
    },
    goToKiaCar(i) {
      this.$router.push({ name: `KiaCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-KiaCar-${i}`);
      if (image) {
        image.classList.add('enlarged-KiaCar');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-KiaCar-${i}`);
      if (image) {
        image.classList.remove('enlarged-KiaCar');
      }
    }
  }
}
</script>

<style scoped>
.grid-container-KiaCar {
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
.grid-item img.enlarged-KiaCar {
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
