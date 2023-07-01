<template>
  <BoardHeader></BoardHeader>
  <router-view name="body"></router-view>
</template>

<script>
import BoardHeader from './views/BoardHeader.vue';

export default {
  name: 'App',
  components: {
    BoardHeader,
  }
}
</script>

<style>
@import "../css/default.css";
</style>
