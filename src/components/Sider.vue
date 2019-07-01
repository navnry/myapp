<template>
  <div class="sider" @click="closeSider">
    <div class="sider-wrap" @click.stop>
      <div class="sider-head">
        <img src="" alt="" @click="toLogin">
        <span>{{username}}</span>
      </div>
      <div class="side-content">

      </div>
      <el-button type="text" @click="open">退出登录</el-button>
    </div>
  </div>
</template>

<script>
  // import BMap from 'BMap'
  import {location} from "@/assets/js/LocationUtil";
  import store from "../store";

  export default {
    data() {
      return {
        username: "未登录",
        activeNames: ['1']
      }
    },
    mounted() {
      this.username = localStorage.userName
    },
    methods: {
      edit() {
        localStorage.removeItem("Flag")
        setTimeout(() => {
          this.$router.push("/login")
        }, 2000)
      },
      toLogin() {
        this.$router.replace('/login');
      },
      closeSider: function () {
        this.$parent.closeSider();
      },
      open() {
        this.$confirm('确认退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .sider {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all .3s linear;

    .sider-wrap {
      width: 60%;
      height: 100%;
      float: left;
      background: #ffffff;
      padding: .5rem .2rem;
      position: relative;
      left: -60%;
      transition: left .2s linear;

      .sider-head {
        text-align: center;
        padding: .4rem 0;
        border-bottom: 1px solid #cccccc;

        img {
          display: block;
          width: 1rem;
          height: 1rem;
          margin: .5rem auto .15rem auto;
          border-radius: 50%;
          background: #cccccc;
        }

        span {
          font-size: .3rem;
          color: #333333;
        }
      }

      .sider-footer {
        position: absolute;
        left: .2rem;
        right: 0;
        /*text-align: right;*/
        bottom: .5rem;
        right: .3rem;
        padding: .3rem 0;
        border-bottom: 1px solid #cccccc;

        span {
          font-size: .32rem;
          color: #333333;
        }
      }
    }
  }

  .sider.open {
    opacity: 1;
    visibility: visible;
    transition: all .3s linear;

    .sider-wrap {
      left: 0;
      transition: left .2s linear;
    }
  }
</style>
