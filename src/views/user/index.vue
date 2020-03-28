<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <el-card class="box-card center-footer">
            <div slot="header" class="clearfix">
                <span>用户管理</span>
<!--                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
            </div>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="12" :lg="18" :xl="18"><div class="grid-content bg-purple">
                    <el-dropdown size="medium" split-button type="primary">
                        添加用户
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="$router.push('/user/add')">创建新用户</el-dropdown-item>
                            <el-dropdown-item @click.native="addClick">批量创建用户</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button-group class="group-btn">
                    <el-button>导入用户</el-button>
                    <el-button>导入用户表</el-button>
                    <el-button  type="danger" @click="open">删除用户</el-button>
                    <el-button type="warning">锁定用户</el-button>
                    <el-button>解锁用户表</el-button>
                    <el-button type="warning">移动用户</el-button>
                    </el-button-group>
                </div></el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple">
                    <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                        <el-button slot="append" type="success">Go</el-button>
                    </el-input>
                </div></el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        type="selection">
                </el-table-column>
                <el-table-column
                        label="id"
                        prop="id">
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
                        prop="stare"
                        label="状态">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.stare==='禁用'"  type="danger">{{ scope.row.stare }}</el-button>
                        <el-button v-if="scope.row.stare==='正常'"  type="primary">{{ scope.row.stare }}</el-button>
                        <el-button v-if="scope.row.stare==='锁定'" type="warning">{{ scope.row.stare }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <Popup ref="Popup"></Popup>
    </div>
</template>

<script>
    import Popup from './components/Popup';
    export default {
        name: 'User',
        components:{
            Popup,
        },
        data() {
            return {
                name: " 用户管理",
                breadData: [" 用户管理"],
                search_key:'',
                tableData: [{
                    id:'hmy',
                    user: '茂',
                    group: '创新研究院',
                    stare:'禁用',
                },{
                    id:'aa',
                    user: '啦啦啦',
                    group: '创新研究院',
                    stare:'正常',
                }, {
                        id:'hmy',
                        user: '⚪',
                        group: '创新研究院',
                        stare:'锁定',
                    },{
                        id:'cm',
                        user: '陈明',
                        group: '创新研究院',
                        stare:'正常',
                    }
                ]
            }
        },
        created() {

        },
        methods: {
            addClick(){
                this.$refs.Popup.dialogVisible = true;
                console.log(11);
            },
            open() {
                this.$confirm('是否确定要删除用户？用户删除后资料文件夹仍然会保留下来，再次创建同名用户时新建用户会继承原来文件，清除遗留文件的工作需管理员手工完成。', '删除用户？', {
                    confirmButtonText: '我确认，已明确后果',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        },

    }
</script>
<style lang="scss">
.group-btn{
 .el-button{
     margin-bottom: 10px;
     vertical-align: bottom;
 }
}
</style>
