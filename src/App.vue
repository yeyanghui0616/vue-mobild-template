<!--
 * @Author: yeyanghui
 * @Description: 
 * @Date: 2022-03-04 09:19:11
 * @LastEditTime: 2022-03-04 10:06:39
 * @FilePath: /phone_template/src/App.vue
-->
<template>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</template>