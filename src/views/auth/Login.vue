<template>
    <div class="Login">
        <div class="login-img">
        <div class="img-font">
            <p>和信云应用平台</p>
            <p style="font-size: 25px">创新实验室-原型评估</p>
        </div>
            <p class="small">
                Copyright VEsystem Company
            </p>
        </div>
        <div class="login-form">
            <el-tabs class="tab" v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="VECloudApp 帐号" name="first"><el-form ref="form" :model="loginForm" size="medium" class="form-class">
                    <el-form-item prop="username" class="form-class-item">
                        <el-input
                                v-model="loginForm.username"
                                autofocus
                                clearable
                                style="height: 50px"
                                placeholder="请输入登录用户名"
                                @keyup.enter.native="onClickLogin()">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                                v-model="loginForm.password"
                                placeholder="请输入登录密码"
                                :type="isSee ? 'text' : 'password'"
                                @keyup.enter.native="onClickLogin()">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="验证码">
                        <el-input
                                v-model="ip"
                                placeholder="请输入验证码"
                                class="input-back"
                                @input="change">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                                type="primary"
                                icon="icon icon-denglutubiao"
                                style="margin-top:22px;width: 100% ;height:50px;font-size: 14px;color:#ffffff;background: #1c7dfa;outline: none;border: none;font-weight: 400;"
                                @click="onClickLogin()">登录
                        </el-button>
                    </el-form-item>
                    <el-form-item class="text-right">
                        <el-checkbox  v-model="rememberMe" :checked="checked">记录密码</el-checkbox>
                    </el-form-item>
                </el-form></el-tab-pane>
                <el-tab-pane label="扫码登陆" name="second">
                    <div style="text-align: center">
                        <img style="width: 256px" src="../../assets/erwei.jpg">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="通行证" name="third"><div class="form-class">
                  <el-form ref="form" :model="loginForm" size="medium" class="form-class">
                        <el-form-item prop="username" class="form-class-item">
                            <el-input
                                    v-model="loginForm.username"
                                    style="height: 50px"
                                    placeholder="请输入通行证">
                            </el-input>
                        </el-form-item>

                    </el-form>
                </div></el-tab-pane>
            </el-tabs>
            <small>© 2009-2020</small>
        </div>

    </div>
</template>
<script>
   import secret from '../../secret.js';
   export default {
        name: 'Login',
        data() {
            return {
                activeName: 'first',
                message: '登录页面',
                input: '',
                poss: '',
                loading: false,
                isSee: false,
                isLoginValid: false,
                rememberMe:false,
                loginForm: {
                    username: '',
                    password: '',
                    token:'',
                },
                list:{},
                checked:'',
                ip:'',
            }
        },
        created(){

        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            change() {
                this.$store.state.ip = this.ip;
                const ip = this.ip;
                localStorage.setItem('ip', ip);
            },
            onClickLogin() {
                this.$store.state.ip = this.ip;
                const ip = this.ip;
                localStorage.setItem('ip', ip);
                 this.$router.push('/main/index')
            },
        }
    }
</script>
<style lang="scss">
    .form-class {
        .el-form-item{
            .el-form-item__content{
                height: 48px!important;
                .el-input {
                    height: 48px!important;
                    .el-input__inner {
                        &:focus {
                            border: none;
                            background-color: #e6ebf4;
                        }
                        height: 48px!important;
                        background-color: #f4f6fa;
                        border-radius: 4px;
                        border: none;
                    }
                }
            }
        }
    }

    .tab{
        width: 100%;
        height:100%;
    }
</style>
<style scoped>
    .Login {
         position: absolute;
         left: 0;
         top: 0;
         bottom: 0;
         right: 0;
         margin: auto;
         display: flex;
        width: 1014px;
        height: 428px;
         min-height: 450px;
        padding: 15px 20px 45px 20px;
        background: #ffffff;
        min-width: 1131px;
     }
    .login-form {
       width: 50%;
        background: #ffffff;
    }
    .login-form small{
        position: absolute;
        bottom: 20px;
        right: 20px;
        color: #676a6c;
    }
    .small{
        position: absolute;
        bottom: 20px;
        color: #676a6c;
    }
    .title-top span {
        color: #343a40;
        margin-right: 10px;
    }

    .login-img {
        width: 50%;
        background-image: url("../../assets/logo.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        -moz-background-size:100% 100%;
    }
    .img-font{
            position: absolute;
        top: 199px;
        left: 35px;
    }
    .img-font p {
        font-size: 48px;
        font-family: 微软雅黑;
        color: #ffffff;
    }

    /*el-button {*/
    /*    font-size: 18px;*/
    /*}*/
    .text-right {
        text-align: right;
        color: #212529;
        font-size: 14px;
        font-family: 微软雅黑;
        font-weight: bold;
    }
    .form-class{
        /*width: 450px;*/
        margin:20px;
    }
</style>
