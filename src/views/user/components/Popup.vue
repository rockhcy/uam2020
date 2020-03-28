<template>
    <el-dialog

            :visible.sync="dialogVisible"
            width="30%"
            class="popup"
            :before-close="close">
        <h1 style="width: 100%;text-align: center;font-size: 25px;">批量创建用户</h1>
        <p
                style="width: 100%;text-align: center;font-size: 16px;"
        >指定前缀名后缀名与起止编号.批量生成用户</p>
        <el-form :model="form" label-position="top">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="前缀名：">
                        <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="后缀名：">
                        <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="起始数：">
                        <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="结束数：">
                        <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="24">
                <el-form-item label="密码 （统一指定初始密码）：">
                    <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-form-item label="隶属组织：：">
                        <el-select class="select" v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="一部" value="shanghai"></el-option>
                            <el-option label="二部" value="beijing"></el-option>
                            <el-option label="三部" value="aa"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
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
            return {
                input:'',
                isEdit: false,
                dialogVisible: false,
                form: {
                    name: "",
                    region:'',
                },
            }
        },
        methods: {
            valueChange() {
                console.log(this.value);
            },
            rightClisck() {
                // console.log(key);
            },
            // 弹框保存事件
            save() {

            },
            // 弹框关闭事件
            close() {
                this.dialogVisible=false;
            },
        },
    }
</script>
<style lang="scss">
        .transfer_class{
            text-align: center;
            .el-transfer-panel{
                text-align: left;
            }
        }
    .select{
        display: block !important;
    }
</style>
<style scoped>

</style>
