/*
 * @Author: yeyanghui
 * @Description: 登录接口API
 * @Date: 2022-03-04 10:43:20
 * @LastEditTime: 2022-03-04 10:43:32
 * @FilePath: /phone_template/src/api/login.js
 */
import request from '@/utils/request';
import qs from 'qs';
 
export function xxx(data) {
    return request({
        url: '/xxx',
        method: 'post',
        data: JSON.stringify(data),
    });
}

// export function xxx(data) {
// 	return request({
// 		url: '/xxx?'+qs.stringify(data),
// 		method: 'get',
// 	})
// }