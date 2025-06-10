<template>
  <div class="grid-container-SamsungCar">
    <div v-for="i in 14" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="`${$t('CarName.samsungCar')}${i}`" :class="'image-SamsungCar-' + i" @click="goToSamsungCar(i)" />
      <p class="image-label">{{ $t('CarName.samsungCar') + i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/SamsungCar${i}.png`);
    },
    goToSamsungCar(i) {
      this.$router.push({ name: `SamsungCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-SamsungCar-${i}`);
      if (image) {
        image.classList.add('enlarged-SamsungCar');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-SamsungCar-${i}`);
      if (image) {
        image.classList.remove('enlarged-SamsungCar');
      }
    }
  }
}
</script>

<style scoped>
.grid-container-SamsungCar {
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
.grid-item img.enlarged-SamsungCar {
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
