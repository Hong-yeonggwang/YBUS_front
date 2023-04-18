import { createApp } from "vue";
import busInfo from "./App.vue";
import router from './router/index.js';
import "../style.css";
import axios from 'axios'

const app = createApp(busInfo)

app.config.globalProperties.axios = axios;
app.config.productionTip = false
app.use(router).mount('#app')