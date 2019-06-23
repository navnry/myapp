<template>
  <div class="head">
    <div class="main">
      <div class="normal-manu">
        <i class="iconfont iconcaidan" @click="openSider"></i>
      </div>
      <div class="default-menu">
        <i class="iconfont iconjiantou-xia"></i>
      </div>
    </div>
    <Sider :class="{open:isOpen}"></Sider>
  </div>
</template>

<script>

  import Sider from "@/components/Sider"

  export default {
    name: "Head",
    components: {
      Sider
    },
    data() {
      return {
        isOpen: false,
        isOver: false,
      }
    },
    methods: {
      openSider: function () {
        this.isOpen = true;
        this.isOver = true

      },
      closeSider: function () {
        this.isOpen = false
        this.isOver = false
      }
    }
  }
</script>

<style scoped lang="less">
  .iconfont {
    font-size: .44rem;
  }

  .head {
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    position: fixed;
    top: 0;

    .main {
      width: 100%;
      height: 100%;
      padding: .1rem .2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        color: #ffffff;
        line-height: .8rem;
      }
    }
  }
</style>
