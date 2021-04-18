import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
Vue.config.productionTip = false;
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import {postRequest} from './axios/index'
import {getRequest} from './axios/index'

Vue.use(ElementUI);
Vue.use(VueRouter);
// Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
