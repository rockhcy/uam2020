<template>
    <!-- 云应用列表 -->
    <div class="app">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <el-card>
            <div slot="header" class="clearfix">
                <span>云应用池</span>
<!--                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
            </div>
            <div>
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="18"><div class="grid-content bg-purple">
                        <el-dropdown size="medium" split-button type="primary">
                        添加云应用
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="$router.push('/editCloud')">手工添加云应用</el-dropdown-item>
                            <el-dropdown-item @click.native="$router.push('/hostProgram/index')">从应用主机获取</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                        <el-button @click="$router.push('/classification')">管理应用分类</el-button></div></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6"><div class="grid-content bg-purple">
                        <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                            <el-button slot="append" type="success">Go</el-button>
                        </el-input>
                    </div></el-col>
                </el-row>


            </div>
            <el-button type="text" v-for="item in linkData" :key="item">{{item}}</el-button>
            <el-table :data="data" style="width: 100%">
                <el-table-column align="center" label="#" width="50" type="index"></el-table-column>
                <el-table-column prop="name" label="" width="70">
                    <template>
                        <img style="width: 45px" src="../../assets/timg.jpg"/>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="应用名" width="180"></el-table-column>
                <el-table-column prop="ip" label="程序路径" width="350"></el-table-column>
                <el-table-column prop="publicIp" label="启动参数"></el-table-column>
                <el-table-column prop="port1" label="所在集群"></el-table-column>
                <el-table-column prop="port2" label="应用分类"></el-table-column>
                <el-table-column align="center" label="" width="200">
                    <template>
                        <el-button @click="$router.push('/editCloud')">编辑</el-button>
                        <el-button type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "APP",
        data() {
            return {
                search_key:'',
                input: '',
                name: "应用管理",
                breadData: ["应用管理"],
                linkData: ['所有应用', '科学计算', '地理测绘', '工作流', '办公软件', '编程开发', 'ERP', '内部业务', '股票证券', '图形处理'],
                data: [
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                    {
                        name: "OneNote 2016",
                        ip: "C:/Program Files/OneNote/OneNote.EXE",
                        publicIp: "",
                        port1: "VEUAM",
                        port2: "办公软件",
                    },
                ],
            };
        },
    }
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  padding: 0 15px;
  overflow-y: auto;
}
</style>