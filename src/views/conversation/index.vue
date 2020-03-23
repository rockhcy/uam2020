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
        name: "Conversation",
        data(){
            return{
                name: "会话监视",
                breadData: ["会话监视"],
            }
        },
    }
</script>

<style scoped>

</style>