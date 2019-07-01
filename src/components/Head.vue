<template>
  <div class="head">
    <div class="main">
      <div class="normal-manu">
        <i class="iconfont iconcaidan" @click="openSider"></i>
      </div>
      <div class="default-menu">
        <i class="iconfont iconjiantou-xia" @click="show = !show"></i>
      </div>
    </div>
    <Sider :class="{open:isOpen}"></Sider>
    <transition name="el-fade-in-linear">
      <div v-show="show" class="square transition-box">
        <div class="square-wrap">
          <div @click="showModol">
            <span>发表动态</span>
          </div>
          <div>
            <span>扫一扫</span>
          </div>
          <div>
            <span>添加朋友</span>
          </div>
          <div>
            <span>帮助</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import Sider from "@/components/Sider"
  import {Toast} from 'vant';

  export default {
    name: "Head",
    components: {
      Sider
    },
    data() {
      return {
        isOpen: false,
        isOver: false,
        show: false
      }
    },
    methods: {
      openSider() {
        this.isOpen = true;
        this.isOver = true;
        console.log(document.getElementsByTagName("body"));
        document.getElementsByTagName("body")[0].className="fixed";
      },
      closeSider() {
        this.isOpen = false
        this.isOver = false
        document.getElementsByTagName("body")[0].className="";
      },
      showModol() {
        Toast('暂未开发，敬请期待')
      }
    }
  }
</script>

<style scoped lang="less">


  .square {
    width: 3rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #333333;
    position: absolute;
    right: .1rem;
    top: 1.2rem;
    border-radius: .1rem;
    padding: .2rem;

    .square-wrap {
      position: relative;

      div {
        height: .8rem;
        line-height: .8rem;

        span {
          font-size: .26rem;
          color: #ffffff;
        }
      }


    }

    .square-wrap:after {
      content: '';
      display: block;
      width: 1px;
      border-top: .1rem solid transparent;
      border-right: .1rem solid transparent;
      border-bottom: .1rem solid #333333;
      border-left: .1rem solid transparent;
      position: absolute;
      right: 0;
      top: -.4rem;
    }
  }

  .iconfont {
    font-size: .44rem;
  }

  .head {
    width: 100%;
    height: 1rem;
    /*background-image: linear-gradient(90deg, #0af, #0085ff);*/
    background: #333333;
    position: fixed;
    top: 0;
    z-index: 9;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    /*border-bottom: 1px solid #dddddd;*/

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
