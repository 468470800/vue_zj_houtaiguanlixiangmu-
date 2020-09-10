<template>
    <div class="header">
        <div class="login">
            <router-link class="link" :to="{path :'/'}">
                <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt="">
                <span class="commpany">集运会员管理系统</span>

                <div class="info">
                    <el-dropdown @command="handle">
                      <span class="el-dropdown-link">
                        张三<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-s-fold" command="checkout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </router-link>
        </div>
        <div class="menu"></div>
    </div>
</template>
<script>
    export default {
        name: '',
        props: {},
        components: {},
        data() {
            return {
                name:""
            };
        },
        computed: {},
        watch: {},
        methods: {
            handle(command){
               switch(command){
                   case"changePass" :
                       this.changePass();
                       break;
                   case"checkout" :
                       this.checkout();
                       break;
               }
            },
            changePass(){
              console.log("修改密码")
            },
            checkout(){
                console.log("退出登录")

            },
        },
        created() {
            const info = JSON.parse(localStorage.getItem(""));
            this.name = info.name !== ""?info.name:"";
            console.log(info.name)
        },
        mounted() {

        },
        beforeDestroy() {

        }
    };
</script>
<style lang='scss' scoped>
    /*内层盒子*/
    .login {
        line-height: 50px;
    }

    /*图片*/
    .header .login img {
        height: 35px;
        width: 35px;
        margin: 0 10px 0 32px;
        vertical-align: middle;
    }

    /*最大盒子*/
    .header .login .link {
        color: #ffffff;
        text-decoration: none;
    }

    .info {
        float: right;
        padding-right: 40px;
    }

    .info .el-dropdown-link{
        color: #ffffff;
        font-weight: bold;
    }
</style>
