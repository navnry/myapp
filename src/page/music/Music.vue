<template>
  <div class="music">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane stretch="a" label="推荐" name="recommend">
        <m-recommond></m-recommond>
      </el-tab-pane>
      <el-tab-pane stretch="a" label="排行榜" name="rank">
        <m-rank></m-rank>
      </el-tab-pane>
      <el-tab-pane stretch="a" label="搜索" name="search">
        <m-search></m-search>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Recommond from "@/page/music/Recommond"
  import Rank from "@/page/music/Rank"
  import Search from "@/page/music/Search"

  export default {
    name: "Music",
    components: {
      "m-recommond": Recommond,
      "m-rank": Rank,
      "m-search": Search
    },
    data() {
      return {
        activeName: 'recommend'
      }
    },
    methods: {
      handleClick(tab, event) {

      }
    }
  }
</script>

<style scoped lang="less">
  .music {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: fixed;
    background: #ffffff;
    top: 0;
    left: 0;
    transition: left .2s linear;
    z-index: 1000;
  }

  .el-tabs__header {
    margin: 0;
  }

  .el-tabs__nav-wrap
  .el-tabs__nav-scroll
  .el-tabs__nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
</style>
