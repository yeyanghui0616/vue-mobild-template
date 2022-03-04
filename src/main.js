/*
 * @Author: yeyanghui
 * @Description: 
 * @Date: 2022-03-04 09:19:11
 * @LastEditTime: 2022-03-04 09:46:00
 * @FilePath: /phone_template/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import svgIcon from './icons/index.vue'

// 引入vantUI（全量引入）
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).component('svg-icon', svgIcon).use(store).use(router).use(Vant).mount('#app')
