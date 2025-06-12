<template>
  <div class="heart-text-container">
    <svg viewBox="0 0 300 300" class="heart-svg">
      
      <path id="heartPath"
        d="M 150 50
           Q 200 0, 250 50
           A 20 50, 0, 0, 1, 250 90
           Q 200 134, 150 200
           Q 100 134, 50 90
           A 20 50, 0, 0, 1, 50 50
           Q 100 10, 150 50 Z"
        fill="none" />
      <text>
        <textPath href="#heartPath" startOffset="0%">
          <a xlink:href="https://joohyewang.wixsite.com/mathematics" target="_blank">
            {{ repeatedText }}
          </a>
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'LOVE & LOVE &'
    };
  },
  computed: {
    repeatedText() {
      // 하트 모양을 가득 채우기 위해 텍스트를 충분히 반복
      const repetitions = 5;
      return this.text.repeat(repetitions);
    }
  }
}
</script>

<style scoped>
.heart-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.heart-svg {
  width: 500px;
  height: 500px;
}

text {
  font-size: 15.33px;
  fill: red;
  font-weight: bold;
  transition: font-size 0.5s ease, fill 0.5s ease; /* 부드러운 전환 효과 */
}

textPath a {
  fill: red;
  text-decoration: none;
}

textPath a:hover {
  fill: yellow;
}

.heart-text-container:hover text {
  font-size: 20px; /* hover 시 크기 확대 */
}

/* ✅ 모바일 화면에서 폰트 사이즈 17px 적용 */
@media (max-width: 600px) {
  text {
    font-size: 17px;
  }

  .heart-text-container:hover text {
    font-size: 20px; /* 모바일에서도 hover 시 동일하게 작동 */
  }
}
</style>

