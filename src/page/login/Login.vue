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
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <div>
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
      username: "",
      password: "",
      showmode: false,
      tips: "",
      isLogin: store.state.isLogin
    };
  },
  methods: {
    login() {
      console.log(this.$store.state.isLogin);
      
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
          .then(function(res) {
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

              //设置Vuex登录标志为true，默认userLogin为false
              _this.$store.dispatch("userLogin", true);
           
              //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
              //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
              localStorage.setItem("Flag", "isLogin");
              //iViewUi的友好提示
              this.$Message.success(data.data.message);
              //登录成功后跳转到指定页面
              this.$router.push("/home");
            }
          })
          .catch(function(err) {});
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
