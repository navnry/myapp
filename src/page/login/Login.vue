<template>
  <div class="login">
    <div class="login-wrap">
      <div>
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="username" clearable></el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="password" show-password></el-input>
      </div>
      <div>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <div class="login-tip">
        <span>还没有账号？去</span>
        <router-link to="/regist">注册</router-link>
      </div>
      <van-popup style="padding:.2rem .3rem" v-model="showmode" v-html="tips"></van-popup>
    </div>
  </div>
</template>

<script>
  import store from "@/store";

  export default {
    name: "Login",
    data() {
      return {
        username: "admin",
        password: "123456",
        showmode: false,
        tips: "",
        isLogin: store.state.isLogin
      };
    },
    methods: {
      login() {
        var _this = this;
        if (_this.username == "") {
          _this.showmode = true;
          _this.tips = "请输入用户名";
        } else if (_this.password == "") {
          _this.showmode = true;
          _this.tips = "请输入密码";
        } else {
          this.$reqs
            .post("/users/login", {
              username: this.username,
              password: this.password
            })
            .then(function (res) {
              let userInfoTxt = JSON.parse(res.config.data)
              console.log(userInfoTxt);
              if (res.data.errUser) {
                _this.showmode = true;
                _this.tips = "用户名不存在";
              } else if (res.data.errPwd) {
                _this.showmode = true;
                _this.tips = "密码不正确";
              } else if (res.data.success) {
                _this.showmode = true;
                _this.tips = "登录成功";
                console.log(_this);
                //设置Vuex登录标志为true
                _this.$store.dispatch("userLogin", true);
                console.log(localStorage);
                localStorage.setItem("Flag", "Login");
                localStorage.setItem("userName", userInfoTxt.username);
                //登录成功后跳转到指定页面
                setTimeout(() => {
                  _this.$router.push("/messge")
                }, 2000)
              }
            })
            .catch(function (err) {
            });
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .login {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/timg.jpg") center center /cover no-repeat;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-wrap {
      width: 6rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      margin: 0.5rem 0.2rem;
      padding: 1rem 0.4rem .5rem .4rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 0.1rem;

      div {
        margin-bottom: 0.2rem;

        input {
          font-size: 0.3rem;
          height: .8rem;
        }
        button {
          width: 100%;
          height: 0.8rem;
          font-size: 0.3rem;
        }
      }
      .login-tip {
        color: #ffffff;
        font-size: .28rem;
        margin: .5rem 0 0 0;
        a {
          color: #e5e5e5;
        }
      }
    }
  }
</style>
