import axios from 'axios'
import qs from 'qs'

/* 
一个能发送ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
*/

//设置请求超时时间
const instance = axios.create({
  timeout:20000,
})

//请求拦截器
instance.interceptors.request.use((config)=>{
  let {method,data} = config
  if (method.toUpperCase() === "POST" && typeof data === "object") {
    config.data = qs.stringify(data)
  }

  return config
})

// 响应拦截器
instance.interceptors.response.use(
  (response)=>{
    return response.data
  },
  (error)=>{
    console.log(error.message)
    return new Promise(()=>{}) //中断promise链
  }
)

export default instance