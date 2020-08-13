import Vue from 'vue'
import Details from './Details.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)

// load axios
axios.defaults.baseURL='http://127.0.0.1:8000/'
Vue.prototype.$axios = axios

// load video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

new Vue({
    render: h => h(Details)
}).$mount('#details')