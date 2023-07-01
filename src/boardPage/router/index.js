import { createWebHistory, createRouter } from "vue-router";
import BoardContent from '../views/BoardContent.vue'
import BoardView from '../views/BoardView.vue'
import BoardWrite from '../views/BoardWrite.vue'
import cancelButton from '../views/cancelButton.vue'
import writeButton from '../views/writeButton.vue'



const routes = [
  {
    path: "/board",
    components: {
      header: writeButton,  // 헤더 컴포넌트
      body: BoardContent
    }
  },
  {
    path: "/board/view/:seq",
    name: "view",
    components: {
      header: cancelButton,  // 헤더 컴포넌트
      body: BoardWrite
    }
  },
  {
    path: "/board/write",
    name: "write",
    components: {
      header: cancelButton,  // 헤더 컴포넌트
      body: BoardView
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;