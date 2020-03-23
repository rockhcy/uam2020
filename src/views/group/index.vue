<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>组织管理</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>组织管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="组织" name="组织">
        <el-card shadow="always" class="m-b">
          <el-row class="m-b">
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
              <el-button-group>
                <el-button type="default" @click="addItem">添加组织</el-button>
                <el-button type="danger">移除组织</el-button>
              </el-button-group>
            </el-col>

            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
                <el-button slot="append" type="success">Go</el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-table style="width: 100%" :data="tableData">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="ID" prop="id"></el-table-column>
            <el-table-column label="组织名称" prop="name"></el-table-column>
            <el-table-column label="下属组织" prop="children_group"></el-table-column>
            <el-table-column label="用户数" prop="user_number"></el-table-column>
            <el-table-column label="组织管理员" prop="administration"></el-table-column>
          </el-table>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="关系视图" name="关系视图">
        <div class="btn-group">
          <el-button type="success" @click="update()">刷新视图</el-button>
        </div>
        <div id="GroupTree" style="width: 1024px;height:1024px;"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import userGroup from "@/data/userGroup";
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/tree");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
export default {
  name: "Group",
  data() {
    return {
      activeName: "组织",
      tableData: [
        {
          id: "1.5.2",
          name: "创新研发一部",
          children_group: "2个",
          user_number: "100 人",
          administration: "gaochong"
        },
        {
          id: "1.5.2",
          name: "创新研发一部",
          children_group: "2个",
          user_number: "100 人",
          administration: "gaochong"
        },
        {
          id: "1.5.2",
          name: "创新研发一部",
          children_group: "2个",
          user_number: "100 人",
          administration: "gaochong"
        },
        {
          id: "1.5.2",
          name: "创新研发一部",
          children_group: "2个",
          user_number: "100 人",
          administration: "gaochong"
        }
      ],
      search_key: ""
    };
  },
  methods: {
    handleClick(tab) {
      // TODO 切换页面初始化不同区域的数据
      console.log(tab);
      let label = tab.label;
      switch (label) {
        case "关系视图":
          this.initGroupTree();
          break;
        default:
          break;
      }
    },
    addItem() {
      this.$router.push("/group/add");
    },
    update() {
      alert("refresh");
    },
    initGroupTree() {
      var myChart = echarts.init(document.getElementById("GroupTree"));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",
            data: [userGroup],
            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",
            //symbolSize: 64,
            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 15
            },

            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left"
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

