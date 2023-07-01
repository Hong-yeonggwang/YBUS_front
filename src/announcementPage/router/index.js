import { createWebHistory, createRouter } from "vue-router";
import anoContent from '../views/anoContent.vue'
import anoView from '../views/anoView.vue'



const routes = [
  {
    path: "/announcement",
    name:"announcement",
    component:anoContent
  },
  {
    path: "/announcement/view/:noticeSeq",
    name:"view",
    component:anoView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;