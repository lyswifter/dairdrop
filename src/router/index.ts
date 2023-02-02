import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "../components/Home.vue";
import Detail from "../components/Detail.vue";

const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/detail/:id',
        name: "detail",
        component: Detail,
        props: true,
    }
]

// 创建路由管理器 模式和路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router