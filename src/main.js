import Vue from "vue";
import App from "./App.vue";
// import '../plugins/element.js' //按需引入elementUI
// 全局引入elementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
// import axios from "axios";
import router from "./router";
import service from './utils/service.js';

Vue.use(ElementUI);
// Vue.prototype.axios = axios; //挂载在原型上，可以在全局使用
Vue.prototype.service = service;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 全局引入elementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
