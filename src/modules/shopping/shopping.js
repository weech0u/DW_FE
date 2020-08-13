import Vue from 'vue'
import Shopping from './Shopping.vue'
// import router from './router'
import axios from '../../../network/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.prototype.$axios = axios
// Vue.use(require('vue-wechat-title'))

new Vue({
    // router,
    render: h => h(Shopping)
}).$mount('#shopping')