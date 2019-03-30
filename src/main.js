import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from "./router";
// 引入公共样式
import './assets/base.scss';


Vue.config.productionTip = false;

//安装axios
import axios from "axios";
Vue.prototype.$http = axios;

// 引入组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')