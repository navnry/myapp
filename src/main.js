// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'vant';
import { Popup } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Toast } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { NoticeBar } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';

import store from "./store"

Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(NoticeBar);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Toast);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Popup);
Vue.use(Button);
Vue.use(ElementUI);
import remConfig from '../config/remConfig'
import "@/assets/css/base.css"

remConfig()
Vue.config.productionTip = false

import axios from 'axios'; //引入axios组件
axios.defaults.withCredentials = true; //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3000"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

router.beforeEach((to, from, next) => {

    //获取用户登录成功后储存的登录标志
    let getFlag = localStorage.getItem("Flag");

    //如果登录标志存在且为isLogin，即用户已登录
    if (getFlag === "isLogin") {

        //设置vuex登录状态为已登录
        store.state.isLogin = true
        next()

        //如果已登录，还想想进入登录注册界面，则定向回首页
        if (!to.meta.isLogin) {
            //iViewUi友好提示
            iView.Message.error('请先退出登录')
            next({
                path: '/home'
            })
        }

        //如果登录标志不存在，即未登录
    } else {

        //用户想进入需要登录的页面，则定向回登录界面
        if (to.meta.isLogin) {
            next({
                    path: '/login',
                })
                //iViewUi友好提示
            iView.Message.info('请先登录')
                //用户进入无需登录的界面，则跳转继续
        } else {
            next()
        }

    }

});

router.afterEach(route => {
    window.scroll(0, 0);
});