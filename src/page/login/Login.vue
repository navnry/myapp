<template>
  <div class="login">
    <div class="login-wrap">
      <div>
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div>
        <el-button type="primary">登录</el-button>
      </div>
      <div>
        <span>还没有账号？去</span><router-link to="/regist">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.login {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #00aaff, #0094ff);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-wrap {
    width: 6rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin: 0.5rem 0.2rem;
    padding: 1rem 0.4rem;
    background: #ffffff;
    border-radius: 0.1rem;

    div {
      margin-bottom: 0.2rem;

      input {
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
