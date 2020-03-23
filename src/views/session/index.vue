<template>
  <div class="center">
    <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <p class="p-lable">会话主机 ( 切换应用主机服务器 )</p>
            <el-select v-model="region" placeholder="请选择活动区域" class="select1">
              <el-option label="HOST 01" value="one"></el-option>
              <el-option label="HOST 02" value="two"></el-option>
              <el-option label="HOST 03" value="three"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <h1>75</h1>
                  <div class="text-navy">会话总数</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <h1>1024</h1>
                  <div class="text-navy">进程总数</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <h1>192.168.0.0</h1>
                  <div class="text-navy">ip</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <h1>HOST 01</h1>
                  <div class="text-navy">主机</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card center-footer">
      <div slot="header" class="clearfix">
        <span>远程会话管理</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-button @click="dialogFormOne = true">会话消息通知</el-button>
      <el-button type="danger" @click="open">强制注销会话</el-button>
      <el-button type="success" @click="dialogFormThree = true">发起会话进程</el-button>
      <el-table :data="data" stripe style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="Session ID" sortable></el-table-column>
        <el-table-column prop="user" label="用户" sortable></el-table-column>
        <el-table-column prop="appName" label="CloudApp( 云应用 ) " sortable></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="cpu">
                <span>{{ props.row.cpu }}</span>
              </el-form-item>
              <el-form-item label="内存">
                <span>{{ props.row.ram }}</span>
              </el-form-item>
              <el-form-item label="网络">
                <span>{{ props.row.network }}</span>
              </el-form-item>
              <el-form-item label="硬盘">
                <span>{{ props.row.disk }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="start" label="状态" sortable>
          <template slot-scope="scope">
            <el-button v-if="!scope.row.start" type="danger">已断开</el-button>
            <el-button v-if="scope.row.start" type="primary">正常</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="10"
        @current-change="currentChange"
        :total="12"
        class="el-pa"
      ></el-pagination>
      <el-dialog title :visible.sync="dialogFormOne" width="65%">
        <h1 style="width: 100%;text-align: center;font-size: 25px;">会话消息通知</h1>
        <p
          style="width: 100%;text-align: center;font-size: 16px;"
        >向会话发送文本通知消息</p>
        <el-form :model="form" label-position="top">
          <el-row>
            <el-col :span="24">
              <el-form-item label="通知内容：">
                <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormOne = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormOne = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title :visible.sync="dialogFormThree" width="65%">
        <h1 style="width: 100%;text-align: center;font-size: 25px;">发起会话进程</h1>
        <p
          style="width: 100%;text-align: center;font-size: 16px;"
        >在用户的当前活动会话下，开启一个新的进程（启动一个指定的应用程序）</p>
        <el-form :model="form" label-position="top">
          <el-row>
            <el-col :span="24">
              <el-form-item label="远程进程（程序路径）：">
                <el-input v-model="input" placeholder="请输入内容" style="width: 100%;"></el-input>
              </el-form-item>
              <div>如果指定的进程缺少或会话权限限制，远程调用可能失败。</div>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormThree = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormThree = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Session",
  data() {
    return {
        dialogFormOne: false,
        dialogFormTwo: false,
        dialogFormThree: false,
      name: "会话管理-会话列表",
      breadData: ["会话列表"],
      region: "one",
      data: [],
        input:'',
        form:{},
      tableData: [
        {
          id: "1",
          user: "wcy",
          appName: "WINWORD.EXE",
          start: true,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "1",
          user: "wcy",
          appName: "WINWORD.EXE",
          start: true,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "1",
          user: "wcy",
          appName: "WINWORD.EXE",
          start: true,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "1",
          user: "wcy",
          appName: "WINWORD.EXE",
          start: true,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        }
      ],
      lastData: [
        {
          id: "1",
          user: "wcy",
          appName: "WINWORD.EXE",
          start: true,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
        {
          id: "2",
          user: "guochong",
          appName: "-",
          start: false,
          disk: "20%",
          cpu: "20%",
          network: "20%",
          ram: "20%"
        },
      ],
    };
  },
  created() {
      this.data = this.tableData;
  },
  methods: {
      open() {
          this.$confirm('严重警告：强制注销会话的操作会导致用户正在进行的操作被立刻中断且不可恢复。本操作一般用于修复会话挂起（用户登录故障）及回收服务器资源时使用，请谨慎操作。', '注销会话？', {
          confirmButtonText: '我确认，已明确后果',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    currentChange(val) {
      if (val === 2) {
          this.data = this.lastData;
      } else {
          this.data = this.tableData;
      }
    }
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 15px;
}
.p-lable {
  max-width: 100%;
  font-weight: 700;
  font-size: 13px;
  color: #676a6c;
}
.select1 {
  display: block;
}
h1 {
  text-align: center;
  color: rgb(103, 106, 108);
}
.text-navy {
  text-align: center;
  color: #1ab394;
  font-weight: 600;
  font-size: 16px;
  line-height: 0;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
  display: block;
}
  .el-pa{
    margin-top: 20px;
  }
</style>