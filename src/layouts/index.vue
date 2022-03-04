<!--
 * @Author: yeyanghui
 * @Description: layout布局组件
 * @Date: 2022-03-04 09:26:30
 * @LastEditTime: 2022-03-04 10:59:43
 * @FilePath: /phone_template/src/layouts/index.vue
-->
<template>
    <hfunNavBar/>
    <div class="layoutRouterView">
        <router-view></router-view>
    </div>
    <hfunTabBar/>
</template>
<script setup>
    import hfunNavBar from "./components/hfun-nav-bar.vue";
    import hfunTabBar from "./components/hfun-tab-bar.vue";
</script>
<style scoped>
.layoutRouterView{
    height:calc(100vh - 96px);
    overflow-y:scroll
}
</style>