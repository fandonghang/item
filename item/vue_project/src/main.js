// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import HelloWorld from './components/HelloWorld';
import HelloWorld1 from './components/HelloWorld1';

/* 安装vue-router插件 */
Vue.use(VueRouter); // 注册路由
Vue.use(iView)
/* 定义路由页面 */
const routes = [
    // 这里 path: '/' 代表应用首页显示的内容
    { path:'/', redirect:'/one' },
    { path: '/one', component: HelloWorld },
    { path: '/two', component: HelloWorld1 }
]

const router = new VueRouter({
    // mode指定路由模式，默认'hash'，另一种可选的模式是'history'
    mode: 'history',
    routes
})

/* 创建挂载点至#app元素，将内容显示在index.html页面 */
let app = new Vue({
    el:'#app',
    router,
    render:h=> h (App)
})
