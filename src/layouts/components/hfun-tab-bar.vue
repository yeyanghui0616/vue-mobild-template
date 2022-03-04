<!--
 * @Author: yeyanghui
 * @Description: tabbar底部菜单栏组件
 * @Date: 2022-03-04 10:29:54
 * @LastEditTime: 2022-03-04 10:34:36
 * @FilePath: /phone_template/src/layouts/components/hfun-tab-bar.vue
-->
<template>
    <van-tabbar v-model="mCurrentActiveTab">
        <van-tabbar-item 
            v-for="(item,index) in mTabBarArr.children" 
            :key="index" 
            :name="item.path"
            replace
            :to="item.path"
            icon="home-o"
        >{{item.meta.title}}</van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';
    import { routes } from '@/router'
    import Layout from '@/layouts/index.vue'
    const $route = useRoute()
    // 拿到router.js中定义的底部导航菜单们
    const mTabBarArr = routes.filter(item=> item.path == '/' && item.component == Layout )[0]
    // 定义当前激活的tab
    const mCurrentActiveTab = ref($route.path);
</script>