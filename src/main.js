import './assets/style.css';
import 'material-icons/iconfont/material-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js'; // Import your Vuex store
import axios from 'axios';

import router from './router';
// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import store from './store/store';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconFont: 'fa' || 'md',
  },
});

// Create the Vue app
const app = createApp(App);

// Setup router and Vuetify
app.use(store);
app.use(vuetify);

app.use(router);

// Set initial language and direction
const savedLanguage = localStorage.getItem('language') || 'en';
document.documentElement.setAttribute('dir', savedLanguage === 'ar' ? 'rtl' : 'ltr');

// Add a global property for language
app.config.globalProperties.$currentLanguage = savedLanguage;

app.mount('#app');
