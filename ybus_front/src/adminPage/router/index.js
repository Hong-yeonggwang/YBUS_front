import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/Home.vue'


const routes = [
  {
    path: "/admin",
    name: "admin",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;