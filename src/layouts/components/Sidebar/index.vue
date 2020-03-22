<template>
    <div class="nav" :style="{ 'width': $store.state.isFold ? '60px' : '200px' }">
        <figure class="nav-top" v-if="!$store.state.isFold">
            <img  src="../../../assets/img.jpg" class="usreImg" @click="imgClick()">
            <p >哎嘿</p>
            <el-dropdown @command="handleCommand" >
              <span class="el-dropdown-link">
                系统管理员<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人设置</el-dropdown-item>
                    <el-dropdown-item command="b">工作事务</el-dropdown-item>
                    <el-dropdown-item command="c">注销登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </figure>
        <el-row :style="{ 'height': $store.state.isFold ? '100%' : 'height: calc(100% - 200px)' }"
                style="background: #2f4050">
            <el-scrollbar class="hide-x" :native="false" :noresize="false" style="height: 100%">
                <el-menu
                        router
                        :collapse="$store.state.isFold"
                        unique-opened
                        ref="menu"
                        class="el-menu-vertical-demo"
                        style="height: 100%"
                        background-color="rgba(0,0,0,0)"
                        text-color="#ffffff"
                        active-text-color="#ffffff"
                        element-loading-background="transparent">
                    <menu-item v-for="item in sideMenu" :key="item.id" :data="item"/>
                </el-menu>
            </el-scrollbar>
        </el-row>
    </div>
</template>
<script>
    import MenuItem from './components/MenuItem'
    export default {
        name: 'Sidebar',
        components: {
            MenuItem,
        },
        data() {
            return {
                sideMenu: [
                    {   "treeLeaf":true,
                        'menuName':'系统导航',
                        'menuHref':"/main/index",
                        'menuIcon':'icon icon-xitongshezhi',
                    },
                    {
                        "treeLeaf":false,
                        'menuName':'主机管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'主机管理',
                                'menuHref':"/host/index"}
                        ]
                    },
                    {
                        "treeLeaf":false,
                        'menuName':'应用管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'云应用列表',
                                'menuHref':"/app/index"},
                            {"treeLeaf":true,
                                'menuName':'应用主机程序库',
                                'menuHref':"/hostProgram/index"},
                            {"treeLeaf":true,
                                'menuName':'应用集合管理',
                                'menuHref':"/appGroup/index"},
                            {"treeLeaf":true,
                                'menuName':'文件关联',
                                'menuHref':"/file/index"},
                            {"treeLeaf":true,
                                'menuName':'Android 应用',
                                'menuHref':"/android/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'会话管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'会话列表',
                                'menuHref':"/session/index"},
                            {"treeLeaf":true,
                                'menuName':'会话监视',
                                'menuHref':"/conversation/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'用户管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'用户列表',
                                'menuHref':"/user/index"},
                            {"treeLeaf":true,
                                'menuName':'异常用户处置',
                                'menuHref':"/unusualUser/index"},
                            {"treeLeaf":true,
                                'menuName':'管理员',
                                'menuHref':"/adminUser/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'组织管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'组织管理',
                                'menuHref':"/group/index"},
                            {"treeLeaf":true,
                                'menuName':'角色与权限',
                                'menuHref':"/role/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'工单系统',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'工单信息',
                                'menuHref':"/mailbox/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'数据统计',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'应用使用汇总',
                                'menuHref':"/graphChart/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'系统监管',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'Android 设备管控',
                                'menuHref':"/management/index"}
                                ,{"treeLeaf":true,
                                'menuName':'远程用户监管',
                                'menuHref':"/remoteUser/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'日志管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'Android 管理操作日志',
                                'menuHref':"/journal/index"}
                            ,{"treeLeaf":true,
                                'menuName':'用户日志',
                                'menuHref':"/log/index"} ,
                            {"treeLeaf":true,
                                'menuName':'系统日志',
                                'menuHref':"/systemLog/index"}
                        ]
                    },{
                        "treeLeaf":false,
                        'menuName':'系统管理',
                        'menuHref':"#",
                        'menuIcon':'icon icon-xitongshezhi',
                        'childrenNodes':[
                            {"treeLeaf":true,
                                'menuName':'系统授权信息',
                                'menuHref':"/license/index",
                                }
                            ,{"treeLeaf":true,
                                'menuName':'更新远程客户端',
                                'menuHref':"/updateClient/index",
                                } ,
                            {"treeLeaf":true,
                                'menuName':'平台配置',
                                'menuHref':"/setupSystem/index",
                                } ,
                            {"treeLeaf":true,
                                'menuName':'第三方接口',
                                'menuHref':"/thirdParty/index",
                               }
                        ]
                    },
                ],

            }
        },
        created() {
        },
        methods: {
            handleCommand(command) {
                //个人
                if(command=='a'){
                    this.$router.push(
                        {
                            path: '/profile/index',
                        }
                    );
                }
                //事务
                if(command=='b'){
                    this.$router.push(
                        {
                            path: '/mailbox/index',
                        }
                    );
                }
                //注销
                if(command=='c'){
                    this.$router.push({
                        name: 'Login',
                    })
                }
            },
        }
    }
</script>
<style lang="scss">
    .hide-x {
        height: calc(100% - 200px) !important;
        overflow-y: auto !important;
        .el-scrollbar__wrap {
            &::-webkit-scrollbar {
                display: none;
            }

            .el-scrollbar__view {
                .el-menu-vertical-demo {
                    overflow: auto;
                    border: none;
                    .el-menu-item {
                        font-size: 16px;
                        font-family: 微软雅黑;

                        &:hover {
                            background-color: rgba(0, 0, 0, 0.2) !important;
                        }

                        &:focus {
                            background-color: rgba(0, 0, 0, 0.2) !important;
                        }
                        .icon{
                             color: #ffffff;
                        }
                    }

                    .el-submenu {
                        .el-submenu__title {
                            font-size: 16px;
                            font-family: 微软雅黑;
                            .icon{
                                color:#ffffff;
                            }
                            .el-submenu__icon-arrow {
                                color: #ffffff;
                                margin-right: 22px;
                            }
                            &:hover {
                                background-color: rgba(0, 0, 0, 0.2) !important;
                            }

                            &:focus {
                                background-color: rgba(0, 0, 0, 0.2) !important;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<style scoped>
    .el-dropdown-link {
        cursor: pointer;
        color: #ffffff;
        font-size: 18px;
    }
    .el-icon-arrow-down {
        font-size: 18px;
    }
    .nav {
        width: 200px;
        height: calc(100% - 63px);
        display: block;
        float: left;
    }
    .nav-top {
        width: 100%;
        height:200px;
        text-align: center;
        display: block;
        color: #ffffff;
        background: #2f4050;
    }

    .usreImg {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .nav-top p {
        font-size: 24px;
        font-family: 微软雅黑;
    }

    .nav-top figcaption {
        font-size: 16px;
        font-family: 微软雅黑;
    }

    .nav-footer {
        width: 200px;
        display: flex;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .iconPage {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

    .iconPage div {
        font-size: 16px;
        font-family: 微软雅黑;
        margin-top: 5px;
    }

    .iconPage p {
        font-size: 14px;
        font-family: 微软雅黑;
        color: #53d769;
    }
</style>
