<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>用户角色</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>用户角色</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>

    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>用户角色</h2>
      </div>
      <el-row class="m-b">
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
          <el-button-group class="group-btn">
            <el-button type="default" @click="addItem">创建角色</el-button>
            <el-button type="danger">移除角色</el-button>
            <el-button type="warning">编辑角色</el-button>
          </el-button-group>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
            <el-button slot="append" type="success">Go</el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table style="width: 100%" :data="tableData">
        <el-table-column label="名称" prop="name" width="180"></el-table-column>
        <el-table-column label="说明" prop="description" width="400"></el-table-column>
        <el-table-column label="使用者" prop="user_number"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Group",
  data() {
    return {
      activeName: "组织",
      tableData: [
        {
          name: "应用管理员",
          description: "获取应用、发布用户、管理云应用相关权限",
          user_number: "12 人",
        },{
          name: "组织管理员",
          description: "创建组织和管理管理组织",
          user_number: "30 人",
        },{
          name: "应用管理员",
          description: "获取应用、发布用户、管理云应用相关权限",
          user_number: "70 人",
        },{
          name: "应用管理员",
          description: "获取应用、发布用户、管理云应用相关权限",
          user_number: "10 人",
        },
      ],
      search_key: ""
    };
  },
  methods: {
    addItem() {
      this.$router.push("/role/add");
    },
  }
};
</script>

