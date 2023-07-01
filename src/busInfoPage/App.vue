<template>
  <BusInfoHeader></BusInfoHeader>
  <router-view name ="body"></router-view>
</template>

<script>
import BusInfoHeader from './views/BusInfoHeader.vue'

export default {
  name: 'busInfo',
  components: {
    BusInfoHeader,
  }
}
</script>

<style>
@import "../css/default.css";
</style>
