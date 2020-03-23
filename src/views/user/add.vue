<template>
    <div class="center">
        <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
        <el-card class="box-card center-footer">
            <div slot="header" class="clearfix">
                <span>用户资料</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-form ref="form" :model="form" label-width="180px">
                <el-form-item label="登录ID：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="登录密码：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="隶属组织：">
                    <el-select class="select" v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="一部一组" value="shanghai"></el-option>
                        <el-option label="一部二组" value="beijing"></el-option>
                        <el-option label="一部三组" value="aa"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="姓名：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="单位：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="手机：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="微信：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click.native="$router.push('/user/index')">返回</el-button>
                    <el-button type="primary" @click="onSubmit">保存用户信息</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "UserAdd",
        data(){
            return{
                name: "用户管理 - 用户资料",
                breadData: ["用户管理","用户资料"],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .select{
        display: block;
    }
</style>