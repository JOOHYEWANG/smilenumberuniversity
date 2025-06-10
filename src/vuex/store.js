import { createStore } from 'vuex';

const store = createStore({
  state: {
    messages: [
      { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
      { name: 'Jane Smith', email: 'jane@example.com', message: 'Hi, nice to meet you!' },
    ],
  },
  mutations: {
    ADD_MESSAGE(state, message) {
      state.messages.push(message);
      console.log('Message added:', state.messages); // 상태 변경 확인용 로그
    },
  },
  actions: {
    addMessage({ commit }, message) {
      commit('ADD_MESSAGE', message);
    },
  },
  getters: {
    allMessages: state => state.messages,
  },
});

export default store;
