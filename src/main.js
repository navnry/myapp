// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {Button} from 'vant';
import {Popup} from 'vant';
import {DropdownMenu, DropdownItem} from 'vant';
import {Toast} from 'vant';
import {Tabbar, TabbarItem} from 'vant';
import {Swipe, SwipeItem} from 'vant';
import {IndexBar, IndexAnchor} from 'vant';
import { NoticeBar } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';

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
Vue.prototype.$axios = Axios;
import remConfig from '../config/remConfig'
import "@/assets/css/base.css"

remConfig()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
