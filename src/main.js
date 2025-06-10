import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import axios from './axios';
import store from './store';

// KaTeX 관련
import VueKatexPlugin from 'vue3-katex';
import 'katex/dist/katex.min.css';

// --- MathJax 관련 라이브러리 임포트 시작 ---
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';
import { browserAdaptor } from 'mathjax-full/js/adaptors/browserAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';

const MathJaxConfig = {
    tex: {
        packages: AllPackages,
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
    },
    chtml: {
        fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        ignoreHtmlClass: 'tex2jax_ignore',
        processHtmlClass: 'tex2jax_process',
    },
};

async function initializeMathJax() {
    const adaptor = browserAdaptor();
    RegisterHTMLHandler(adaptor);

    const tex = new TeX(MathJaxConfig.tex);
    const chtml = new CHTML(MathJaxConfig.chtml);

    const html = mathjax.document(document, {
        InputJax: tex,
        OutputJax: chtml,
        options: MathJaxConfig.options,
    });

    window.MathJax = {
        typesetPromise: (elements) => {
            return new Promise((resolve, reject) => {
                try {
                    // ✅ 수정: elements가 배열인지 확인하고, 단일 요소인 경우 배열로 변환
                    const elementsToProcess = Array.isArray(elements) ? elements : [elements];

                    // ✅ forEach 호출 전 유효성 검사 추가
                    if (elementsToProcess && elementsToProcess.length > 0) {
                        elementsToProcess.forEach(el => {
                            if (el instanceof Element) { // DOM 요소인지 추가 확인
                                html.render(el);
                            } else {
                                console.warn("Skipping non-DOM element in MathJax typesetPromise:", el);
                            }
                        });
                    } else {
                        console.warn("MathJax typesetPromise received no elements to process or invalid elements.");
                    }
                    resolve();
                } catch (e) {
                    console.error("MathJax render error:", e);
                    reject(e);
                }
            });
        }
    };
}

initializeMathJax();
// --- MathJax 관련 라이브러리 임포트 끝 ---

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, min } from '@vee-validate/rules';

defineRule('required', required);
defineRule('min', min);

configure({
    generateMessage: ctx => `${ctx.field} is not valid.`,
    validateOnInput: true,
});

const app = createApp(App);

app.config.globalProperties.$axios = axios;

// --- MathJax 렌더링 함수 전역 등록 ---
app.config.globalProperties.$renderMathJax = (element = document.body) => {
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        // ✅ 수정: typesetPromise에 항상 배열 형태로 전달되도록 변경
        const elementsToRender = Array.isArray(element) ? element : [element];
        window.MathJax.typesetPromise(elementsToRender).catch((err) =>
            console.error("MathJax rendering error:", err)
        );
    } else {
        console.warn("MathJax is not loaded or not initialized yet.");
    }
};
// --- MathJax 렌더링 함수 전역 등록 끝 ---

app.use(i18n);
app.use(router);
app.use(store);
app.use(VueKatexPlugin);

app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');

// 전역 믹스인
app.mixin({
    mounted() {
        document.title = "SMILENUMBER MOTORS(TEST)";
        this.$nextTick(() => {
            if (this.$renderMathJax) {
                // ✅ 수정: this.$el은 단일 DOM 요소이므로, 배열로 감싸서 전달
                this.$renderMathJax(this.$el);
            }
        });
    },
    updated() {
        this.$nextTick(() => {
            if (this.$renderMathJax) {
                // ✅ 수정: this.$el은 단일 DOM 요소이므로, 배열로 감싸서 전달
                this.$renderMathJax(this.$el);
            }
        });
    }
});