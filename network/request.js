import axios from 'axios'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.baseURL='http://localhost:8000'

export default axios