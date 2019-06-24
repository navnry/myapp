<template>
  <div class="login">
    <el-calendar v-model="calendar" class="rili">
    </el-calendar>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        calendar: new Date()
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .el-calendar-table td {
    height: .5rem;
  }

  .rili {

  }

  .el-calendar__body {
    width: 100%;
    height: 3rem;
  }
</style>
