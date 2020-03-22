<template>
    <div class="center">
        <div class="center-top">
            <el-row :gutter="24">
                <el-col :span="4"><div class="grid-content bg-purple">
                    <p class="p">统计数字</p>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><p class="p">统计数字</p></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><p class="p">统计数字</p></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple"><p class="p">统计图表</p></div></el-col>
            </el-row>
        </div>
        <div class="center-main">
            <el-row :gutter="24">
                <el-col :span="18"><div class="grid-content bg-purple">
                    <div style="padding-left: 10px">部署大地图</div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"><p class="p">进阶趋势</p></div></el-col>
            </el-row>
        </div>
        <div class="center-footer">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>云应用使用统计 TOP10</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                label="#"
                                width="180"
                                type="index">
                        </el-table-column>
                        <el-table-column
                                prop="app"
                                label="应用">
                        </el-table-column>
                        <el-table-column
                                prop="app1"
                                label="程序">
                        </el-table-column>
                        <el-table-column
                                prop="canshu"
                                label="参数"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="number"
                                label="软件使用技术"
                                width="180">
                        </el-table-column>
                    </el-table>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return{
                tableData: [{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },{
                    index:'1',
                    app: 'Photoshop CC 2018',
                    app1: '{CloudApp} Program Files Adobe Adobe Photoshop CC 2018',
                    canshu: '-workdir=z:tmp',
                    number:115,
                },
                   ]
            }
    }
    }
</script>
<style lang="scss">
    .el-row {
        margin-bottom: 20px;
        height: 100%;
        .el-col,.el-col-4{
            height: 100%;
        }
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        text-align: left;
        width: 100%;
        height: 100%;
        background: #ffffff;
        margin: 0;
        font-size: 30px;
        color: #676a6c;
        .p{
            text-align: left;
            padding-left: 10px;
            margin-top: 64px;
            border-top: 1px solid #e7eaec;
            line-height: 65px !important;
        }
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>
<style>
    .center{
        height: calc(100% - 60px);
        padding: 20px 25px 40px 25px;
    }
    .center-top{
        height: 130px;
        margin-bottom: 20px;
    }
    .center-main{
        height: 130px;
        margin-bottom: 20px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
    }
    .center-footer{
        margin-bottom: 40px;

    }
</style>