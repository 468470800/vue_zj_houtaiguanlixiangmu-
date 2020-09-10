import request from "../utils/request";

export default {
    login(name,pass){
        return request({
            url:"/user/login",
            method:"post",
            data:{
                username:name,
                userpass:pass,
            }
        })
    },
    getUserInfo(){
        return request({
            url:'/user/info'
        })
    }
}