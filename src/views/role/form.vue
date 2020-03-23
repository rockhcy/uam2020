<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>用户管理 - 角色权限</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>应用管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色权限</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>编辑角色权限</h2>
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-form :label-position="labelPosition" label-width="180px" :model="roleForm">
            <el-form-item label="角色名称">
              <el-input v-model="roleForm.download_url"></el-input>
            </el-form-item>

            <el-form-item label="权限列表">
              <el-transfer
                filterable
                :titles="['未拥有权限', '已拥有权限']"
                filter-placeholder="请输入权限名"
                v-model="roleForm.permission"
                :data="premissions"
              ></el-transfer>
            </el-form-item>
            <div class="hr-line-dashed"></div>

            <el-form-item>
              <el-button type="default" @click="goback">返回</el-button>
              <el-button type="success" @click="submitForm('ruleForm')">保存角色设置</el-button>
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
      roleForm: {
        permission: [],
        name: ""
      },
      premissions: [
        { label: "管理用户", key: 1 },
        { label: "管理主机", key: 2 },
        { label: "发布、移除应用", key: 3 },
        { label: "日志管理", key: 4 },
        { label: "系统管理", key: 5 },
      ]
    };
  },
  methods: {
    submitForm() {
      alert("submitForm");
    },
    goback() {
      this.$router.push("/role/index");
    }
  }
};
</script>
