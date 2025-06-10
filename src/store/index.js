import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    loggedInUser: null,
  },
  mutations: {
    SET_LOGGED_IN_USER(state, user) {
      state.loggedInUser = user;
    },
  },
  actions: {
    async loginUser({ commit }, credentials) {
      try {
        console.log('Sending login request with credentials:', credentials); // 요청 데이터 로그
        const response = await axios.post('http://localhost:3000/login', credentials);
        console.log('Login response received:', response.data); // 응답 데이터 로그
        commit('SET_LOGGED_IN_USER', response.data.user);
      } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message); // 에러 로그
        throw new Error('Invalid email or password');
      }
    },
    async logoutUser({ commit }) {
      commit('SET_LOGGED_IN_USER', null);
    },
  },
});
