<template>
  <BusInfoHeader></BusInfoHeader>
  <router-view></router-view>
</template>

<script>
import BusInfoHeader from '../components/BusInfoHeader.vue'

export default {
  name: 'busInfo',
  components: {
    BusInfoHeader
  }
}
</script>

<style>
@import "../css/default.css";
</style>
