<template>
  <MainPage></MainPage>
  <MainFooter></MainFooter>
</template>

<script>
import MainPage from './views/MainPage.vue'
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
