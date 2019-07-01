import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex的store
export const store = new Vuex.Store({
  // 设置属性
  state: {
    isLogin: false,
    username: ""
  },

  // 获取属性的状态
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    userInfo(username) {
      state.username = ""
    }
  },

  // 应用mutations
  actions: {
    userLogin({commit}, flag) {
      commit("userStatus", flag)
    },
  }
})
export default store
