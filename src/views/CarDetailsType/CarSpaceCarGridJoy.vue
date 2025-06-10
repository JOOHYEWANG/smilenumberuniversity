<template>
  <div class="grid-container-JoyCar">
    <div
      v-for="i in 21"
      :key="i"
      class="grid-item"
      @mouseenter="enlargeImage(i)"
      @mouseleave="resetImage(i)"
    >
      <img
        :src="getImageUrl(i)"
        :alt="`${$t('CarName.joyCar')} ${i}`"
        @click="goToJoyCar(i)"
        :class="{ 'enlarged-JoyCar': enlargedImage === i }"
      />
      <p class="image-label">{{ $t('CarName.joyCar') + '(즐거워요!)' + i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enlargedImage: null
    };
  },
  methods: {
    getImageUrl(i) {
      return require(`@/assets/JoyCar${i}.png`);
    },
    goToJoyCar(i) {
      this.$router.push({ name: `JoyCar${i}` }).then(() => {
        window.scrollTo(0, 0);
      });
    },
    enlargeImage(i) {
      this.enlargedImage = i;
    },
    resetImage() {
      this.enlargedImage = null;
    }
  }
};
</script>

<style scoped>
.grid-container-JoyCar {
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
.grid-item img.enlarged-JoyCar {
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
