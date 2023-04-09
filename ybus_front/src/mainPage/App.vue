<template>
  <MainPage></MainPage>
  <MainFooter></MainFooter>
  <router-view></router-view>
</template>

<script>
import MainPage from '../components/MainPage.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    MainFooter
  }
}
</script>

<style>
@import "../css/default.css";
#app {
}
</style>
