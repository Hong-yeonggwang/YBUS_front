import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index.js';
import "../style.css";
import axios from 'axios'

const app = createApp(App)

app.config.productionTip = false
app. config.globalProperties.axios = axios;
app.use(router).mount('#app')