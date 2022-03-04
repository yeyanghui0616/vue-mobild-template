/*
 * @Author: yeyanghui
 * @Description:
 * @Date: 2022-02-23 18:01:55
 * @LastEditTime: 2022-03-04 10:35:50
 * @FilePath: /phone_template/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";

import Layout from "../layouts/index.vue";

export const routes = [
    {
        path: "/",
        redirect: "/home",
        component: Layout,
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home.vue"),
                meta:{title:'首页',returnAble:true,keepAlive:true}
            },
            {
                path: "/shequ",
                name: "shequ",
                component: () => import("@/views/shequ.vue"),
                meta:{title:'社区',returnAble:true,keepAlive:true}
            },
            {
                path: "/luntan",
                name: "luntan",
                component: () => import("@/views/luntan.vue"),
                meta:{title:'论坛',returnAble:true,keepAlive:true}
            },
            {
                path: "/huihua",
                name: "huihua",
                component: () => import("@/views/huihua.vue"),
                meta:{title:'会话',returnAble:true,keepAlive:true}
            },
            {
                path: "/mine",
                name: "mine",
                component: () => import("@/views/mine.vue"),
                meta:{title:'我的',returnAble:true,keepAlive:true}
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login.vue"),
        meta:{title:'登录',keepAlive:true}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
