<template>
  <div class="grid-container-2">
    <div v-for="i in 28" :key="i" class="grid-item" @mouseenter="enlargeImage(i)" @mouseleave="resetImage(i)">
      <img :src="getImageUrl(i)" :alt="`${$t('CarName.cargoTruck')}${i}`" :class="'image-2-' + i" @click="goToCargoTruck(i)" />
      <p class="image-label">{{ $t('CarName.cargoTruck') }} {{ i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(i) {
      return require(`@/assets/CargoTruck${i}.png`);
    },
    goToCargoTruck(i) {
      this.$router.push({ name: `CargoTruck${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      const image = document.querySelector(`.image-2-${i}`);
      if (image) {
        image.classList.add('enlarged-2');
      }
    },
    resetImage(i) {
      const image = document.querySelector(`.image-2-${i}`);
      if (image) {
        image.classList.remove('enlarged-2');
      }
    }
  }
}
</script>

<style scoped>
.grid-container-2 {
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
.grid-item img.enlarged-2 {
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
