<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>系统平台设置</h2>
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
          <el-form :label-position="labelPosition" label-width="180px" :model="globalForm">
            <el-form-item label="默认首页">
              <el-select v-model="globalForm.default_index" placeholder="请选择">
                <el-option label="网址导航" value="网址导航"></el-option>
                <el-option label="应用列表" value="应用列表"></el-option>
                <el-option label="文件管理" value="文件管理"></el-option>
              </el-select>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <el-form-item label="门户主题">
              <el-select v-model="globalForm.theme" placeholder="请选择">
                <el-option label="时空数据平台" value="时空数据平台"></el-option>
                <el-option label="科研教育与数据共享平台" value="科研教育与数据共享平台"></el-option>
                <el-option label="企业云应用平台" value="企业云应用平台"></el-option>
              </el-select>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <el-form-item label="开放 H5 页面（无客户端）">
              <el-switch
                v-model="globalForm.show_h5"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <el-form-item label="开放用户自助注册">
              <el-switch
                v-model="globalForm.open_regist"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </el-form-item>
            <div class="hr-line-dashed"></div>
            <el-form-item label="发件服务器(STMP)">
              <el-input v-model="globalForm.mail_server"></el-input>
            </el-form-item>
            <el-form-item label="帐号">
              <el-input v-model="globalForm.mail_name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="globalForm.mail_pwd"></el-input>
            </el-form-item>
            <el-form-item label="密钥">
              <el-input v-model="globalForm.mail_secret"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="短信推送接口">
              <el-input v-model="globalForm.message_url"></el-input>
            </el-form-item>
            <el-form-item label="密钥">
              <el-input v-model="globalForm.message_secret"></el-input>
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
  name: "SetupSystem",
  data() {
    return {
      labelPosition: "right",
      globalForm: {
        index: "",
        theme: "",
        show_h5: false,
        open_regist: false,
        mail_server: "",
        mail_name: "",
        mail_pwd: "",
        mail_secret: "",
        message_url: "",
        message_secret: ""
      }
    };
  },
  methods: {
    submitForm() {
      alert("submitForm");
    }
  }
};
</script>
