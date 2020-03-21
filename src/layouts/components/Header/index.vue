<template>
    <div class="top">
        <el-row style="height: 100%">
            <el-col :span="24" style="height: 100%">
                <div class="grid-left">
                    UAM
                </div>
                <div class="grid-content">
                    <a>和信云应用管理平台 2020.5</a>
                    <i class="icon icon-icon-chakanxq" @click="xinxiClick"></i>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: 'Header',
        methods:{
            //xinxi点击事件
            xinxiClick(){

            }
        }
    }
</script>

<style>
    .top {
        width: 100%;
        height: 63px;
    }
    .grid-content {
        height: 100%;
        line-height: 63px;
        text-align: center;
        color: #fff;
        float: right;
        margin-right: 20px;
    }
    .grid-content .icon {
        font-size: 24px;
        color: #888888;
    }
   .grid-content a{
       color: #888888;
       margin-right: 10px;
   }
    .grid-left{
        width: 200px;
        height: 100%;
        line-height: 63px;
        font-size: 30px;
        text-align: center;
        color: #ffffff;
        display: inline-block;
        background-color: #2f4050;
        /*border-right: 1px solid rgba(255,255,255,0.4);*/
        /*border-bottom: 1px solid rgba(255,255,255,0.4);*/
    }
</style>

