import { request } from '/utils/request'
// 获取标签列表
export const addTags = (params) => {
  return request({
    method: 'POST',
    url: '/tags',
    params,
  })
}
