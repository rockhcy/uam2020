<template>
  <div class="p-m systemLog">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>日志管理</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>日志管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card shadow="always" class="m-b">
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <el-date-picker
            v-model="search_data.date"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          ></el-date-picker>
        </el-col>

        <el-col :xs="24" :sm="24" :md="16" :lg="16" class>
          <el-input placeholder="请输入内容" v-model="search_data.key_word" class="input-with-select">
            <el-select v-model="search_data.key_type" slot="prepend" placeholder="请选择">
              <el-option label="管理日志" value="1"></el-option>
              <el-option label="用户日志" value="2"></el-option>
              <el-option label="系统日志" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-card>

    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>系统日志</h2>
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <el-timeline>
            <el-timeline-item v-for="(i, k) in logs" :key="k" :timestamp="i.time" placement="top">
              <el-card>
                <h4>{{i.name}}</h4>
                <p> {{i.action}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SystemLog",
  data() {
    return {
      search_data: {
        date: "",
        key_word: "",
        key_type: ""
      },
      logs: [
        {time: '2020-03-16 16:00', action:'创建了删除了组 WCY.', name: '王重洋'},
        {time: '2020-03-16 16:00', action:'创建了删除了组 WCY.', name: '王重洋'},
        {time: '2020-03-16 16:00', action:'创建了删除了组 WCY.', name: '王重洋'},
        {time: '2020-03-16 16:00', action:'创建了删除了组 WCY.', name: '王重洋'},
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.systemLog {
  ::v-deep .el-select .el-input {
    width: 130px;
  }
  ::v-deep .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>