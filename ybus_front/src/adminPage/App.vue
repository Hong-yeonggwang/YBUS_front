<template>
  <admin-main></admin-main>
  <admin-footer></admin-footer>
  <router-view></router-view>
</template>

<script>
import AdminMain from '../components/AdminMain.vue'
import AdminFooter from '../components/AdminFooter.vue'

export default {
  name: 'App',
  components: {
    AdminMain,
    AdminFooter
  }
}
</script>

<style>
@import "../css/AdminDefault.css";
#app {
}
</style>
