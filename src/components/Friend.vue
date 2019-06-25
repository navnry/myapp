<template>
  <div class="friend">
    <van-notice-bar
      text="该页面无效"
      left-icon="warning-o"
      mode="closeable"/>
    <div class="person-wrap">
      <div class="person-item">
        <b class="red"><i class="el-icon-user"></i></b>
        <span>新的朋友</span>
      </div>
      <div class="person-item">
        <b class="blue"> <i class="el-icon-money"></i></b>
        <span>群聊</span>
      </div>
      <div class="person-item">
        <b class="yellow"><i class="el-icon-search"></i></b>
        <span>搜索</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Friend",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .person-wrap {
    margin: .2rem 0;

    .person-item {
      display: flex;
      align-items: center;
      height: 1rem;
      line-height: 1rem;
      background: #ffffff;
      padding: 0 .2rem;

      b.red {
        background: #ff0000;
      }

      b.blue {
        background: #00aaff;
      }

      b.yellow {
        background: blueviolet;
      }

      b {
        display: block;
        width: .6rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        background: #00aaff;
        margin-right: .1rem;
        border-radius: .05rem;

        i {

          font-size: .3rem;
          color: #ffffff;
        }
      }


      span {
        display: block;
        flex: 1;
        margin-left: .1rem;
        font-size: .32rem;
        color: #333333;
        padding-left: .2rem;
        border-bottom: solid #eeeeee 1px;
      }


    }
  }
</style>
