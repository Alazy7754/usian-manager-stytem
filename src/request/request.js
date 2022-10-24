import axios from 'axios'

const serve = axios.create({
  baseURL: '',
  timeout: 3000
})

serve.interceptors.request.use(config => {
  return config
}, function (error) {
  // eslint-disable-next-line new-cap
  return new Promise.reject(error)
})

serve.interceptors.response.use(resolve => {
  return resolve
}, function (error) {
  // eslint-disable-next-line new-cap
  return new Promise.reject(error)
})

// 统一使用data传递参数
const parameter = (options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || options.params
    delete options.data
  }
  return serve(options)
}

export default parameter
