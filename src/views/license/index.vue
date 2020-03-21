<template>
     <div class="p-m">
    <el-card shadow="always" class="m-b">
      <div slot="header" class="clearfix">
        <h2>授权许可信息</h2>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统导航</el-breadcrumb-item>
        <el-breadcrumb-item>授权许可信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    
  </div>
</template>
<script>
    export default {
        name: "License",

        data(){
            return{

            }
        },
        created(){

        },
        methods:{

        }
    }
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
