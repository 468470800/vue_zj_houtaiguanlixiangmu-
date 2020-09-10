<template>
        <div class="main">
                <AppLink></AppLink>
                <router-view></router-view>
        </div>
</template>
<script>
        import AppLink from "./link"
    export default {
        name: '',
        props: {},
        components: {
                AppLink
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
        .main {
                padding: 10px;
        }
</style>
