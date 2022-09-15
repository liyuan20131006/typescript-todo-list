// import request from '@/utils/request'
import request from '@/axios/request'
import { getRefreshToken, setExpiresIn } from '@/utils/auth'

const CLIENT_ID = 'web'
const CLIENT_SECRET = '123456'
//const GRANT_TYPE = 'password'
const SCOPE = 'server'
// 登录获取token
export function login (data:any) {
  return request({
    // url: '/api/auth/oauth/token', // 方法1
    // url: '/auth/oauth/token', // 方法2
    url: '/v1/mobile/login',
    method: 'post',
    // params: {
    //   username: data.username,
    //   password: data.password,
    //   grant_type: GRANT_TYPE,
    //   scope: SCOPE,
    //   client_id: CLIENT_ID,
    //   client_secret: CLIENT_SECRET
    // }
    data
  })
}

// 老版本
// export function login(data) {
//   console.log(data)
//   return request({
//     // url: '/api/auth/oauth/token', // 方法1
//     url: '/auth/oauth/token', // 方法2
//     headers: {
//       isToken: false,
//       'Authorization': 'Basic ZGN5OmRjeQ=='
//     },
//     method: 'post',
//     params: {
//       // username: 'admin',
//       // password: '123456',
//       username: data.username,
//       password: data.password,
//       grant_type: 'password',
//       scope: 'server'
//     }
//   })
// }

// 刷新token
export function refToken () {
  return request({
    url: '/auth/oauth/token',
    method: 'post',
    params: {
      grant_type: 'refresh_token',
      refresh_token: getRefreshToken(),
      scope: SCOPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  })
}

export function getUser () {
  return request({
    // url: '/admin/user/info',
    url: '/getInfo',
    method: 'get'
    // headers: {
    //   isToken: false,
    //   'Authorization': 'Bearer' + getToken()
    // }
  })
}

/**
 * 获取菜单
 */
export function getUserMenu () {
  return request({
    url: '/system/menu/getRouters',
    method: 'get'
  })
}

// 老版本
// export function logout(params) {
//   return request({
//     url: '/auth/oauth/removeToken',
//     method: 'post',
//     params
//   })
// }

export function logout () {
  return request({
    // url: '/auth/token/logout',
    url: '/logout',
    method: 'post'
  })
}

export function captchaImage ():Promise<any> {
  return request({
    url: '/v1/login/captchaImage',
    method: 'get',
   // params: data
  })
}

export function validToken () {
  return request({
    url: '/v1/mobile/validToken',
    method: 'get'
  })
}

// export function isRefreshTokenExpired (timestamp:number) {
//   clearInterval(Window.interval)
//   Window.interval = setInterval(() => {
//     timestamp = timestamp - 1
//     setExpiresIn(timestamp)
//   }, 1000)
// }
