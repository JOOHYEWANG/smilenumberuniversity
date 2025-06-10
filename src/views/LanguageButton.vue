<template>
  <div class="language-selector">
    <button @click="changeLanguage('en')" class="language-button">
      <img src="@/assets/en.png" alt="English" class="language-icon"> English
    </button>
    <button @click="changeLanguage('ko')" class="language-button">
      <img src="@/assets/ko.png" alt="Korean" class="language-icon"> Korean
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Vue I18n 사용 가정
    }
  }
}
</script>

<style scoped>
.language-selector {
  display: flex;
  gap: 0px;
  justify-content: center;
  margin-top: 20px;
}

.language-button {
  background-color: #f0f0f0;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.language-button:hover {
  background-color: #e0e0e0;
}

.language-icon {
  width: 34px;
  height: auto;
  margin-right: 8px;
}
</style>
