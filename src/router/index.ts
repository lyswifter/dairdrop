import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "../components/Home.vue";
import Detail from "../components/Detail.vue";
import Coinhere from "../components/Coinhere.vue";
import Auth from "../components/Auth.vue";

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
        path: '/coinhere/:id',
        name: "coinhere",
        component: Coinhere,
        props: true,
    },
    {
        path: '/auth',
        name: "auth",
        component: Auth,
        props: true,
    }
]

// 创建路由管理器 模式和路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// router.beforeEach((to, from, next) => {
//     let token = localStorage.getItem("WalletAcount");
//     let isAuthenticated = true;
//     if (token == undefined || token == null) {
//       isAuthenticated = false;
//     }
  
//     if (to.name !== 'home' && !isAuthenticated) {
//       next({ name: 'home' })
//     } else {
//       next()
//     }
//   })

export default router