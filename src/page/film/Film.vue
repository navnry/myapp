<template>
  <div class="film">

  </div>
</template>

<script>
  export default {
    name: "Film",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .film {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: fixed;
    background: #ffffff;
    top: 0;
    left: 0;
    padding: 1rem 0;
    transition: left .2s linear;
  }
</style>
