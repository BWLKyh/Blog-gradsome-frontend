import { request } from '/utils/request'

// 创建文章
export const addPost = (data) => {
  return request({
    method: 'POST',
    url: `/posts`,
    data,
  })
}
