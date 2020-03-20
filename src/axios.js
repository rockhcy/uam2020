import axios from 'axios';
import store from './store'
import router from './router';
import { Message } from 'element-ui';
const Axios = axios.create({
    // timeout: 5000,
    baseURL: store.state.ip,
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
});
// 请求前置拦截器
Axios.interceptors.request.use(
    (config) => {
        return config;
    },
    error => Promise.reject(error)
);

// 响应前置拦截器
Axios.interceptors.response.use(
    (response) => {


    }, error => {
       //
    }
);

export default Axios;
