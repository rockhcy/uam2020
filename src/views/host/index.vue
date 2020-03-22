<script src="../../components/global/index.js"></script>
<template>
  <!-- 主机管理 -->
  <div class="host">
    <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
    <el-tabs class="tabs" type="border-card">
      <el-tab-pane label="主机视图">
        <el-row>
          <el-col class="col_class" v-for="(item, i) in data" :key="i" :span="6">
            <img alt="image" style="width: 130px;" src="../../assets/11.png" />
            <div class="col_name">{{item.name}}</div>
            <div>IP：{{item.ip}}</div>
            <div>公网IP：{{item.publicIp}}</div>
            <div>远程端口：{{item.port1}}</div>
            <div>远程端口：{{item.port2}}</div>
            <div>远程端口：{{item.port3}}</div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="集群视图">
        <div style="height: 700px;">
          <chart :option="option"></chart>
        </div>
      </el-tab-pane>
      <el-tab-pane label="表格视图">
        <el-row>
          <el-button @click="add">添加服务器</el-button>
          <el-button type="danger">移除服务器</el-button>
          <div class="search" style="display: block;float: right">
            <el-input v-model="input" placeholder="请输入内容" style="width: 200px;"></el-input>
            <el-button icon="el-icon-search"></el-button>
          </div>
        </el-row>
        <el-table :data="data" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="类型" width="180"></el-table-column>
          <el-table-column prop="ip" label="内网IP" width="180"></el-table-column>
          <el-table-column prop="publicIp" label="公网IP"></el-table-column>
          <el-table-column prop="port" label="通讯端口"></el-table-column>
        </el-table>
        <el-dialog title :visible.sync="dialogFormVisible" width="65%">
          <h1 style="width: 100%;text-align: center;font-size: 25px;">添加|编辑主机设置</h1>
          <p
            style="width: 100%;text-align: center;font-size: 16px;"
          >主机承载服务的运行，任何参数的修改与设置都有可能影响服务的运行，需谨慎设置参数</p>
          <el-form :model="form" label-position="top">
            <el-row>
              <el-col :span="24">
                <el-form-item label="主机名：">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="内网IP：">
                  <el-input v-model="form.name" autocomplete="off" style="width: 90%"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公网IP：">
                  <el-input v-model="form.name" autocomplete="off" style="width: 90%"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="通讯端口（内）：">
                  <el-input v-model="form.name" autocomplete="off" style="width: calc(90% - 5px);"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="通讯端口（外）：">
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    style="width: calc(90% - 5px);margin-left: 5px"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="主机类型：">
                  <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%">
                    <el-option
                      v-for="item in data"
                      :key="item.name"
                      :label="item.name"
                      :value="item.ip"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="备注说明：">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Host",
  data() {
    return {
      input: "",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      name: "主机管理",
      breadData: ["系统管理"],
      data: [
        {
          name: "负载均衡服务器",
          ip: "10.0.0.4",
          publicIp: "202.103.44.10",
          port1: "",
          port2: "",
          port3: ""
        },
        {
          name: "WEB服务器",
          ip: "10.0.0.4",
          publicIp: "202.103.44.10",
          port1: "",
          port2: "",
          port3: ""
        },
        {
          name: "文件存储 服务器",
          ip: "10.0.0.4",
          publicIp: "202.103.44.10",
          port1: "",
          port2: "",
          port3: ""
        },
        {
          name: "应用主机 服务器",
          ip: "10.0.0.4",
          publicIp: "202.103.44.10",
          port1: "",
          port2: "",
          port3: ""
        },
        {
          name: "AD域 服务器",
          ip: "10.0.0.4",
          publicIp: "202.103.44.10",
          port1: "",
          port2: "",
          port3: ""
        }
      ],
      option: {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",
            name: "tree2",
            data: [
              {
                name: "中心",
                children: [
                  {
                    name: "代理服务器",
                    children: [
                        { name: "WEBRP 服务器", value: 4116 },
                        { name: "WEB Service", value: 4116 }
                    ]
                  },
                  {
                    name: "RDS负载均衡中心",
                    children: [
                      { name: "应用主机001", value: 2105 },
                      { name: "应用主机002", value: 1316 },
                      { name: "应用主机003", value: 3151 },
                    ]
                  },
                  {
                    name: "AD 域务器",
                    children: [{ name: "FlareVis", value: 4116 }]
                  },
                  {
                    name: "云存储服务器",
                    children: [{ name: "DirtySprite", value: 8833 }]
                  }
                ]
              }
            ],

            top: "2%",
            left: "10%",
            bottom: "2%",
            right: "10%",

            symbolSize: 7,

            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right"
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
      }
    };
  },
  methods: {
    handleSelectionChange() {},
    add() {
      this.dialogFormVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.host {
  height: 100%;
  padding: 0 15px;
  overflow-y: auto;
}
.tabs {
  margin: 0 0 15px 0;
}
.col_class {
  height: 280px;
  text-align: center;
  color: #717476;
  > .col_name {
    font-weight: 600;
  }
}
</style>