import './assets/style.css'
import 'material-icons/iconfont/material-icons.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
  icons:{
    iconFont:'fa'||'md',
  }
})
const app = createApp(App)

app.use(router)

app.use(vuetify).mount('#app')