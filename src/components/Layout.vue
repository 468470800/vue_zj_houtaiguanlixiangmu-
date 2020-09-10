<template>
    <div>

        <AppHeader></AppHeader>
<!--        侧边栏目-->
        <AppNavBar></AppNavBar>
<!--        主题-->
        <AppMain></AppMain>

    </div>
</template>
<script>
    import AppHeader from "./AppHeader/index";
    import AppMain from "./AppMain/index";
    import AppNavBar from "./AppNavBar"
    export default {
        name: '',
        props: {},
        components: {
            AppHeader,
            AppMain,
            AppNavBar
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
    .header{
        height: 50px;
        line-height: 50px;
        position: absolute;
        right: 0;
        left: 0;
        background: #2d3a4b;
    }
    .navBar{
        width: 240px;
        position: absolute;
        left: 0;
        top: 50px;
        bottom: 0;
        background: #545c64;
    }
    .main{
        position: absolute;
        left: 240px;
        right: 0;
        top: 50px;
        bottom: 0;
    }
</style>
