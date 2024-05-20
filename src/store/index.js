import { createStore } from 'vuex';
import axios from 'axios';
import Cookies from 'js-cookie';

const store = createStore({
  state: {
    isAuthenticated: false,
    error: null,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        // http://127.0.0.1:8000
        const response = await axios.post('https://5af7-154-178-232-135.ngrok-free.app/api/login', payload);
        if (response.status === 200) {
          // Assuming the server returns the token in response.data.token
          const token = response.data.data.accessToken;

          Cookies.set('token', token, { expires: 7 }); // Set token in cookies with a 7-day expiration
          commit('setAuthenticated', true);
          commit('clearError');
          return false;
        } else {
          commit('setError', 'Login failed');
          return true;
        }
      } catch (error) {
        commit('setError', 'Login failed');
        return true;
      }
    },
    async logout({ commit }) {
      try {
        Cookies.remove('token'); // Remove the token from cookies
        //http://127.0.0.1:8000
        await axios.post('https://5af7-154-178-232-135.ngrok-free.app/api/logout');
        commit('setAuthenticated', false);
        commit('clearError');
      } catch (error) {
        commit('setError', 'Logout failed');
      }
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    error: state => state.error,
  },
});

export default store;
