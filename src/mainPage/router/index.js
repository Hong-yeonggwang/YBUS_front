import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    // path: "/home",
    // name: "home",
    // component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;