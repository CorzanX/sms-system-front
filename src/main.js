import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store/index'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Antd)
axios.defaults.baseURL = 'http://localhost:8088'
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
