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
        <h2>系统平台设置 - 新客户端</h2>
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-form :label-position="labelPosition" label-width="80px" :model="updateClentForm">
            <h2 class="form-title">容器管理</h2>
            <el-form-item label="适配系统">
                <el-select v-model="updateClentForm.system" placeholder="请选择">
                <el-option label="Windows x86" value="Windows x86"></el-option>
                <el-option label="Linux x86" value="Linux x86"></el-option>
                <el-option label="Linux Arm" value="Linux Arm"></el-option>
                <el-option label="Android" value="Android"></el-option>
                <el-option label="Linux MIPS" value="Linux MIPS"></el-option>
              </el-select>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <el-form-item label="下载地址">
              <el-input v-model="updateClentForm.download_url"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="哈稀校验">
              <el-input v-model="updateClentForm.hash"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="强制更新">
              <el-switch
                v-model="updateClentForm.force_update"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item>
                <el-button type="default" @click="goback">返回</el-button>
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
  name: "UpdateClientForm",
  data() {
    return {
      labelPosition: "right",
      updateClentForm: {
        system: "",
        download_url: '',
        hash: '',
        force_update: ''
      }
    };
  },
  methods: {
    submitForm () {
      alert('submitForm')
    },
    goback () {
        this.$router.push('/updateClient/index')
    } 
  }
};
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

</style>