<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>系统管理 - 更新客户端</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>更新客户端</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>系统管理 - 更新客户端</h2>
      </div>
      <el-row class="m-b">
          <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
              <el-button-group>
                <el-button type="default" @click="addItem">发布新的客户端更新</el-button>
                <el-button type="danger">停用更新</el-button>
            </el-button-group>
          </el-col>

          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                <el-button slot="append" type="success">Go</el-button>
            </el-input>
          </el-col>
      </el-row>
      <el-table
        style="width: 100%"
        :data="tableData"
      >
        <el-table-column label="客户端版本" prop="version"></el-table-column>
        <el-table-column label="校验码" prop="code"></el-table-column>
        <el-table-column label="系统" prop="system"></el-table-column>
        <el-table-column label="上传日期" prop="update_time"></el-table-column>
        <el-table-column label="强制更新" prop="force_update"></el-table-column>
        <el-table-column label="更新记要" prop="description"></el-table-column>
        <el-table-column label="被下载次数" prop="download_number"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UpdateClient",
  data() {
    return {
      tableData: [
        {
          version: "1.5.2",
          code: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          system: "Windoows 通用",
          update_time: "2020-02-15",
          force_update: "是",
          description: "修正JSON 解析错误",
          download_number: 125,
        },
        {
          version: "1.5.2",
          code: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          system: "Windoows 通用",
          update_time: "2020-02-15",
          force_update: "是",
          description: "修正JSON 解析错误",
          download_number: 125,
        },
        {
          version: "1.5.2",
          code: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          system: "Windoows 通用",
          update_time: "2020-02-15",
          force_update: "是",
          description: "修正JSON 解析错误",
          download_number: 125,
        },
        {
          version: "1.5.2",
          code: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          system: "Windoows 通用",
          update_time: "2020-02-15",
          force_update: "是",
          description: "修正JSON 解析错误",
          download_number: 125,
        },
        {
          version: "1.5.2",
          code: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          system: "Windoows 通用",
          update_time: "2020-02-15",
          force_update: "是",
          description: "修正JSON 解析错误",
          download_number: 125,
        },
      ],
      search_key: ''
    };
  },
  methods: {
      addItem () {
          this.$router.push('/updateClient/add')
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