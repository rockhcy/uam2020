<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <div class="center-footer">
            <el-button-group class="group-btn">
            <el-button>添加管理员</el-button>
            <el-button type="danger">移除管理员</el-button>
            </el-button-group>
            <el-row :gutter="20" style="margin-top: 20px">
                <el-col  :xs="24" :sm="24" :md="12" :lg="6" class="row-col" :gutter="20" :key="index" v-for="(item, index) in list">
                    <div class="grid-content bg-purple">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="grid-content bg-purple" style="text-align: center">
                            <img class="img-responsive" src="../../assets/user.png">
                        </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="16" style="padding: 20px">
                            <div class="grid-content bg-purple">
                            <h3>{{item.name}}</h3>
                            <p class="row-p">{{item.role}}</p>
                            <p class="row-p">ID: {{item.id}}</p>
                            <p class="row-p">邮件: {{item.email}}</p>
                            <p class="row-p">电话: {{item.tel}}</p>
                        </div>
                        </el-col>
                    </el-row>
                </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminUser",
        data(){
            return{
                name: "用户管理 - 管理员",
                breadData: ["用户管理","管理员"],
                list:[{
                    name:'陈业',
                    role:'二部管理员',
                    id:'XXXXX',
                    email:'XXXXX@vesysteem.com',
                    tel:'13100000000'
                },{
                    name:'王春义',
                    role:'二部管理员',
                    id:'XXXXX',
                    email:'XXXXX@vesysteem.com',
                    tel:'13100000000'
                },{
                    name:'冉逸骏',
                    role:'二部管理员',
                    id:'XXXXX',
                    email:'XXXXX@vesysteem.com',
                    tel:'13100000000'
                },{
                    name:'陈业',
                    role:'二部管理员',
                    id:'XXXXX',
                    email:'XXXXX@vesysteem.com',
                    tel:'13100000000'
                },{
                    name:'王春义',
                    role:'二部管理员',
                    id:'XXXXX',
                    email:'XXXXX@vesysteem.com',
                    tel:'13100000000'
                },{
                    name:'冉逸骏',
                    role:'二部管理员',
                    id:'XXXXX',
                    email:'XXXXX@vesysteem.com',
                    tel:'13100000000'
                }]
            }
        },
        created() {

        },
        methods:{

        },
    }
</script>

<style scoped>
    .row-col{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .row-p{
        margin: 0 0 10px;
        font-size: 16px;
    }
    .img-responsive{
        display: block;
        max-width: 80%;
        height: auto;
        border-radius: 50%;
        margin-top: 15px;
        margin-left:7px;
    }
</style>