<template>
  <div class="SunFlowercontainer">
    <div v-for="index in 7" :key="index" class="sunflower" ref="sunflowerRefs">
      <div class="petals">
        <div v-for="n in 12" :key="n" :class="'petal petal-' + n" @click="navigate(n, index)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        1: 'https://www.instagram.com/smilenumbermathematics/',
        2: 'https://www.instagram.com/smilenumbermathematics/',
        3: 'https://www.instagram.com/smilenumbermathematics/',
        4: 'https://www.instagram.com/smilenumbermathematics/',
        5: 'https://www.instagram.com/smilenumbermathematics/',
        6: 'https://www.instagram.com/smilenumbermathematics/',
        7: 'https://www.instagram.com/smilenumbermathematics/',
        8: 'https://www.instagram.com/smilenumbermathematics/',
        9: 'https://www.instagram.com/smilenumbermathematics/',
        10: 'https://www.instagram.com/smilenumbermathematics/',
        11: 'https://www.instagram.com/smilenumbermathematics/',
        12: 'https://www.instagram.com/smilenumbermathematics/'
      },
      sunflowers: []
    };
  },
  mounted() {
    this.randomizeSunflowers();
  },
  methods: {
    navigate(petalNumber, sunflowerIndex) {
      if (this.links[petalNumber]) {
        window.open(this.links[petalNumber], '_blank');
      }
    },
    randomizeSunflowers() {
      const sunflowerRefs = this.$refs.sunflowerRefs;
      const positions = [];

      sunflowerRefs.forEach((sunflower, index) => {
        const newPosition = this.getRandomPosition(positions);
        sunflower.style.position = 'absolute';
        sunflower.style.top = `${newPosition.top}px`;
        sunflower.style.left = `${newPosition.left}px`;
        positions.push(newPosition);
      });
    },
    getRandomPosition(positions) {
      const containerWidth = this.$el.clientWidth;
      const containerHeight = this.$el.clientHeight;
      const sunflowerWidth = 30; // Width of sunflower element in pixels
      const sunflowerHeight = 30; // Height of sunflower element in pixels

      let top = Math.random() * (containerHeight - sunflowerHeight);
      let left = Math.random() * (containerWidth - sunflowerWidth);

      // Check for collisions with existing positions
      positions.forEach(pos => {
        while (
          top > pos.top - sunflowerHeight &&
          top < pos.top + sunflowerHeight &&
          left > pos.left - sunflowerWidth &&
          left < pos.left + sunflowerWidth
        ) {
          top = Math.random() * (containerHeight - sunflowerHeight);
          left = Math.random() * (containerWidth - sunflowerWidth);
        }
      });

      return { top, left };
    }
  }
};
</script>

<style>
.SunFlowercontainer {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: white;
}

.sunflower {
  width: 30px; /* Adjust sunflower width */
  height: 30px; /* Adjust sunflower height */
}

.petals {
  position: relative;
  width: 40%;
  height: 40%;
}

.petal {
  position: absolute;
  width: 7px; /* Adjust petal width */
  height: 20px; /* Adjust petal height */
  background-color: orange;
  border-radius: 5px 5px 0 0; /* Adjust petal border radius */
  transform-origin: bottom center;
  cursor: pointer;
}

/* CSS for petal rotations */
.petal-1 { transform: rotate(0deg) translateY(-15px); }
.petal-2 { transform: rotate(30deg) translateY(-15px); }
.petal-3 { transform: rotate(60deg) translateY(-15px); }
.petal-4 { transform: rotate(90deg) translateY(-15px); }
.petal-5 { transform: rotate(120deg) translateY(-15px); }
.petal-6 { transform: rotate(150deg) translateY(-15px); }
.petal-7 { transform: rotate(180deg) translateY(-15px); }
.petal-8 { transform: rotate(210deg) translateY(-15px); }
.petal-9 { transform: rotate(240deg) translateY(-15px); }
.petal-10 { transform: rotate(270deg) translateY(-15px); }
.petal-11 { transform: rotate(300deg) translateY(-15px); }
.petal-12 { transform: rotate(330deg) translateY(-15px); }

.petal:hover {
  opacity: 0.8;
  transform: scale(1.6); /* Scale the petal to 120% of its original size */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
}


</style>
