<template>
  <!-- 添加|编辑云应用 -->
  <div class="editCloud">
    <bread-crumb :name="name" :breadData="breadData"></bread-crumb>
    <el-card>
      <div slot="header" class="clearfix">
        <span>应用分类</span>
<!--        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <el-row>
        <el-col  :xs="24" :sm="24" :md="12" :lg="6">
          <img style="width: 230px;display: block;margin: 0 auto" src="../../assets/timg.jpg"/>
          <div style="display: block;margin: 0 auto;width: 67%;marginTop: 10px;">
            <el-button-group class="group-btn">
            <el-button type="primary">指定图标</el-button>
              <el-button type="danger">恢复默认</el-button></el-button-group>
          </div>
        </el-col>
        <el-col  :xs="24" :sm="24" :md="12" :lg="18">
          <el-form ref="form" :model="form" label-width="180px">
            <el-form-item label="应用（显示）名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="执行文件：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="程序路径：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="命令行参数：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="工作目录：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="图标：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="分类：">
              <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%">
                <el-option v-for="(item, index) in data" :key="index" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在云应用主机（集群）：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
          <el-button-group class="group-btn">
          <el-button style="marginLeft: 180px" @click="$router.go(-1)">返回</el-button>
          <el-button type="primary">保存</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'editCloud',
  data() {
    return {
      name: "添加|编辑云应用",
      breadData: ["应用管理", "添加 | 编辑云应用"],
      form: {
        name: '',
        region: '',
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
    };
  },
}
</script>

<style lang="scss" scoped>
.editCloud {
  height: 100%;
  padding: 0 15px;
  overflow-y: auto;
}
</style>