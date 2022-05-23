import axios from 'axios'
// 创建请求对象
const request = axios.create({
  // baseURL: 'http://localhost:1337',
  baseURL: process.env.GRIDSOME_API_URL,
})
request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('blog-token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  function (error) {
    // 处理发出前失败的请求
    return Promise.reject(error)
  }
)
export { request }
