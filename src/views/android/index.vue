<template>
        <div class="center">
            <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
            <div class="center-footer">
                暂缺页面
            </div>
        </div>
</template>

<script>
    export default {
        name: "Android",
        data(){
            return{
                name: "Android 应用",
                breadData: ["Android 应用"],
            }
        },
        created() {

        },
        methods:{

        },
    }
</script>

<style scoped>

</style>
