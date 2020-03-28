<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <el-card class="box-card center-footer">
            <div slot="header" class="clearfix">
                <span>应用主机集群-应用程序</span>
<!--                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
            </div>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="12" :lg="6"><div class="grid-content bg-purple">
                    <ul class="AppHostList">
                        <li>
                            <img src="../../assets/0002.png" width="64px" height="64px">
                            <p>00000001</p>
                        </li>
                        <li>
                            <img src="../../assets/0002.png" width="64px" height="64px">
                            <p>00000001</p>
                        </li>
                        <li>
                            <img src="../../assets/0002.png" width="64px" height="64px">
                            <p>00000001</p>
                        </li>
                    </ul>
                </div></el-col>
                <el-col  :xs="24" :sm="24" :md="12" :lg="18"><div class="grid-content bg-purple">
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="24" :md="12" :lg="10">
                            <div class="grid-content bg-purple">
                            <img src="../../assets/0002.png" width="32px">
                            <label>00000001</label>
                        </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="14"><div class="grid-content bg-purple">
                            <el-button-group class="group-btn">
                            <el-button type="success">发布到云应用池</el-button>
                            <el-button type="warning">取消发布</el-button>
                            <el-button type="danger">重新获取应用程序列表</el-button>
                            <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                                <el-button slot="append" type="success">Go</el-button>
                            </el-input>
                            </el-button-group>
                        </div></el-col>
                    </el-row>
                    <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column label="#" width="55" type="index">
                    </el-table-column>
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                    <el-table-column prop="app" label="应用名" width="180">
                    </el-table-column>
                    <el-table-column prop="app1" label="程序路径" width="360">
                    </el-table-column>
                    <el-table-column prop="canshu" label="启动参数" width="180">
                    </el-table-column>
                    <el-table-column prop="number" label="所在集群" width="180">
                    </el-table-column>
                        <el-table-column prop="stare" label="状态" width="180">
                            <template slot-scope="scope">
                                <el-button v-if="scope.row.stare==='已发布'" type="warning">{{ scope.row.stare }}</el-button>
                                <el-button v-if="scope.row.stare==='未发布'" type="primary">{{ scope.row.stare }}</el-button>
                            </template>
                        </el-table-column>
                </el-table>
                </div>
                </el-col>
            </el-row>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "HostProgram",
        data(){
            return{
                name: "应用管理 - 主机应用程序",
                breadData: ["主机应用程序"],
                search_key:'',
                tableData: [{
                    index:'1',
                    app: 'OneNote 2016',
                    app1: 'C:Program Files OneNote OneNote.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'已发布'
                },{
                    index:'1',
                    app: 'Visual Studio 2019',
                    app1: 'C:Program Files Visual Studio 2019 vs.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'未发布'
                },{
                    index:'1',
                    app: 'OneNote 2016',
                    app1: 'C:Program Files OneNote OneNote.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'已发布'
                },{
                    index:'1',
                    app: 'Visual Studio 2019',
                    app1: 'C:Program Files Visual Studio 2019 vs.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'未发布'
                },{
                    index:'1',
                    app: 'OneNote 2016',
                    app1: 'C:Program Files OneNote OneNote.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'已发布'
                },{
                    index:'1',
                    app: 'Visual Studio 2019',
                    app1: 'C:Program Files Visual Studio 2019 vs.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'未发布'
                },{
                    index:'1',
                    app: 'OneNote 2016',
                    app1: 'C:Program Files OneNote OneNote.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'已发布'
                },{
                    index:'1',
                    app: 'Visual Studio 2019',
                    app1: 'C:Program Files Visual Studio 2019 vs.EXE',
                    canshu: '',
                    number:'VEUAM',
                    stare:'未发布'
                }
                ]
            }
        }
    }
</script>
<style>
    .center{
        height: calc(100% - 60px);
        padding: 20px 25px 40px 25px;
    }
    .center-footer {
        margin-bottom: 40px;
    }
    .AppHostList{
        margin-left: 0;
        margin-right: 0;
        list-style: none;
    }
    .AppHostList li{
        text-align: center;
        margin-top: 20px;
    }
    .AppHostList li p{
        color: #337ab7;
        margin: 0 0 10px;
        font-size: 13px;
    }
</style>
<style scoped>
    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 13px;
        color: #676a6c;
        margin-right: 12px;
        margin-left: 12px;
    }
    img{
        vertical-align: middle;
    }
    .input-with-select{
        width: 171px;
    }
</style>