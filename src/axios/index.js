import axios from 'axios';
import store from '../store'
import router from "../router";
import {Message} from "element-ui";
// 添加一个请求拦截器
axios.interceptors.request.use(config => {
        config.headers.languagetype = 'CN'; // 举例，加上一个公共头部
        if (store.getters.getToken){
            config.headers['Authorization'] = store.getters.getToken;
            console.log(config.headers['Authorization']);
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
//添加一个响应拦截器
axios.interceptors.response.use(response => {
    //在这里对返回的数据进行处理
    let res = response.data;
    if (res.msg){
        Message.success({message: res.msg})
    }else{
        Message.error({message: res.msg})
        return Promise.reject(res.msg)
    }
    return res;
}, error => {
    console.log( error);
    //未授权
    if(error.response.data) {
        error.message = error.response.msg
    }
    if(error.response.code === 401){
        store.commit('REMOVE_INFO')
        router.push("/login");
        error.message = "请重新登录"
    }
    if(error.response.code === 403){
        error.message = "权限不足，无法访问"
    }
    return Promise.reject(error)
});


let base = '';
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
};

export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
};