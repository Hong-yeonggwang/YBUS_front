<template>
  <MainPage></MainPage>
  <MainFooter></MainFooter>
  <router-view></router-view>
</template>

<script>
import MainPage from './views/MainPage.vue'
import MainFooter from'../components/MainFooter.vue'

export default {
  name: 'mainPage',
  components: {
    MainPage,
    MainFooter,
  }
}
</script>

<style>
@import "../css/default.css";
</style>
