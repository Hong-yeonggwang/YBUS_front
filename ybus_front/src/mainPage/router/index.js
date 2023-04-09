import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/Home.vue'


const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;