<template>
  <div class="music">
    <div class="music-tab">
      <ul>
        <li v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}"><span>{{title}}</span>
        </li>
      </ul>
    </div>
    <div class="music-content">
      <div class="recommond" v-show="cur==0">
        <m-recommond></m-recommond>
      </div>
      <div class="rank" v-show="cur==1">
        <m-rank></m-rank>
      </div>
      <div class="search" v-show="cur==2">
        <m-search></m-search>
      </div>
    </div>
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
        tabTitle: ['推荐', '排行榜', '搜索'],
        cur: 0,
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

    .music-tab {
      height: .8rem;
      background: #ffffff;

      ul {
        display: flex;


        li {
          width: 33.33%;
          text-align: center;

          span {
            display: block;
            font-size: .32rem;
            line-height: .72rem;
            padding: .02rem 0;
            margin: 0 .3rem;
          }
        }

        li.active {
          span {
            color: #00aaff;
            border-bottom: .04rem solid #00aaff;
          }
        }

      }
    }
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
