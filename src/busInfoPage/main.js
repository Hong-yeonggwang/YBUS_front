import { createApp } from "vue";
import busInfo from "./App.vue";
import router from './router/index.js';
import "../style.css";
import axios from 'axios'
import vuetify from '../plugins/vuetify'
import { loadFonts } from '../plugins/webfontloader'

loadFonts()


const app = createApp(busInfo)

app.config.globalProperties.axios = axios;
app.config.productionTip = false
app.use(vuetify)
app.use(router).mount('#app')