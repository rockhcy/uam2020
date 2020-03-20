<template>
    <el-dialog
            :title="isEdit ? '编辑组织' : '添加组织'"
            :visible.sync="dialogVisible"
            width="30%"
            class="popup"
            :before-close="close">
        <el-form ref="form" label-position="left" label-width="120px" :model="form" class="mar-t-xs" :rules="rules">
            <el-form-item label="设备组名称：" prop="groupName">
                <el-input v-model="form.groupName" placeholder="请输入设备组名称"
                ></el-input>
            </el-form-item>
            <el-form-item label="负责人" prop="groupPrincipal">
                <el-input v-model="form.groupPrincipal" placeholder="请输入负责人"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" prop="contactWay">
                <el-input v-model="form.contactWay" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="备注：" prop="groupDescribe">
                <el-input v-model="form.groupDescribe" placeholder="请输入备注"></el-input>
            </el-form-item>
        </el-form>
        <el-transfer
                class="transfer_class"
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入设备组名称"
                v-model="value"
                :titles="titles"
                @change="valueChange"
                @right-check-change="rightClisck"
                :data="data">
        </el-transfer>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="save">确 定</el-button>
            <el-button @click="close">取 消</el-button>
        </span>
    </el-dialog>
</template>
<script>
    export default {
        name: "Popup",
        data() {
            // 手机号码验证
            const validmobilePhone = (rule, value, callback) => {
                const reg1 = /^((13[4-9])|(15([0-2]|[7-9]))|(18[2|3|4|7|8])|(178)|(147))[\d]{8}$/;    // 移动号段
                const reg2 = /^((133)|(153)|(18[0|1|9])|(177))[\d]{8}$/;                              // 电信号段
                const reg3 = /^((13[0-2])|(145)|(15[5-6])|(176)|(18[5-6]))[\d]{8}$/;                  // 联通号段
                if (!reg1.test(value) && !reg2.test(value) && !reg3.test(value)) {
                    callback(new Error('手机号必须是移动、联通或者电信的手机号码'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    groupName: '',
                    groupDescribe: '',
                    groupPrincipal: '',
                    contactWay: '',
                    numberOfManagement: '',
                    mappingEquipmentId: [],
                },
                titles: ['所有设备', '选中设备'],
                isEdit: false,
                dialogVisible: false,
                // 表单规则
                rules: {
                    groupName: [
                        {required: true, message: '请输入设备组名称', trigger: 'blur'},
                    ],
                    groupPrincipal: [
                        {required: true, message: '请输入负责人', trigger: 'blur'},
                    ],
                    contactWay: [
                        {required: true, validator: validmobilePhone, trigger: 'blur'},
                    ],
                    groupDescribe: [
                        {required: true, message: '请输入备注', trigger: 'blur'},
                    ],
                },
                data: [],
                value: [],
                filterMethod(query, item) {
                    return item.imei.indexOf(query) > -1 || item.recipient.indexOf(query) > -1;
                }
            }
        },
        methods: {
            valueChange() {
                console.log(this.value);
                this.form.mappingEquipmentId = this.value;
            },
            rightClisck() {
                // console.log(key);
            },
            // 弹框保存事件
            save() {
                this.$refs.form.validate((valid) => {
                        if (!valid) return;
                    if (this.isEdit) {
                        console.log(this.form);
                        this.$http.post('equiment/updateGroup', this.form).then(res => {
                            console.log(res.data)
                            if (res!==undefined) {
                                this.dialogVisible = false;
                                this.$parent.getItem();
                                this.form = {
                                    groupName: '',
                                    groupDescribe: '',
                                    groupPrincipal: '',
                                    contactWay: '',
                                    numberOfManagement: '',
                                    mappingEquipmentId: [],
                                };
                            }
                        })
                    } else {
                        this.$http.post('equiment/insertGroup', this.form).then(res => {
                            console.log(res.data)
                            if (res!==undefined) {
                                this.dialogVisible = false;
                                this.$parent.getItem();
                                this.form = {
                                    groupName: '',
                                    groupDescribe: '',
                                    groupPrincipal: '',
                                    contactWay: '',
                                    numberOfManagement: '',
                                    mappingEquipmentId: [],
                                };
                            }
                        })
                    }

                })
            },
            // 弹框关闭事件
            close() {
                this.dialogVisible = false;
                this.form = {
                    groupName: '',
                    groupDescribe: '',
                    groupPrincipal: '',
                    contactWay: '',
                    numberOfManagement: '',
                    mappingEquipmentId: [],
                };
            },
        },
    }
</script>
<style lang="scss">
    .transfer_class {
        .el-transfer-panel {
            background-color: rgba(0,0,0,0.3);
            border: none;
            color: #ffffff;
            margin-bottom: 20px;
            .el-transfer-panel__header {
                text-align: left;
                background-color: rgba(0,0,0,0.2);
                border: none;
                color: #ffffff;
                .el-checkbox{
                    .el-checkbox__label{
                        color: #ffffff;

                    }
                }
            }
            .el-transfer-panel__body {
                .el-transfer-panel__filter{
                    .el-input__inner{
                        background-color: rgba(0,0,0,0.3);
                        border: none;
                        color: #ffffff;
                    }
                }
                .el-checkbox-group {
                    text-align: left;
                    .el-transfer-panel__item{
                        color: #ffffff;
                    }
                }
                .el-transfer-panel__empty{
                    color: #ffffff;
                }
            }
        }
    }
</style>
<style scoped>

</style>
