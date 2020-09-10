<template>
    <div class="login-container">
        <div class="login-from">
            <h2>集运后台管理系统</h2>
            <el-form ref="form" :rules="rules" :model="form" label-width="90px">
                <el-form-item label="账号" prop="name">
                    <el-input v-model="form.name" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="form.pass" type="password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import loginApi from "@/api/login"

    export default {
        name: "component_name",
        components: {},
        props: {
            "attr_name": {
                type: Object,
                required: false,
                default: () => ({})
            }
        },
        data() {
            return {
                form: {
                    name: "",
                    pass: "",
                },
                rules: {
                    name: [
                        {required: true, message: "请输入有效手机号码", trigger: "blur"},
                        {min: 3, max: 10, message: "长度6——20个字符", trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: "请输入有效密码", trigger: "blur"},
                        {min: 3, max: 20, message: "长度6——20个字符", trigger: 'blur'}
                    ]
                },

            }
        },
        watch: {
            a(newValue, oldValue) {
            },
            'b.c'(newValue, oldValue) {
            }
        },
        beforeRouteEnter(to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当钩子执行前，组件实例还没被创建
            next()
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            next()
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            next()
        },
        // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
        beforeCreate() {
        },
        // 实例创建完成后被立即调用
        created() {
            // this.'$'set(this.'$'data, "attrName", "value")
        },
        // 挂载到实例上去之后调用该钩子
        mounted() {
            // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.nextTick 替换掉 mounted
            // this.'$'nextTick(function () {
            // })
        },
        // 计算属性
        computed: {
            // 仅读取
            aDouble: function () {
                return this.a * 2
            },
            // 读取和设置
            aPlus: {
                get: function () {
                    return this.a + 1
                },
                set: function (v) {
                    this.a = v - 1
                }
            }
            // vm.aPlus // => 2
            // vm.aPlus = 3
            // vm.a // => 2
            // vm.aDouble // => 4
        },
        // 事件集合
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    console.log(valid);
                    if (valid) {
                        //调用登录接口
                        loginApi.login(this.form.name, this.form.pass).then(res => {
                            console.log(res)
                            const code = res.data.data.code;
                            if (code == 200) {
                                //获取token
                                const token = res.data.data.data.token;
                                //吧token存储到本地
                                localStorage.setItem("yy_token", token);
                                //获取用户信息
                                loginApi.getUserInfo().then(res => {
                                    const resp = res.data.data;
                                    if (resp.code == 200) {
                                        //将获取到的用户信息保存到本地
                                        localStorage.setItem("jy_info", JSON.stringify(resp.data));
                                        //跳转到首页
                                        this.$router.push({path: "/"})
                                    } else {
                                        this.$message({
                                            message: '登录失败',
                                            type: 'warning'
                                        })
                                    }
                                })
                            } else {
                                this.$message({
                                    message: '登录失败',
                                    type: 'warning'
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log("error submit")
                        return false;
                    }
                })
            }
        },
    }
</script>
<style lang="scss" scoped>
    .login-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        background: url("http://mengxuegu.com:9999/img/login.b665435f.jpg") 0 0 no-repeat;
        background-size: 100% 1200px;
    }

    .login-from {
        width: 350px;
        padding: 30px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 8px;
        margin: 320px auto;
    }

    .login-from h2 {
        text-align: center;
        font-family: 新宋体;
    }
</style>
