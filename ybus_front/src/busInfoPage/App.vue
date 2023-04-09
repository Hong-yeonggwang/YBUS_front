<template>
  <BusInfoHeader></BusInfoHeader>
  <BusStopLine></BusStopLine>
  <router-view></router-view>
</template>

<script>
import BusInfoHeader from '../components/BusInfoHeader.vue'
import BusStopLine from '../components/BusStopLine.vue'

export default {
  name: 'busInfo',
  components: {
    BusInfoHeader,
    BusStopLine
  }
}
</script>

<style>
@import "../css/default.css";
</style>
