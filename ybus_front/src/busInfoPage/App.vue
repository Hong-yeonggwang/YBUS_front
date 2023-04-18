<template>
  <BusInfoHeader></BusInfoHeader>
  <BusStop></BusStop>
  <BusSchedule></BusSchedule>
  <BusLine></BusLine>
  <SchoolBusStop></SchoolBusStop>
  <BusStopInfo></BusStopInfo>
</template>

<script>
import BusInfoHeader from '../components/BusInfoHeader.vue'
import BusLine from '../components/BusLine.vue'
import BusSchedule from '../components/BusSchedule.vue'
import BusStop from '../components/BusStop.vue'
import SchoolBusStop from '../components/SchoolBusStop.vue'
import BusStopInfo from '../components/BusStopInfo.vue'

export default {
  name: 'busInfo',
  components: {
    BusInfoHeader,
    BusLine,
    BusSchedule,
    BusStop,
    SchoolBusStop,
    BusStopInfo
  }
}
</script>

<style>
@import "../css/default.css";
</style>
