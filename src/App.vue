<template>
  <div id="app">
    <Topbar></Topbar>
    <router-view/>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
  import Bottombar from "./lib/bottombar.vue";
  import Topbar from "./lib/topbar.vue";
export default {
  name: 'app',
  components:{
    Bottombar,
    Topbar
  }

}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  margin: 61px 0;
}
</style>
