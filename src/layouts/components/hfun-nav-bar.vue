<!--
 * @Author: yeyanghui
 * @Description: 导航栏组件
 * @Date: 2022-03-04 10:29:44
 * @LastEditTime: 2022-03-04 10:52:40
 * @FilePath: /phone_template/src/layouts/components/hfun-nav-bar.vue
-->
<template>
    <van-nav-bar
        :title="$route.meta?.title" 
        :left-text="$route.meta?.returnAble ? '返回' : '' " 
        :left-arrow="$route.meta?.returnAble">
        <!-- 右上角的徽标，详细信息参见 https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#hui-biao-ti-shi -->
        <template #right v-if="$route.meta?.rightMenu">
            <van-icon :name="$route.meta?.rightMenu.icon" size="18" />
        </template>
    </van-nav-bar>
</template>