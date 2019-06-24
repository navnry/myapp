<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <m-tabbar></m-tabbar>
  </div>
</template>

<script>
  import Head from "@/components/Head"
  import Tabbar from "@/components/Tabbar"

  export default {
    name: 'App',
    components: {
      'm-header': Head,
      'm-tabbar': Tabbar,
    }
  }
</script>

<style>
  #app {

  }
</style>
