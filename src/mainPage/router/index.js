import { createWebHistory, createRouter } from "vue-router";
import MainPage from '../views/MainPage.vue'
import ybusTeam from '../views/ybusTeam.vue'



const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/team",
    name: "team",
    component: ybusTeam,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;