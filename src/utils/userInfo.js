/*
 * @Author: yeyanghui
 * @Description: 用户信息工具类
 * @Date: 2022-02-07 18:32:02
 * @LastEditTime: 2022-03-04 10:41:49
 * @FilePath: /phone_template/src/utils/userInfo.js
 */

const USER_INFO = 'userinfo'

// 存储用户信息
function setUserInfo(data){
    sessionStorage.setItem(USER_INFO,JSON.stringify(data))
}

// 拿到用户token
function getUserToken(){
    return JSON.parse(sessionStorage.getItem(USER_INFO))?.data.token
}

// 判断是否登陆 true 已登录  false 未登录
function isLogin(){
    return !!sessionStorage.getItem(USER_INFO)
}

// 删除用户信息
function removeUserInfo(){
    return sessionStorage.removeItem(USER_INFO)
}

export {
    setUserInfo,
    removeUserInfo,
    isLogin,
    getUserToken
}