import axios from 'axios';
import store from './store'
import router from './router';
import { Message } from 'element-ui';
const Axios = axios.create({
    baseURL: process.env.BASE_URL,
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
        // if(response.data.status){
        //     return response;
        // }
    }, error => {
            // if(error.response.status===400) {
            //     Message.warning({message: error.response.data});
            // }else if(error.response.status===401){
            //     Message.warning({message: '请求的数据中没有身份验证信息'});
            // }else if(error.response.status===403){
            //     Message.warning({message: '权限不足'});
            // }else if(error.response.status===404){
            //     Message.warning({message: 'URI不存在'});
            // }else if(error.response.status===405){
            //     Message.warning({message: '不支持请求的HTTP方法'});
            // }else if(error.response.status===500){
            //     Message.warning({message: '服务端错误'});
            // }
    }
);

export default Axios;
