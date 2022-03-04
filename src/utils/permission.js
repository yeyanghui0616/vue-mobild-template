/*
 * @Author: yeyanghui
 * @Description: 
 * @Date: 2022-02-23 18:01:55
 * @LastEditTime: 2022-03-04 10:36:51
 * @FilePath: /phone_template/src/utils/permission.js
 */
import router from '@/router'
const whiteList = ['/login'] // 白名单列表

router.beforeEach((to, from, next) => {
    const hasToken = true

    if (hasToken) {
        if (to.path === '/login') {
            // 如果要去登陆页面，就放行
            next({ path: '/' })
        } else {
            next()
            // 判断用户有没有要去的页面的权限
        }
    } else {
        //  没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 如果在白名单里,就放行=
            next()
        } else {
            // 如果不在白名单里,就重定向到登录页面
            next('/login')
        }
    }
})

router.afterEach(() => {
    
})
