<template>
  <div class="enhanced-container">
    <RainbowMenu />

    <div class="options">
      <label><input type="checkbox" v-model="isLiveRender" /> **실시간 렌더링**</label>
      <label><input type="radio" v-model="useMathJax" :value="false" /> **KaTeX**</label>
      <label><input type="radio" v-model="useMathJax" :value="true" /> **MathJax**</label>
    </div>

    <textarea
      v-model="latexInput"
      placeholder="LaTeX 수식을 입력하세요..."
      class="latex-input"
    ></textarea>

    <button @click="compileLatex" class="compile-button">math gogogo!</button>

    <div v-html="renderedLatex" class="latex-output"></div>

    <div class="info-box">
      <h2 class="info-title">SMILE MONKEY PROGRAM</h2>
      <p class="info-text">
        컴파일 전 코드의 오류를 미리 탐지하는 AI 기반의 수학 검증 프로그램입니다.<br>
        수학적 집합과 알고리즘 기반의 사전 검토 시스템을 통해 정확성과 참거짓 판별을 수행합니다.<br>
        은혜주신 예수님께 감사드립니다. 아멘.<br>
      </p>
      
    </div>



   
    <MapVue />
  </div>
</template>

<script>
// 이 컴포넌트에서 필요한 다른 Vue 컴포넌트들을 임포트합니다.
// 경로가 프로젝트 구조에 맞는지 확인하세요.
import RainbowMenu from '@/views/RainbowMenu.vue';


import MapVue from '@/views/MapVue.vue';

// KaTeX를 이 컴포넌트 내에서 직접 사용하기 위해 임포트합니다.
// main.js에서 VueKatexPlugin을 사용하더라도, renderToString을 직접 호출하려면 필요합니다.
import katex from 'katex';
import 'katex/dist/katex.min.css'; // KaTeX CSS는 main.js에서도 로드되지만, 여기에 추가해도 무방합니다.

export default {
  name: 'LatexEditorAndRenderer', // 컴포넌트 이름을 적절히 변경하세요.
  components: {
    // 위에서 임포트한 컴포넌트들을 등록합니다.
    RainbowMenu,
  
 
    MapVue,
  },
  data() {
    return {
      latexInput: '', // 사용자가 LaTeX 수식을 입력할 텍스트 영역의 데이터
      renderedLatex: '', // 렌더링된 HTML 수식을 표시할 영역의 데이터
      isLiveRender: false, // 실시간 렌더링 활성화 여부 (체크박스)
      useMathJax: false, // MathJax 사용 여부 (라디오 버튼: false=KaTeX, true=MathJax)
    };
  },
  watch: {
    // `latexInput` 값이 변경될 때마다 실행됩니다.
    latexInput(newVal) {
      if (this.isLiveRender) {
        // '실시간 렌더링'이 켜져 있으면 즉시 렌더링합니다.
        this.renderLatex(newVal);
      }
    },
    // `isLiveRender` 체크박스 상태가 변경될 때 실행됩니다.
    isLiveRender(newVal) {
      // 실시간 렌더링이 켜지면 현재 입력된 내용을 한 번 렌더링합니다.
      if (newVal) {
        this.renderLatex(this.latexInput);
      }
    },
    // `useMathJax` 라디오 버튼 상태가 변경될 때 실행됩니다.
    useMathJax() {
      // MathJax/KaTeX 전환 시 현재 입력된 내용을 다시 렌더링합니다.
      this.renderLatex(this.latexInput);
    }
  },
  mounted() {
    // 컴포넌트가 마운트될 때, 초기 LaTeX 입력이 있다면 렌더링을 시도합니다.
    // 이는 라우터 이동 등으로 컴포넌트가 다시 나타날 때 유용합니다.
    this.renderLatex(this.latexInput);
  },
  methods: {
    /**
     * 입력된 LaTeX 문자열을 선택된 라이브러리(KaTeX 또는 MathJax)로 렌더링합니다.
     * @param {string} latexString 렌더링할 LaTeX 문자열.
     */
    async renderLatex(latexString) {
      if (!latexString) {
        this.renderedLatex = ''; // 입력이 없으면 출력 영역을 비웁니다.
        return;
      }

      try {
        if (this.useMathJax) {
          // MathJax를 사용하여 렌더링
          // MathJax는 DOM 요소를 직접 조작하므로, 임시 div를 사용하여 렌더링합니다.
          // window.MathJax는 main.js에서 전역으로 노출됩니다.
          if (!window.MathJax) {
             console.error("MathJax가 로드되지 않았습니다. main.js 설정을 확인하세요.");
             this.renderedLatex = `<span style="color: red;">오류: MathJax가 준비되지 않았습니다.</span>`;
             return;
          }

          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = latexString; // 입력된 LaTeX 문자열을 임시 div에 삽입

          // main.js에서 정의한 전역 MathJax 렌더링 함수를 호출합니다.
          // 이 함수는 비동기적으로 렌더링을 수행하므로 await으로 완료를 기다립니다.
          await this.$renderMathJax(tempDiv);

          // 렌더링된 HTML을 가져와서 `renderedLatex`에 할당합니다.
          this.renderedLatex = tempDiv.innerHTML;
          tempDiv.remove(); // 사용한 임시 div는 제거합니다.

        } else {
          // KaTeX를 사용하여 렌더링
          // katex.renderToString은 동기적으로 HTML 문자열을 반환합니다.
          // 이 컴포넌트 상단에서 `import katex from 'katex';`를 통해 직접 임포트했습니다.
          this.renderedLatex = katex.renderToString(latexString, {
            displayMode: true, // 블록 모드 렌더링 (인라인은 $..$ 또는 \(..\)로 감싸야 함)
            throwOnError: false, // 렌더링 중 오류가 발생해도 예외를 던지지 않고 오류 메시지를 표시합니다.
          });
        }
      } catch (error) {
        // 렌더링 중 발생하는 오류를 처리하고 사용자에게 메시지를 표시합니다.
        this.renderedLatex = `<span style="color: red;">LaTeX 렌더링 중 오류 발생: ${error.message}</span>`;
        console.error("LaTeX 렌더링 오류:", error);
      }
    },
    /**
     * '컴파일' 버튼 클릭 시 LaTeX를 렌더링합니다.
     * 주로 '실시간 렌더링'이 비활성화되었을 때 사용자가 수동으로 렌더링을 트리거할 수 있도록 합니다.
     */
    compileLatex() {
      this.renderLatex(this.latexInput);
    }
  }
};
</script>

<style scoped>
/* 전체 컨테이너에 대한 스타일 */
.enhanced-container {
  padding: 20px;
  max-width: 1500px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 폰트 변경 */
  background-color: #f5f8fa; /* 배경색 변경 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 옵션 선택 영역 스타일 */
.options {
  margin-bottom: 25px;
  display: flex;
  gap: 25px; /* 간격 증가 */
  align-items: center;
  justify-content: center; /* 가운데 정렬 */
  padding: 10px;
  background-color: #e0f2f7; /* 배경색 */
  border-radius: 8px;
  border: 1px solid #b3e0ff;
}

.options label {
  display: flex;
  align-items: center;
  font-size: 1.05em; /* 폰트 크기 증가 */
  color: #2c3e50;
  cursor: pointer;
  transition: color 0.2s ease;
}

.options label:hover {
  color: #007bff;
}

.options input[type="checkbox"],
.options input[type="radio"] {
  margin-right: 8px; /* 마진 증가 */
  transform: scale(1.2); /* 체크박스/라디오 버튼 크기 증가 */
}

/* LaTeX 입력 textarea 스타일 */
.latex-input {
  width: 100%;
  height: 180px; /* 높이 증가 */
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #a7d9f7; /* 테두리 색상 변경 */
  border-radius: 8px;
  font-size: 1.05em; /* 폰트 크기 증가 */
  resize: vertical;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.latex-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  outline: none;
}

/* 컴파일 버튼 스타일 */
.compile-button {
  display: block;
  width: 180px; /* 너비 증가 */
  padding: 12px 20px; /* 패딩 증가 */
  margin: 0 auto 30px auto; /* 마진 증가 */
  background-color: #999; /* 버튼 색상 변경 */
  color: white;
  border: none;
  border-radius: 8px; /* 둥근 모서리 증가 */
  cursor: pointer;
  font-size: 1.1em; /* 폰트 크기 증가 */
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.1s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.compile-button:hover {
  background-color: #464545;
  transform: translateY(-2px); /* 호버 시 약간 위로 이동 */
}

.compile-button:active {
  background-color: #444343;
  transform: translateY(0);
}

/* LaTeX 출력 영역 스타일 */
.latex-output {
  border: 1px solid #d1ecf1; /* 테두리 색상 변경 */
  padding: 20px; /* 패딩 증가 */
  min-height: 120px; /* 최소 높이 증가 */
  background-color: #e2f3f8; /* 배경색 변경 */
  border-radius: 8px;
  overflow-x: auto; /* 긴 수식 스크롤 처리 */
  font-size: 1.1em; /* 폰트 크기 증가 */
  line-height: 1.5;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* 정보 상자 스타일 */
.info-box {
  background-color: #f8f9fa; /* 배경색 변경 */
  border: 1px solid #dee2e6; /* 테두리 색상 변경 */
  border-radius: 10px;
  padding: 25px; /* 패딩 증가 */
  margin-top: 40px;
  align-items: center;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.info-title {
  color: #999; /* 색상 변경 */
  margin-bottom: 12px;
  font-size: 1.8em; /* 폰트 크기 증가 */
  font-weight: bold;
    text-align: center;
}

.info-text {
  color: #495057; /* 색상 변경 */
  line-height: 1.8; /* 줄 간격 증가 */
  margin-bottom: 20px;
  font-size: 1.05em;
    text-align: center;
}

.monkey-img {
  max-width: 120px; /* 이미지 크기 증가 */
  height: auto;
  margin-top: 15px;
  filter: drop-shadow(0 0 5px rgba(0,0,0,0.2)); /* 그림자 효과 */
}

.MapSearch-grid-container {
  margin-top: 100px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}
.Map-grid-container {
  margin-top: 80px; /* 원하는 만큼의 상단 마진 설정 */ /* 원하는 만큼의 하단 마진 설정 */
}

.options {
  display: flex;
  flex-direction: row; /* 기본은 가로 배열 */
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .options {
    flex-direction: column; /* 화면 폭이 600px 이하일 때 세로 배열 */
    align-items: flex-start;
  }
}

</style>