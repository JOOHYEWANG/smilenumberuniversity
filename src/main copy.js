import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import axios from './axios';

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(i18n);
app.use(router);

app.mount('#app');

// mounted 훅을 이용하여 브라우저 창 제목 변경
app.mixin({
  mounted() {
    document.title = "SMILENUMBER MOTORS(TEST), 좋은 창업 파트너, 동료를 구하고 있는 중입니다. 언제나 연락 주세요^^* HAHA!, 웃는숫자자동차는 사랑 입니다. 함께 찐하게 사랑해볼 동료를 구하고 있는 중입니다. "; // 원하는 제목으로 변경
  }
});
