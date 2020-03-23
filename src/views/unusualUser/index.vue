<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <el-card class="box-card center-footer">
            <div slot="header" class="clearfix">
                <span>异常用户处理</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-row :gutter="20">
                <el-col :span="18"><div class="grid-content bg-purple">
                    <el-button type="danger">解除用户锁定</el-button>
                </div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                    <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                        <el-button slot="append" type="success">Go</el-button>
                    </el-input>
                </div>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="id"
                        prop="id"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="user"
                        label="用户">
                </el-table-column>
                <el-table-column
                        prop="group"
                        label="隶属组织">
                </el-table-column>
                <el-table-column
                        prop="stare1"
                        label="状态">
                    <template slot-scope="scope">
                        <el-button  type="danger">{{ scope.row.stare1 }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="demo"
                        label="原因"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="data"
                        label="被锁定时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="stare"
                        label=" ">
                    <template slot-scope="scope">
                        <el-button type="danger">{{ scope.row.stare }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "UnusualUser",
        data(){
            return{
                name: "用户管理 - 异常用户处理",
                breadData: ["异常用户处理"],
                search_key:'',
                tableData: [{
                    id:'hmy',
                    user: '茂',
                    group: '创新研究院',
                    demo: '密码错误超限',
                    data:'2020-03-10',
                    stare:'解除',
                    stare1:"禁用",
                },{
                    id:'aa',
                    user: '啦啦啦',
                    group: '创新研究院',
                    demo: '违规操作',
                    data:'2020-02-30',
                    stare:'解除',
                    stare1:"禁用",
                },
                    {
                        id:'hmy',
                        user: '茂',
                        group: '创新研究院',
                        demo: '密码错误超限',
                        data:'2020-03-10',
                        stare:'解除',
                        stare1:"禁用",
                    },{
                        id:'aa',
                        user: '啦啦啦',
                        group: '创新研究院',
                        demo: '违规操作',
                        data:'2020-02-30',
                        stare:'解除',
                        stare1:"禁用",
                    }
                ]
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