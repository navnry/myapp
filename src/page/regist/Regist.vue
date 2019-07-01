<template>
  <div class="regist">
    <div class="regist-wrap">
      <div>
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div>
        <el-input placeholder="再次请输入密码" v-model="password2" show-password></el-input>
      </div>
      <div>
        <el-button type="primary" @click="registSubmit">注册</el-button>
      </div>
      <div>
        <span>我有账号？去</span>
        <router-link to="/login">登录</router-link>
      </div>
      <van-popup style="padding:1rem" v-model="showmode" v-html="tips"></van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      showmode: false,
      tips: ""
    };
  },

  mounted() {

  },
  methods: {
    registSubmit() {
      if (this.username == "" || this.password == "" || this.password2 == "") {
        this.showmode = true;
        this.tips = "请填写完整的信息";
      } else if (this.password !== this.password2) {
        this.showmode = true;
        this.tips = "两次密码不一样";
      }
    },
  }
};
</script>

<style scoped lang="less">
.el-input--suffix .el-input__inner{
  height: .8rem;
}
.regist {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/timg.jpg") center center /cover no-repeat;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  .regist-wrap {
    width: 6rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin: 0.5rem 0.2rem;
    padding: 1rem 0.4rem;
    // background: #f5f5f5;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0.1rem;

    div {
      margin-bottom: 0.2rem;

      input [type=text]{
        font-size: 0.3rem;
      }

      button {
        width: 100%;
        height: 0.8rem;
        font-size: 0.3rem;
      }
    }
  }
}
</style>
