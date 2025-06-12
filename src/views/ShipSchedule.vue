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
      placeholder="LaTeX 수식 (인라인/블록)을 입력하세요..."
      class="latex-input"
    ></textarea>

    <button @click="compileLatex" class="compile-button">수식 컴파일</button>

    <div v-html="renderedLatex" class="latex-output"></div>

    ---

    <div class="document-section">
      <h2 class="section-title">LaTeX 문서 편집기</h2>
      <textarea
        v-model="documentLatexInput"
        placeholder="LaTeX 문서 내용을 여기에 작성하세요 (예: \documentclass{article}\section*{제목}\n안녕하세요. $E=mc^2$ 입니다.)..."
        class="latex-document-editor"
      ></textarea>

      <button @click="compileDocumentLatex" class="document-compile-button">
        LaTeX 문서 컴파일
      </button>

      <div v-html="renderedDocument" class="latex-document-output"></div>
    </div>

   
    <MapVue />
  </div>
</template>

<script>
import RainbowMenu from '@/views/RainbowMenu.vue';

import MapVue from '@/views/MapVue.vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default {
  name: 'LatexEditorAndRenderer',
  components: {
    RainbowMenu,
  
    MapVue,
  },
  data() {
    return {
      latexInput: '',
      renderedLatex: '',
      isLiveRender: false,
      useMathJax: false,
      documentLatexInput: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{physics}

\\title{SMILE NUMBER PROGRAM 문서 예시}
\\author{당신의 이름}
\\date{\\today}

\\begin{document}
\\maketitle

\\section*{소개}
이것은 SMILE NUMBER PROGRAM의 LaTeX 문서 편집기 테스트입니다.

\\subsection*{수학 수식 예시}
다음은 인라인 수식입니다: $E=mc^2$.
다음은 블록 수식입니다:
$$ \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} $$

$\\$
물리 패키지 예시 (MathJax 선택 시): $\\va{F} = m \\va{a}$

\\subsection*{추가 텍스트}
이 편집기는 LaTeX 구문을 사용하여 전문적인 문서를 생성할 수 있도록 도와줍니다.

\\begin{align*}
  A &= \\pi r^2 \\\\
  V &= \\frac{4}{3} \\pi r^3
\\end{align*}

\\end{document}
`,
      renderedDocument: '',
    };
  },
  watch: {
    latexInput(newVal) {
      if (this.isLiveRender) {
        this.renderLatex(newVal);
      }
    },
    isLiveRender(newVal) {
      if (newVal) {
        this.renderLatex(this.latexInput);
      }
    },
    useMathJax() {
      this.renderLatex(this.latexInput);
      this.renderLatexDocument(this.documentLatexInput);
    },
    documentLatexInput() {
      // 실시간 렌더링 확장 가능
    },
  },
  mounted() {
    this.renderLatex(this.latexInput);
    this.renderLatexDocument(this.documentLatexInput);
  },
  methods: {
    async renderLatex(latexString) {
      if (!latexString) {
        this.renderedLatex = '';
        return;
      }
      try {
        if (this.useMathJax) {
          if (!window.MathJax) {
            this.renderedLatex = `<span style="color: red;">오류: MathJax가 준비되지 않았습니다.</span>`;
            return;
          }
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = latexString;
          await this.$renderMathJax(tempDiv);
          this.renderedLatex = tempDiv.innerHTML;
          tempDiv.remove();
        } else {
          this.renderedLatex = katex.renderToString(latexString, {
            displayMode: true,
            throwOnError: false,
          });
        }
      } catch (error) {
        this.renderedLatex = `<span style="color: red;">LaTeX 수식 렌더링 중 오류 발생: ${error.message}</span>`;
        console.error("LaTeX 수식 렌더링 오류:", error);
      }
    },

    compileLatex() {
      this.renderLatex(this.latexInput);
    },

    compileDocumentLatex() {
      this.renderLatexDocument(this.documentLatexInput);
    },

    async renderLatexDocument(documentString) {
      if (!documentString) {
        this.renderedDocument = '';
        return;
      }

      try {
        const lines = documentString.split('\n');
        let html = '';
        let isInMathBlock = false;
        let mathBuffer = [];

        for (const line of lines) {
          if (line.trim() === '$$') {
            if (!isInMathBlock) {
              isInMathBlock = true;
              mathBuffer = [];
            } else {
              const mathCode = mathBuffer.join('\n');
              html += `<pre><code class="math-display">${mathCode}</code></pre>`;
              isInMathBlock = false;
            }
          } else if (isInMathBlock) {
            mathBuffer.push(line);
          } else {
            html += `${line}<br>`;
          }
        }

        if (isInMathBlock && mathBuffer.length > 0) {
          const mathCode = mathBuffer.join('\n');
          html += `<pre><code class="math-display">${mathCode}</code></pre>`;
        }

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        if (this.useMathJax) {
          if (!window.MathJax) {
            this.renderedDocument = `<span style="color: red;">MathJax가 준비되지 않았습니다.</span>`;
            return;
          }
          await this.$renderMathJax(tempDiv);
        } else {
          const blocks = tempDiv.querySelectorAll('code.math-display');
          blocks.forEach(block => {
            try {
              const tex = block.textContent;
              const rendered = katex.renderToString(tex, {
                displayMode: true,
                throwOnError: false,
              });
              block.parentElement.outerHTML = rendered;
            } catch (err) {
              block.parentElement.outerHTML = `<div style="color: red;">렌더링 실패: ${err.message}</div>`;
            }
          });
        }

        this.renderedDocument = tempDiv.innerHTML;

      } catch (error) {
        this.renderedDocument = `<span style="color: red;">문서 렌더링 중 오류: ${error.message}</span>`;
        console.error('문서 렌더링 오류:', error);
      }
    },
  }
};
</script>

<style scoped>
/* 그대로 유지 */
</style>


<style scoped>
.enhanced-container {
  padding: 20px;
  max-width: 1500px; /* 800px → 1200px */
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f8fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.options {
  margin-bottom: 25px;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #e0f2f7;
  border-radius: 8px;
  border: 1px solid #b3e0ff;
}
.options label {
  display: flex;
  align-items: center;
  font-size: 1.05em;
  color: #2c3e50;
  cursor: pointer;
  transition: color 0.2s ease;
}
.options label:hover {
  color: #007bff;
}
.options input[type="checkbox"],
.options input[type="radio"] {
  margin-right: 8px;
  transform: scale(1.2);
}
.latex-input {
  width: 100%;
  height: 180px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #a7d9f7;
  border-radius: 8px;
  font-size: 1.05em;
  resize: vertical;
  background-color: #ffffff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
}
.latex-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  outline: none;
}
.compile-button {
  display: block;
  width: 180px;
  padding: 12px 20px;
  margin: 0 auto 30px auto;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.1s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.compile-button:hover {
  background-color: #646363;
  transform: translateY(-2px);
}
.compile-button:active {
  background-color: #535252;
  transform: translateY(0);
}
.latex-output {
  border: 1px solid #d1ecf1;
  padding: 20px;
  min-height: 120px;
  background-color: #e2f3f8;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 1.1em;
  line-height: 1.5;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}
.document-section {
  margin-top: 40px;
  padding: 25px;
  background-color: #f0f8ff;
  border-radius: 10px;
  border: 1px solid #cceeff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.section-title {
  color: #999;
  margin-bottom: 20px;
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;
}
.latex-document-editor {
  width: 100%;
  height: 400px;
  padding: 25mm;
  margin-bottom: 25px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  line-height: 1.6;
  resize: vertical;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  white-space: pre-wrap;
  word-wrap: break-word;
}
.latex-document-editor:focus {
  border-color: #999;
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.2);
  outline: none;
}
.document-compile-button {
  display: block;
  width: 220px;
  padding: 14px 25px;
  margin: 0 auto 30px auto;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.1s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
}
.document-compile-button:hover {
  background-color: #333232;
  transform: translateY(-3px);
}
.document-compile-button:active {
  background-color: #999;
  transform: translateY(0);
}
.latex-document-output {
  min-height: 250px;
  padding: 25mm;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  overflow-x: auto;
  line-height: 1.6;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: left;
  font-size: 1.1em;
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
