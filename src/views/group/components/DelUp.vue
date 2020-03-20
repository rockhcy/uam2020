<template>
    <el-dialog
            :title="title"
            :visible.sync="dialogDelUp"
            width="30%"
            class="popup"
            :before-close="close">
                <el-form ref="form" label-position="left"  label-width="120px" :model="form" class="mar-t-xs" :rules="rules">
                    <el-form-item label="设备组名称："  prop="groupName">
                                <span class="spab">{{form.groupName}}</span>
                    </el-form-item>
                    <el-form-item label="负责人" prop="groupPrincipal">
                                <span class="spab">{{form.groupPrincipal}}</span>
                    </el-form-item>
                    <el-form-item label="联系方式："  prop="contactWay">
                                <span class="spab">{{form.contactWay}}</span>
                    </el-form-item>
                    <el-form-item label="设备数："  prop="contactWay">
                                <span class="spab">{{form.numberOfManagement}}</span>
                    </el-form-item>
                    <el-form-item label="创建原因："  prop="contactWay">
                                <span class="spab">{{form.groupDescribe}}</span>
                    </el-form-item>
                <el-form-item label="删除原因：" prop="groupDescribe">
                        <el-input v-model="form.reomveDescribe" placeholder="请输入删除原因"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="save">确 定</el-button>
                    <el-button @click="close">取 消</el-button>
                </span>
    </el-dialog>
</template>
<script>
    export default {
        name: "DelUp",
        data() {
            return {
                dialogDelUp: false,
                form: {},
                title:'删除设备信息',
                rules: {
                    reomveDescribe: [
                        {required: true, message: '请输入删除原因', trigger: 'blur'},
                    ],
                }
            }
        },
        created(){

        },
        methods: {
            // 弹框保存事件
            save() {
                this.$http.post('equiment/deleteGroupById',this.form).then(res=>{
                    console.log(res);
                    if(res!==undefined){
                        this.dialogDelUp = false;
                        this.$parent.getItem();
                    }
                    this.arr={
                        reomveDescribe: '',
                            groupName:'',
                    };
                }).catch(res =>{
                    console.log(res)
                //     if (error.response) {
                //         // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                //         console.log(error.response.data);
                //         console.log(error.response.status);
                //         console.log(error.response.headers);
                //     } else {
                //         // Something happened in setting up the request that triggered an Error
                //         console.log('Error', error.message);
                //     }
                //     console.log(error.config);
                })
            },
            // 弹框关闭事件
            close() {
                this.dialogDelUp = false;
                this.form = {
                    groupName: '',
                    groupDescribe: '',
                    groupPrincipal: '',
                    contactWay: '',
                    numberOfManagement: '',
                    mappingEquipmentId: '',
                };
            },
        }
    }
</script>

