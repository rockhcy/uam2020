<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <el-card class="box-card center-footer">
            <div slot="header" class="clearfix">
                <span>云应用池</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-row :gutter="20">
                <el-col :span="10"><div class="grid-content bg-purple">
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                prop="app"
                                label="">
                            <template slot-scope="scope">
                                <img style="width: 45px" src="../../assets/appgroup2.png"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="jiqun"
                                label="集合">

                        </el-table-column>
                        <el-table-column
                                prop="canshu"
                                label="应用总数">
                        </el-table-column>
                        <el-table-column
                                prop="number"
                                label="被使用">
                        </el-table-column>
                    </el-table>
                    <el-button @click="addClick">新建应用组</el-button>
                    <el-button @click="addClick" type="danger">移除应用组</el-button>
                    <el-button @click="addClick" type="primary">调整应用组</el-button>
                </div>
                </el-col>
                <el-col :span="14"><div class="grid-content bg-purple">
                    <el-table
                            :data="tableList"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                label="#"
                                width="55"
                                type="index">
                        </el-table-column>
                        <el-table-column
                                prop="app"
                                label="">
                            <template slot-scope="scope">
                                <img style="width: 45px" src="../../assets/timg.jpg"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="app1"
                                label="应用名">
                        </el-table-column>
                        <el-table-column
                                prop="canshu"
                                label="程序路径"
                        width="300px">
                        </el-table-column>
                        <el-table-column
                                prop="number"
                                label="启动参数">
                        </el-table-column>
                        <el-table-column
                                prop="jiqun"
                                label="所在集群">
                        </el-table-column>
                    </el-table>
                </div></el-col>
            </el-row>
        </el-card>
        <Popup ref="Popup"></Popup>
    </div>
</template>

<script>
    import Popup from './components/Popup';;

    export default {
        name: "AppGroup",
        components:{
            Popup,
        },
        data(){
            return{
                name: "应用管理 - 应用集合",
                breadData: [" 应用管理 ","应用集合"],
                tableData: [{
                    app: '',
                    app1: 'OFFICE',
                    canshu: 15,
                    number:8,
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'Adobe',
                    canshu: 25,
                    number:12,
                    jiqun:'Adobe',
                }
                ],
                tableList:[{
                    app: '',
                    app1: 'OneNote 2016',
                    canshu: 'C:Program Files OneNote OneNote.EXE',
                    number:'',
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'Visual Studio 2019',
                    canshu: 'C: Program Files Visual Studio 2019 vs.EXE',
                    number:'',
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'OneNote 2016',
                    canshu: 'C:Program Files OneNote OneNote.EXE',
                    number:'',
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'Visual Studio 2019',
                    canshu: 'C: Program Files Visual Studio 2019 vs.EXE',
                    number:'',
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'OneNote 2016',
                    canshu: 'C:Program Files OneNote OneNote.EXE',
                    number:'',
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'Visual Studio 2019',
                    canshu: 'C: Program Files Visual Studio 2019 vs.EXE',
                    number:'',
                    jiqun:'VEUAM',
                },{
                    app: '',
                    app1: 'OneNote 2016',
                    canshu: 'C:Program Files OneNote OneNote.EXE',
                    number:'',
                    jiqun:'VEUAM',
                }]
            }
        },
        methods:{
            addClick(){
                this.$refs.Popup.dialogVisible = true;
            },
        }
    }
</script>

<style scoped>

</style>