<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
  import Head from "@/components/Head"

  export default {
    name: 'App',
    components: {
      'm-header': Head
    }
  }
</script>

<style>
  #app {

  }
</style>
