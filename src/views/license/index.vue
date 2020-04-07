<template>
    <div class="p-m">
        <el-card shadow="always" class="m-b">
            <div slot="header" class="clearfix">
                <h2>授权许可信息</h2>
            </div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
                <el-breadcrumb-item>授权许可信息</el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
        <div class="center">
            <div class="center-footer imgbag">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="grid-content bg-purple bag">
                            <h3>授权使用单位</h3>
                            <h1>环太平洋大学 - 计算机工程学院</h1><br>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="grid-content bg-purple2 bag" style="text-align: right">
                            <h3>版权所有</h3>
                            <h2 class="text-navy">北京和信创天科技股份有限公司</h2>
                            <h2 class="text-navy">智能云创新研究院</h2><br>
                            <p class="text-p">VEUAM2020 ( 12.0.25 )</p>
                            <p class="text-p">gaochong@vesystem.com</p>
                        </div>
                    </el-col>
                </el-row>
                <div class="table-responsive m-t">
                    <table class="table invoice-table">
                        <thead>
                        <tr>
                            <th><h3 style="text-align: left">授权项目</h3></th>
                            <th><h3>限制</h3></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div><strong>平台到期时间</strong></div>
                                <small>平台到期后，管理后台将无法登录；</small>
                            </td>
                            <td><strong>2050-10-01</strong></td>
                            <td width="40%"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <div><strong>最大设备数</strong></div>
                                <small>可以添加和同时接入的设备数量限制</small>
                            </td>
                            <td><strong>50</strong></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <div><strong>最大用户数</strong></div>
                                <small>可以添加的用户数量，超过限制用户无法创建.</small>
                            </td>
                            <td><strong>1000</strong></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        </tbody>
                    </table>
                </div><!-- /table-responsive -->

                <table class="table invoice-total">
                    <tbody>
                    <tr>
                        <td><strong>技术支持到期时间 :</strong></td>
                        <td>自服务合同生效之日起一个自然年</td>
                    </tr>
                    <tr>
                        <td><strong>最后更新许可证 :</strong></td>
                        <td>2020-02-29</td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-right">
                    <input type="file" id="licenceFile" name="licenceFile" style="display: none">
                    <!--                    <el-button-group class="group-btn">-->
                    <el-button size="small" @click.native="$router.push('/license/agreement')">最终用户许可协议</el-button>
                    <!--                    <button class="btn btn-white"  @click="self.location='Licence2.html'">最终用户许可协议</button>-->
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                    >
                        <el-button size="small" type="primary">更新许可证</el-button>
                    </el-upload>
                    <!--                    <button class="btn btn-primary" @click="readLicenceFile()">更新许可证</button>-->
                    <!--                    </el-button-group>-->
                </div>

                <div class="well000m-t"><strong>Unique identification code：</strong>
                    <h2 style="overflow: auto;">
                        QWERTYUIOPLKJHGFDASZXCVBNMQWERTYUIOPLKJHGFDASZXCVBNMQWERTYUIOPLKJHGFDASZXCVBNMQWERTYUIOPLKJHGFDASZXCVBNM</h2>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "License",

        data() {
            return {}
        },
        created() {

        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            }
        }
    }
</script>
<style scoped>
    .p-m {
        padding: 20px;
    }

    .m-b {
        margin-bottom: 20px;
    }

    .form-title {
        /* font-weight: 300; */
        margin-bottom: 15px;
    }

    .hr-line-dashed {
        border-top: 1px dashed #e7eaec;
        color: #ffffff;
        background-color: #ffffff;
        height: 1px;
        margin: 20px 0;
    }

    .text-navy {
        color: #1ab394;
    }

    .imgbag {
        background: url("../../assets/b1.png");
    }

    .bag {
        background: none;
        line-height: inherit;
    }

    h2 {
        margin: 5px 0 10px;
    }

    h3 {
        font-size: 16px;
        font-weight: 600;
        margin: 5px 0 10px;
    }

    .upload-demo {
        display: inline-block;
    }

    .text-p {
        color: #676a6c;
    }

    .table {
        padding: 20px;
        width: 100%;
    }

    .text-right {
        text-align: right;
    }

    .invoice-table tbody > tr > td:last-child,
    .invoice-table tbody > tr > td:nth-child(4),
    .invoice-table tbody > tr > td:nth-child(3),
    .invoice-table tbody > tr > td:nth-child(2) {
        text-align: right;
    }

    .invoice-table thead > tr > th:last-child,
    .invoice-table thead > tr > th:nth-child(4),
    .invoice-table thead > tr > th:nth-child(3),
    .invoice-table thead > tr > th:nth-child(2) {
        text-align: right;
    }

    .invoice-total > tbody > tr > td:first-child {
        text-align: right;
    }

    .invoice-total > tbody > tr > td {
        border: 0 none;
    }

    .invoice-total > tbody > tr > td:last-child {
        border-bottom: 1px solid #DDDDDD;
        text-align: right;
        width: 15%;
    }

    .invoice-table tbody > tr > td:last-child,
    .invoice-table tbody > tr > td:nth-child(4),
    .invoice-table tbody > tr > td:nth-child(3),
    .invoice-table tbody > tr > td:nth-child(2) {
        text-align: right;
    }

    .invoice-table thead > tr > th:last-child,
    .invoice-table thead > tr > th:nth-child(4),
    .invoice-table thead > tr > th:nth-child(3),
    .invoice-table thead > tr > th:nth-child(2) {
        text-align: right;
    }

    .invoice-total > tbody > tr > td:first-child {
        text-align: right;
    }

    .invoice-total > tbody > tr > td {
        border: 0 none;
    }

    .invoice-total > tbody > tr > td:last-child {
        border-bottom: 1px solid #DDDDDD;
        text-align: right;
        width: 15%;
    }
</style>
