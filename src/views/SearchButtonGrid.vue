<template>
  <div class="curtain-search-button">
    <div class="header" @click="toggle">
      <img src="@/assets/Tri1.png" alt="Toggle" :class="{'rotate': isOpen}" class="toggle-image">
      <span style="font-weight: bold; margin-right: 10px;">SMILENUMBER MOTORS PLATFORM MENU AND CONTENTS</span>
      <img src="@/assets/Tri1.png" alt="Toggle" :class="{'rotate': isOpen}" class="toggle-image">
    </div>                          

    <br> <br> 
    <transition name="slide-fade">
      <div v-show="isOpen">
        <div class="button-container">
          <div style="text-align: center;">
            <button class="external-link-button" @click="openLink('https://joohyewang.wixsite.com/mathematics')" style="text-decoration:none; color: red;">
              SmileNumber Mathematics Group & Thinking and Idea
            </button>
            <br> <br>
            <button class="external-link-button" @click="openLink('https://www.instagram.com/smilenumbermathematics/')" style="text-decoration:none; color: orange;">
              Monkey Love Group and Elegance Monkey
            </button>
            <br> <br>
            <button class="external-link-button" @click="openLink('https://joohyewang.wixsite.com/smilenumbermotors')" style="text-decoration:none; color: rgb(243, 243, 36);">
              SmileNumber Motors & Our Dream
            </button>                                  
            <br> <br>
            <router-link to="/AboutVue" style="text-decoration: none; color: green;">
              Our Love and Our Smile
            </router-link>
            <br> <br>
            <router-link to="/HelloSmileMonkey" style="text-decoration: none; color: blue;">
              Hello Smile Monkey!
            </router-link>
            <br> <br>
            <router-link to="/JesusSaid" style="text-decoration: none; color: indigo;">
              John 14:6
            </router-link>
            <br> <br>
            <router-link to="/" style="text-decoration: none; color: purple;">
              Smile
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CurtainSearchButton',
  data() {
    return {
      isOpen: false, // State to control if the buttons are visible
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    openLink(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>

.curtain-search-button {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  background-color:skyblue;
  border: 1px solid #ccc;
  color: white; /* 텍스트 색상을 오렌지 색상으로 설정 */
  border-radius: 5px;
}

.toggle-image {
  width: 30px; /* Set the width of the image */
  height: 30px; /* Set the height of the image */
  transition: transform 0.3s;
  margin-right: 10px;
}

.header img.rotate {
  transform: rotate(180deg);
}

.button-container {
  overflow: hidden;
}

/* Hide text frame box */
.button-container button,
.router-link {
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  text-decoration: underline;
}

.button-container button:hover,
.router-link:hover {
  text-decoration: none;
}

.search-row {
  display: flex;
  justify-content: center;
  margin: 5px 0;
}

.search-button {
  margin: 0 5px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #e00f0f;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
  max-height: 0;
  padding: 0;
  margin: 0;
}

/* 내부 및 외부 링크 텍스트를 볼드체로 변경 */
.button-container button,
.router-link,
a {
  font-weight: bold;
}
</style>