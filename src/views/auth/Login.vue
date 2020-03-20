<template>
    <div class="Login">
        <div class="login-form">
            <div class="form-title">
                <div class="title-top"><span>VE</span>MDM</div>
                <div class="title-bot">SIGN IN</div>
            </div>
            <el-form ref="form" :model="loginForm" size="medium" class="form-class">
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
                <el-form-item prop="ip">
                    <el-input
                            v-model="ip"
                            placeholder="请输入ip"
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
            </el-form>
        </div>
        <div class="login-img">
            <div class="img-font">
                <p>Welcome to</p>
                <p>Mobile Device Management</p>
            </div>
        </div>
    </div>
</template>
<script>
   import secret from '../../secret.js';
   export default {
        name: 'Login',
        data() {
            return {
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
                ip: this.$store.state.ip,
            }
        },
        created(){
            // console.log(localStorage.getItem('checked')!==null,1,localStorage.getItem('checked'));
            if(localStorage.getItem('checked')!==null){
                const checked=localStorage.getItem('checked');
                if(secret.decryptByDES(checked)==='true'){
                    // console.log(secret.decryptByDES(checked));
                    const username = localStorage.getItem('username');
                    const password = localStorage.getItem('password');
                    this.checked=true;
                    this.loginForm.username=secret.decryptByDES(username);
                    this.loginForm.password=secret.decryptByDES(password);
                }else{
                    this.checked=false;
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }
            }
        },
        methods: {
            change() {
                this.$store.state.ip = this.ip;
                const ip = this.ip;
                localStorage.setItem('ip', ip);
            },
            onClickLogin() {
                this.$store.state.ip = this.ip;
                const ip = this.ip;
                localStorage.setItem('ip', ip);
                    // const aa =JSON.stringify(this.loginForm);
                    // this.list = secret.encryptByDES(aa);

                        this.$router.push('/home/index')
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
         width: 90vw;
         height: 80vh;
         min-height: 450px;
     }
    .login-form {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ffffff;
    }

    .form-title {
        display: flex;
        flex-direction: column;
        padding-bottom: 30px;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .title-top {
        font-size: 32px;
        color: #1c7dfa;
    }

    .title-bot {
        font-size: 14px;
        color: #77757a;
        font-family: 微软雅黑;
        margin-top: 5px;
    }

    .title-top span {
        color: #343a40;
        margin-right: 10px;
    }

    .login-img {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url("../../assets/login.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        -moz-background-size:100% 100%;
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
        width: 450px;
        margin:20px;
    }
</style>
