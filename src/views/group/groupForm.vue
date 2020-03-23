<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>组织管理 - 组织信息</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>组织管理 - 组织信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>组织管理 - 组织信息</h2>
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-form :label-position="labelPosition" label-width="180px" :model="groupForm">
            <el-form-item label="组织ID">
              <el-input v-model="groupForm.id"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="组织名称（标题）">
              <el-input v-model="groupForm.name"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="备注信息">
              <el-input v-model="groupForm.description"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="组织 Logo（ 128 * 128 ）">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="最大用户上限">
              <el-input v-model="groupForm.max_user_number"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="云端可用本地资源">
              <el-checkbox-group v-model="groupForm.file_location">
                <el-checkbox label="允许挂载本地存储"></el-checkbox>
                <el-checkbox label="允许本地与云端交互剪贴板（复制粘贴"></el-checkbox>
                <el-checkbox label="允许从本地打印机输出云端内容"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="分配【应用集合】">
              <el-select v-model="groupForm.application_template_id" placeholder="请选择">
                <el-option
                  v-for="item in application_template_id_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item label="个人存储配额（GB）">
              <el-input v-model="groupForm.storage_size"></el-input>
            </el-form-item>
            <div class="hr-line-dashed"></div>

             <el-form-item label="云端可用本地资源">
              <el-checkbox-group v-model="groupForm.file_location">
                <el-checkbox label="同步创建组织的共享空间"></el-checkbox>
                <el-checkbox label="同步创建组织管理员 ( 帐号与组织 ID 同名，默认密码: poiuyt654321 )
"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item>
              <el-button type="default" @click="goback">返回</el-button>
              <el-button type="success" @click="submitForm('ruleForm')">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "GroupForm",
  data() {
    return {
      labelPosition: "right",
      groupForm: {
        id: "",
        name: "",
        description: "",
        logo: "",
        max_user_number: "",
        file_location: [],
        application_template_id: "",
        storage_size: "",
        init_action: []
      },
      imageUrl: require("../../assets/20200315204259.jpg"),
      application_template_id_options: [
        { value: "Adobe", label: "Adobe" },
        { value: "OFFICE", label: "OFFICE" }
      ]
    };
  },
  methods: {
    submitForm() {
      alert("submitForm");
    },
    goback() {
      this.$router.push("/group/index");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar-uploader {
  ::v-deep .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
