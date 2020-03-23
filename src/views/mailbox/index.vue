<template>
  <div class="p-m mail-box">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>工单管理</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>日志管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card shadow="always" class="m-b">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="7" :lg="7">
          <h2 class="m-b">工单处理</h2>
          <div>
            <el-row class="cursor-pointer">
              <el-col :xs="16" :sm="16" :md="16" :lg="16">
                <i class="el-icon-receiving ticket-icon"></i>
                <span>待处理</span>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8">
                <el-tag size="mini" effect="dark" type="warning">16</el-tag>
              </el-col>
            </el-row>
            <div class="hr-line-dashed"></div>

            <el-row class="cursor-pointer">
              <el-col :xs="16" :sm="16" :md="16" :lg="16">
                <i class="el-icon-check ticket-icon"></i>
                <span>已处理</span>
              </el-col>
            </el-row>
            <div class="hr-line-dashed"></div>

            <el-row class="cursor-pointer">
              <el-col :xs="16" :sm="16" :md="16" :lg="16">
                <i class="el-icon-magic-stick ticket-icon"></i>
                <span>加急标星</span>
              </el-col>
            </el-row>
            <div class="hr-line-dashed"></div>

            <el-row class="cursor-pointer">
              <el-col :xs="16" :sm="16" :md="16" :lg="16">
                <i class="el-icon-delete ticket-icon"></i>
                <span>回收站</span>
              </el-col>
            </el-row>
            <div class="hr-line-dashed"></div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="16" :lg="16" :offset="1">
          <el-card>
            <div slot="header" class="clearfix">
              <el-row>
                <el-col :xs="24" :sm="24" :md="8" :lg="8">
                  <h2>工单 (16)</h2>
                </el-col>
                <el-col :xs="24" :sm="24" :md="16" :lg="16">
                  <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                    <el-button slot="append" type="success">Go</el-button>
                  </el-input>
                </el-col>
              </el-row>
            </div>

            <el-row class="m-b">
              <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-button size="mini" icon="el-icon-refresh">refresh</el-button>
                <el-tooltip content="mark as read" placement="top">
                  <el-button size="mini" icon="el-icon-view"></el-button>
                </el-tooltip>
                <el-tooltip content="Mark as important" placement="top">
                  <el-button size="mini" icon="el-icon-warning-outline"></el-button>
                </el-tooltip>
                <el-tooltip content="Move to trash" placement="top">
                  <el-button size="mini" icon="el-icon-delete"></el-button>
                </el-tooltip>
              </el-col>
              <el-col :xs="24" :sm="24" :md="16" :lg="16">
                <el-row type="flex" justify="end">
                  <el-col>
                    <el-button-group style="float: right;">
                      <el-button size="mini" type="default" icon="el-icon-arrow-left"></el-button>
                      <el-button size="mini" type="default">
                        <i class="el-icon-arrow-right el-icon--right"></i>
                      </el-button>
                    </el-button-group>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-table :data="tableData" stripe class="mail-box-table" @row-click="rowClick">
              <el-table-column type="selection"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="description" label="描述"></el-table-column>
              <el-table-column prop="date" label="日期"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Mailbox",
  data() {
    return {
      search_key: '',
      tableData: [
        {
          date: "2016-05-02",
          name: "Elon Musk",
          description: "帐号无法登录"
        },
        {
          date: "2016-05-02",
          name: "Elon Musk",
          description: "帐号无法登录"
        },
        {
          date: "2016-05-02",
          name: "Elon Musk",
          description: "帐号无法登录"
        },
        {
          date: "2016-05-02",
          name: "Elon Musk",
          description: "帐号无法登录"
        },
        {
          date: "2016-05-02",
          name: "Elon Musk",
          description: "帐号无法登录"
        }
      ]
    };
  },
  methods: {
    rowClick(row) {
      // 方便跳转传参
      console.log(row);
      this.$router.push('/mailbox/detail')
    }
  }
};
</script>

<style lang="scss" scoped>
.mail-box {
  .ticket-icon {
    margin-right: 10px;
  }
  .mail-box-table {
    ::v-deep tr {
      cursor: pointer;
    }
  }
}
</style>