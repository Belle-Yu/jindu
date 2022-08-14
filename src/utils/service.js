// axios二次封装
import axios from "axios";
import { getToken } from '@/utils/setToken.js';
import { Message } from "element-ui";

const service = axios.create({
    baseURL: '/api', // baseURL会自动加在请求地址上---提升开发效率，不在axios请求上写一长串后端接口请求地址
    timeout: 3000, // 请求超过毫秒数，超过这个时间请求中断
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发送请求之前做些什么（获取并设置token）
    config.headers['token'] = getToken('token');// 每次请求之前携带上token，否则没有权限访问接口数据
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let { status, message } = response.data;
    if(status !== 200){
        Message({message: message || 'error', type: 'warning'});
    }
    return response;
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;