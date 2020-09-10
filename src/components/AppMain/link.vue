<template>
    <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item class="line" :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view/>
    </div>
</template>
<script>
    export default {
        name: '',
        props: {},
        components: {

        },
        data() {
            return {};
        },
        computed: {},
        watch: {},
        methods: {},
        created() {

        },
        mounted() {

        },
        beforeDestroy() {

        }
    };
</script>
<style>


    .el-breadcrumb {
        border-radius: 5px;
        padding: 20px ;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2)
    }
    .line{
        border-left: 4px solid red;
        padding-left: 10px;
    }
</style>
