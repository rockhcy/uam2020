import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './style/icon.scss';
import axios from './axios';
import echarts from 'echarts';
import china from './china';
import md5 from 'js-md5';
import Components from './components/global';
import * as tools from './libs/tools';
echarts.registerMap('china', china);
Vue.config.productionTip = false;
Vue.use(ElementUI);
// 通过use方法加载axios插件
Vue.prototype.$http = axios;
Vue.use(Components);  // 引入全局 组件
Vue.prototype.$echarts = echarts;
Vue.prototype.$md5 = md5;

/**
 * @description 全局方法库
 */
Vue.prototype.$tools = tools;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
