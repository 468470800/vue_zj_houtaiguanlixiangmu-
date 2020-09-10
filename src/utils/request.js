import axios from 'axios'

// axios.get("http://localhost:8989/test.json").then(res=>{
//         console.log(res)
// });
//创建axios实例里面在axios实例可以配置自定义一些请求设施
axios.create({//设置公共路径
        bseURL:process.env.VUE_APP_BASE_URL,
        timeout:5000//设置请求时间
});
// axios.get("test.json").then(res=>{
//         console.log(res)
// });

// request.interceptors.request.use(function(config){
//         console.log("请求拦截");
//         return config;
// },function(error){
//         return Promise.reject(error)
// });
// request.interceptors.response.use(function(response){
//         console.log("响应拦截");
//         return response;
// },function(error){
//         return Promise.reject(error)
// })
export default axios;