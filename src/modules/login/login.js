import Vue from 'vue'
import Login from './Login.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// load axios
axios.defaults.baseURL='http://127.0.0.1:8000/'
Vue.prototype.$axios = axios

new Vue({
    render: h => h(Login)
}).$mount('#login')