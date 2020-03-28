<template>
    <el-dialog

            :visible.sync="dialogVisible"
            width="30%"
            class="popup"
            :before-close="close">
        <h1 style="width: 100%;text-align: center;font-size: 25px;">创建|编排 应用组</h1>
        <p
                style="width: 100%;text-align: center;font-size: 16px;"
        >设定应用组中的应用集合，可选多个应用组建成一个集合</p>
        <el-form :model="form" label-position="top">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="应用组名：">
                        <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
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
            const generateData = _ => {
                const data = [];
                const cities = ['Adobe Creative Cloud', 'Adobe Photoshop CC 2018', 'Apple Software Update', 'Apple Software Update', 'Blend for Visual Studio 2015', 'Blend for Visual Studio 2019', 'Excel'];
                const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index,
                        pinyin: pinyin[index]
                    });
                });
                return data;
            };
            return {
                input:'',
                titles: ['所有设备', '选中设备'],
                isEdit: false,
                dialogVisible: false,
                value: [],
                data: generateData(),
                filterMethod(query, item) {
                    return item.pinyin.indexOf(query) > -1;
                },
                // filterMethod(query, item) {
                //     return item.imei.indexOf(query) > -1 || item.recipient.indexOf(query) > -1;
                // },
                form: {
                    name: ""
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
</style>
<style scoped>

</style>
