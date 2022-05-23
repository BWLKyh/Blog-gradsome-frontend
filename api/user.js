import { request } from '/utils/request'
// 登录
export const signIn = (data) => {
  return request({
    method: 'POST',
    url: '/auth/local',
    data,
  })
}
// 注册
export const signUp = (data) => {
  return request({
    method: 'POST',
    url: '/auth/local/register',
    data,
  })
}
// // 获取用户
// export const getUser = () => {
//   return request({
//     method: 'GET',
//     url: '/api/user',
//   })
// }
// // 更新用户
// export const updateUser = (data) => {
//   return request({
//     method: 'PUT',
//     url: '/api/user',
//     data,
//   })
// }
