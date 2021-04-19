import Vue from 'vue';
import Router from 'vue-router';
import index from '../views/index'
import Login from "../views/Login";
Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
const router = new Router({
    // 指定路由选中时的样式类名
    // linkActiveClass: 'active',
    // hashbang: true, // 将路径格式化为#!开头
    // history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
/**
 * @desc 全局监听路由变化
 */
// index.beforeEach((to, from, next) => {
//     store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//     next()
// })
// 5.导出路由
export default router