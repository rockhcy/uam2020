<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <div class="profile-main">
            <div class="profile-main-left">
                <figure>
                    <img class="usreImg" src="../../assets/img.jpg" />
                    <p>哎嘿</p>
                </figure>
                <ul class="profile-ul">
                    <li>身份：系统管理员</li>
                    <li>最后登录时间：2020-03-15</li>
                </ul>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="电话">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="登陆密码">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="onSubmit">更改资料</el-button>
                        <el-button type="danger">更改密码</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="profile-main-right">
                <h2 style="padding-right: 20px;padding-left: 20px">平台操作权限</h2>
                <p style="padding-right: 20px;padding-left: 20px"> 操作权限如下：<i class="el-icon-check"></i> 具有 ，<i  class="el-icon-close"></i> 不具有 ，权限由你的上级管理员或系统管理员分配，本表仅供查询 </p>
                <ul class="ul">
                    <li :key="index" v-for="(item, index) in list">
                        <i style="margin-left: 10px;margin-right: 20px" :class="item.icon"></i>{{item.text}}
                        <div class="xx"><i style="margin-left: 10px;margin-right: 20px" :class="item.icon"></i></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data(){
            return{
                name: "个人中心",
                breadData: ["系统导航", "个人中心"],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                list:[{
                    icon:'el-icon-check',
                    text:'添加用户、删除、编辑用户',

                },{
                    icon:'el-icon-close',
                    text:'添加、删除 组织'
                },{
                    icon:'el-icon-check',
                    text:'添加用户、删除、编辑用户',

                },{
                    icon:'el-icon-close',
                    text:'添加、删除 组织'
                },{
                    icon:'el-icon-check',
                    text:'添加用户、删除、编辑用户',

                },{
                    icon:'el-icon-close',
                    text:'添加、删除 组织'
                },{
                    icon:'el-icon-check',
                    text:'添加用户、删除、编辑用户',

                },{
                    icon:'el-icon-close',
                    text:'添加、删除 组织'
                },{
                    icon:'el-icon-check',
                    text:'添加用户、删除、编辑用户',

                },{
                    icon:'el-icon-close',
                    text:'添加、删除 组织'
                },{
                    icon:'el-icon-check',
                    text:'添加用户、删除、编辑用户',

                },{
                    icon:'el-icon-close',
                    text:'添加、删除 组织'
                }]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style>
    .ul{
        padding-right: 20px;
        padding-left: 20px;
    }
    .ul li{
        list-style-type:none;
        height: 40px;
        line-height: 40px;
        width: 100%;
    }
    .xx{
        display: inline-block;
        float: right;
    }

    .ul li:nth-of-type(odd){ background:#f9f9f9;}

    .ul li:nth-of-type(even){ background:#ffffff;}
    .el-icon-check{
        color: #53d769;
    }
    .el-icon-close{
        color: crimson
    }
    .center{
        height: calc(100% - 60px);
        padding: 20px 25px 40px 25px;
    }
    .profile-main{
        width: 100%;
        height: 100%;
        background: #ffffff;
        margin-bottom: 40px;
    }
    .profile-main-left{
        width: 50%;
        text-align: center;
        display: inline-block;
        padding-top: 20px;
    }
    .profile-main-right{
        width: 50%;
        display: inline-block;
        float: right;
        padding-top: 20px;
    }
    .usreImg {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .profile-ul{
        margin-left: 10px;
        margin-bottom: 10px;
        text-align: left;
        border-top: 1px solid #e7eaec;
        border-bottom: 1px solid #e7eaec;
        padding: 20px 29px 20px 29px;
    }
</style>