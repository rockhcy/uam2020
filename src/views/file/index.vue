<template>
  <!-- 云应用列表 -->
  <div class="app">
    <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
    <el-card>
      <div slot="header" class="clearfix">
        <span>云应用池</span>
      </div>
      <div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="18"><div class="grid-content bg-purple"><el-button type="text" v-for="item in linkData" :key="item">{{item}}</el-button></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6"><div class="grid-content bg-purple"> <el-input placeholder="请输入内容" v-model="search_key" class="input-with-select">
            <el-button slot="append" type="success">Go</el-button>
          </el-input></div>
          </el-col>
        </el-row>
      </div>
      <el-table :data="data" style="width: 100%">
        <el-table-column align="center" label="#" width="50" type="index"></el-table-column>
        <el-table-column prop="name" label width="70">
          <template slot-scope="scope">
            <img style="width: 45px" src="../../assets/timg.jpg" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="应用名" width="380"></el-table-column>
        <el-table-column prop="ip" label="关联文件类型">
          <template slot-scope="{ row }">
            <el-tag
              style="marginRight: 5px"
              v-for="item in row.types"
              :key="item"
              effect="dark"
            >{{ item }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label width="200">
          <template slot-scope="scope">
            <el-button @click="dialogFormVisible = true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title :visible.sync="dialogFormVisible" width="30%">
        <h1 style="width: 100%;text-align: center;font-size: 25px;">设置文件类型与云应用关联</h1>
        <p
          style="width: 100%;text-align: center;font-size: 16px;"
        >指定云端文件的打开方式，即文件与应用之的关联。文件可以在线被指定的云应用直接打开。</p>
        <el-form :model="form" label-position="top">
          <el-row>
            <el-col :span="24">
              <el-form-item>
                <div style="border: 1px solid #DCDFE6;border-radius: 5px;">
                  <el-tag
                    style="margin-left: 10px;"
                    :key="index"
                    v-for="(tag, index) in dynamicTags"
                    closable
                    :type="tag.type"
                    :disable-transitions="false"
                    @close="handleClose(tag)"
                  >{{tag.name}}</el-tag>
                  <div style="width: 100%" class="ipt">
                    <el-input
                      placeholder="输入逗号或者回车可输入多条"
                      v-model.trim="inputValue"
                      ref="saveTagInput"
                      size="small"
                      @keydown.delete.native="deleteSpn"
                      @keyup.enter.native="handleInputConfirm"
                      @blur="handleInputConfirm"
                    ></el-input>
                  </div>
                </div>
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
  name: "file",
  data() {
    return {
      search_key:'',
        input: '',
      dynamicTags: [],
      inputValue: "",
      name: "应用管理",
      breadData: ["关联文件"],
      dialogFormVisible: false,
      form: {
        name: ""
      },
      linkData: [
        "所有应用",
        "科学计算",
        "地理测绘",
        "工作流",
        "办公软件",
        "编程开发",
        "ERP",
        "内部业务",
        "股票证券",
        "图形处理"
      ],
      data: [
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        },
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        },
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        },
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        },
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        },
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        },
        {
          name: "Visual Studio 2015",
          types: [".txt", ".doc"]
        }
      ]
    };
  },
  methods: {
    // 公告标签  标签关闭事件
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    deleteSpn() {
      if (this.dynamicTags.length && !this.inputValue.length) {
        const last = this.dynamicTags[this.dynamicTags.length - 1];
        if (last.type === "") {
          this.$set(last, "type", "danger");
        } else {
          this.dynamicTags.pop();
        }
      }
    },
    // 确认添加标签事件
    handleInputConfirm() {
      // eslint-disable-next-line
      const inputValue = this.inputValue;
      let flag = false; // 当输入的值和数组中值有重复时为true
      this.dynamicTags.forEach(element => {
        if (inputValue === element.name) {
          flag = true;
        }
      });
      // 判断值是否为空以及是否和已有标签重复
      if (inputValue && !flag) {
        // 判断输入的值是否包含 ‘，’
        if (inputValue.includes("，")) {
          const arr = inputValue.split("，");
          let newArr = [];
          // 判断是否已有标签
          if (this.dynamicTags.length === 0) {
            newArr = arr;
          } else {
            const tags = this.dynamicTags.map(val => val.name);
            newArr = Array.from(new Set(_difference(arr, tags)));
          }
          newArr.forEach(el => {
            this.dynamicTags.push({
              name: el,
              type: ""
            });
          });
        } else {
          const obj = {};
          this.$set(obj, "name", inputValue);
          this.$set(obj, "type", "");
          this.dynamicTags.push(obj);
        }
      }
      // this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style lang="scss">
  .ipt{
    .el-input{
      .el-input__inner{
        border: none;
      }
    }
  }
  .NoticeAnnement{
    .el-dialog{
      .el-dialog__body{
        overflow-y: scroll!important;
      }
    }
  }
</style>


<style lang="scss" scoped>
.app {
  height: 100%;
  padding: 0 15px;
  overflow-y: auto;
}
</style>