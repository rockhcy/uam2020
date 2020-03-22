<template>
  <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>数据统计</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>数据统计</el-breadcrumb-item>
        <el-breadcrumb-item>软件使用情况</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>

    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>本月软件使用统计 TOP10</h2>
      </div>

      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-table stripe :data="applicationStatistical" style="width: 100%">
            <el-table-column prop="id" label="#"></el-table-column>
            <el-table-column prop="name" label="应用"></el-table-column>
            <el-table-column prop="use_number" label="软件使用计数"></el-table-column>
          </el-table>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div id="applicationStatisticalChart"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')

export default {
  name: "GraphChart",
  data() {
    return {
      applicationStatistical: [
        { id: 1, name: "Word", use_number: 125 },
        { id: 1, name: "Excel", use_number: 58 },
        { id: 1, name: "PowerPoint", use_number: 199 },
        { id: 1, name: "Publisher", use_number: 15 },
        { id: 1, name: "Word", use_number: 125 },
        { id: 1, name: "Excel", use_number: 58 },
        { id: 1, name: "PowerPoint", use_number: 199 },
        { id: 1, name: "Publisher", use_number: 15 }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.applicationStatisticalChart();
    });
  },
  methods: {
    applicationStatisticalChart() {
      var myChart = echarts.init(
        document.getElementById("applicationStatisticalChart")
      );

      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data: ["软件使用计数"]
        },
        xAxis: {
          data: this.applicationStatistical.map(val => {return val.name})
        },
        yAxis: {},
        series: [
          {
            name: "软件使用计数",
            type: "bar",
            data: this.applicationStatistical.map(val => {return val.use_number}),
            itemStyle: {
              color: '#1ab394'
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
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
#applicationStatisticalChart {
  height: 300px;
}
</style>