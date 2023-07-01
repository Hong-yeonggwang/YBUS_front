<template>
  <announcementHeader></announcementHeader>
  <router-view></router-view>
</template>

<script>
import announcementHeader from './views/announcementHeader.vue';

export default {
  name: 'App',
  components: {
    announcementHeader,
  }
}
</script>

<style>
@import "../css/default.css";
</style>
