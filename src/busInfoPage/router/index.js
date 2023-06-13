import { createWebHistory, createRouter } from "vue-router";
import BusLine from '../views/BusLine.vue'
import BusSchedule from '../views/BusSchedule.vue'
import BusStop from '../views/BusStop.vue'
import SchoolBusStop from '../views/SchoolBusStop.vue'
import BusStopInfo from '../views/BusStopInfo.vue'


const routes = [
  {
    path: "/businfo/schoolebusstop",
    name: "SchoolBusStop",
    component: SchoolBusStop,
  },
  {
    path: "/businfo/busline",
    name: "busline",
    component: BusLine,
  },
  {
    path: "/businfo/schedule",
    name: "schedule",
    component: BusSchedule,
  },
  {
    path: "/businfo/busstop",
    name: "busstop",
    component: BusStop,
  },
  {
    path: "/businfo/busstopinfo",
    name: "BusStopInfo",
    component: BusStopInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;