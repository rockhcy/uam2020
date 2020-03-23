<template>
  <!-- 应用管理 - 应用分类 -->
  <div class="classification">
    <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
    <el-card>
      <div slot="header" class="clearfix">
        <span>应用分类</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-row>
        <el-col ::xs="24" :sm="24" :md="12" :lg="12">
          <el-button @click="dialogFormVisible = true">添加服务器</el-button>
          <el-button type="danger">移除服务器</el-button>
          <el-button type="success" @click="dialogFormVisible = true">应用分类更名</el-button>
          <el-table :data="data" style="width: 100%">
            <el-table-column align="center" label="#" width="50" type="index"></el-table-column>
            <el-table-column prop="name" label="应用分类" width="250"></el-table-column>
            <el-table-column prop="value" label="应用数量"></el-table-column>
          </el-table>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div style="height: 500px">
            <chart :option="option"></chart>
          </div>
        </el-col>
      </el-row>
      <el-dialog title :visible.sync="dialogFormVisible" width="65%">
        <h1 style="width: 100%;text-align: center;font-size: 25px;">创建|编排 应用分类</h1>
        <p
          style="width: 100%;text-align: center;font-size: 16px;"
        >设定应用组中的应用分类，方便用户在门户中快速查找应用及不同应用的统计</p>
        <el-form :model="form" label-position="top">
          <el-row>
            <el-col :span="24">
              <el-form-item label="应用分类名：">
                <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "classification",
  data() {
    return {
      input: "",
      dynamicTags: [],
      inputValue: "",
      name: "应用管理 - 应用分类",
      breadData: ["应用管理", "应用分类"],
      dialogFormVisible: false,
      form: {
        name: ""
      },
      data: [
        {
          name: "科学计算",
          value: 108
        },
        {
          name: "地理测绘",
          value: 108
        },
        {
          name: "	工作流",
          value: 108
        },
        {
          name: "办公软件",
          value: 108
        },
        {
          name: "编程开发",
          value: 108
        },
        {
          name: "	ERP",
          value: 108
        },
        {
          name: "内部业务",
          value: 108
        },
        {
          name: "股票证券",
          value: 108
        },
        {
          name: "图形处理",
          value: 108
        },
        {
          name: "其他",
          value: 108
        }
      ],
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          top: 10,
          data: ["科学计算", "地理测绘", "工作流", "办公软件", "编程开发", "图形处理", "ERP", "内部业务", "股票证券", "其他"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                name: "科学计算",
                value: 108
              },
              {
                name: "地理测绘",
                value: 108
              },
              {
                name: "	工作流",
                value: 108
              },
              {
                name: "办公软件",
                value: 108
              },
              {
                name: "编程开发",
                value: 108
              },
              {
                name: "	ERP",
                value: 108
              },
              {
                name: "内部业务",
                value: 108
              },
              {
                name: "股票证券",
                value: 108
              },
              {
                name: "图形处理",
                value: 108
              },
              {
                name: "其他",
                value: 108
              }
            ]
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.ipt {
  .el-input {
    .el-input__inner {
      border: none;
    }
  }
}
.NoticeAnnement {
  .el-dialog {
    .el-dialog__body {
      overflow-y: scroll !important;
    }
  }
}
</style>


<style lang="scss" scoped>
.classification {
  height: 100%;
  padding: 0 15px;
  overflow-y: auto;
}
</style>