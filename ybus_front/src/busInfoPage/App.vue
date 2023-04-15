<template>
  <BusInfoHeader></BusInfoHeader>
  <BusSchedule></BusSchedule>
</template>

<script>
import BusInfoHeader from '../components/BusInfoHeader.vue'
// import BusStopLine from '../components/BusStopLine.vue'
import BusSchedule from '../components/BusSchedule.vue'

export default {
  name: 'busInfo',
  components: {
    BusInfoHeader,
    // BusStopLine,
    BusSchedule
  }
}
</script>

<style>
@import "../css/default.css";
</style>
