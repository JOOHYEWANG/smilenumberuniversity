<template>
  <div class="Star-text-container">
    <svg viewBox="0 0 400 400" class="Star-svg">
      <path id="starPath"
        d="M200 50
           L 243.1 143.1
           L 342.5 143.1
           L 265.9 215.8
           L 309 309
           L 200 254.5
           L 91 309
           L 134.1 215.8
           L 57.5 143.1
           L 156.9 143.1
           Z"
        fill="none" />
      <text>
        <textPath href="#starPath" startOffset="0%">
          <a xlink:href="https://joohyewang.wixsite.com/smilenumber" target="_blank">
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
      text: 'DREAM & DREAM &'
    };
  },
  computed: {
    repeatedText() {
      // 별 모양을 가득 채우기 위해 텍스트를 충분히 반복
      const repetitions = 11;
      return this.text.repeat(repetitions);
    }
  }
}
</script>

<style scoped>
.Star-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0vh;
}

.Star-svg {
  width: 500px;
  height: 500px;
}

text {
  font-size: 10px;
  fill: green;
  font-weight: bold;
  transition: font-size 0.5s ease, fill 0.5s ease; /* 부드러운 전환 효과 추가 */
}

textPath a {
  fill: green;
  text-decoration: none;
}

textPath a:hover {
  fill: skyblue;
}

.Star-text-container:hover text {
  font-size: 20px; /* hover시 변경될 글자 크기 */
}
</style>
