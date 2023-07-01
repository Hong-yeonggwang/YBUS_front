import { createWebHistory, createRouter } from "vue-router";
import BusLine from '../views/BusLine.vue'
import BusSchedule from '../views/BusSchedule.vue'
import BusStop from '../views/BusStop.vue'
import SchoolBusStop from '../views/SchoolBusStop.vue'
import BusStopInfo from '../views/BusStopInfo.vue'
import timeButton from '../views/timeButton.vue'
import lineButton from '../views/lineButton.vue'
import schoolTimeButton from '../views/schoolTimeButton.vue'
import SchoolLineButton from '../views/SchoolLineButton.vue'
import NotfoundPage from '../../components/NotfoundPage.vue'
import SchoolBusSchedule from '../views/SchoolBusSchedule.vue'


const routes = [
  {
    path: "/businfo/schoolebusstop",
    name: "SchoolBusStop",
    components: {
      timeButton:schoolTimeButton,
      body:SchoolBusStop,
    }
  },
  {
    path: "/businfo/busline/:busSeq",
    name: "busline",
    components: {
      lineButton:lineButton,
      timeButton:timeButton,
      body:BusLine,
    }
  },
  {
    path: "/businfo/schedule/:busSeq",
    name: "schedule",
    components: {
      lineButton:lineButton,
      timeButton:timeButton,
      body:BusSchedule,
    }
  },
  {
    path: "/businfo/schedule/schoolBus",
    name: "schoolBusSchedule",
    components: {
      timeButton:SchoolLineButton,
      body:SchoolBusSchedule,
    }
  },
  {
    path: "/businfo/schedule",
    name: "busSchedulePage",
    components: {
      lineButton:lineButton,
      timeButton:timeButton,
      body:BusSchedule,
    }
  },
  {
    path: "/businfo/busstop/:busSeq",
    name: "busstop",
    components: {
      lineButton:lineButton,
      timeButton:timeButton,
      body:BusStop,
    }
  },
  {
    path: "/businfo/busstopinfo/:busSeq",
    name: "BusStopInfo",
    components: {
      lineButton:lineButton,
      timeButton:timeButton,
      body:BusStopInfo,
    }
  },
  // 허용하지 않는 페이지를 보여줌.
  {
    path: '/:pathMatch(.*)*',
    redirect: "/notFound",
  },
  {
    path: "/notFound",
    name: "notFound",
    component: NotfoundPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;