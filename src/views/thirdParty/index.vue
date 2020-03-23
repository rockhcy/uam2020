<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>系统设置 - 第三方平台接口</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>系统平台设置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>系统平台设置 - 全局默认设置</h2>
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-form :label-position="labelPosition" label-width="80px" :model="thirdForm">
            <h2 class="form-title">容器管理</h2>
            <el-form-item label="接口地址">
              <el-input v-model="thirdForm.container_url"></el-input>
            </el-form-item>
            <el-form-item label="密钥">
              <el-input v-model="thirdForm.container_secret"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <h2 class="form-title">资源监控</h2>
            <el-form-item label="接口地址">
              <el-input v-model="thirdForm.resource_url"></el-input>
            </el-form-item>
            <el-form-item label="密钥">
              <el-input v-model="thirdForm.resource_secret"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <h2 class="form-title">云存储</h2>
            <el-form-item label="接口地址">
              <el-input v-model="thirdForm.cloud_url"></el-input>
            </el-form-item>
            <el-form-item label="密钥">
              <el-input v-model="thirdForm.cloud_secret"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="success" @click="submitForm('ruleForm')">保存系统平台设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ThirdParty",
  data() {
    return {
      labelPosition: "right",
      thirdForm: {
        container_url: "",
        container_secret: "",
        resource_url: '',
        resource_secret: '',
        cloud_url: '',
        cloud_secret: ''
      }
    };
  },
  methods: {
    submitForm () {
      alert('submitForm')
    }
  }
};
</script>
