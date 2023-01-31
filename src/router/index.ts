import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "../components/Home.vue";
import Detail from "../components/Detail.vue";
import Scroll from "../components/Scroll.vue";
import ZKasino from "../components/ZKasino.vue";

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
    },
    {
        path: '/scroll',
        name: "scroll",
        component: Scroll,
        props: true,
    },
    {
        path: '/zkasino',
        name: "zkasino",
        component: ZKasino,
        props: true,
    }
]

// 创建路由管理器 模式和路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router