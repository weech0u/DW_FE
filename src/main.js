import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'


Vue.use(ElementUI)
Vue.config.productionTip = false


// load axios
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.baseURL='http://localhost:8000'

Vue.prototype.$axios = axios


new Vue({
  render: h => h(App),
}).$mount('#app')
