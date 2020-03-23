<template>
  <div class="p-m mail-box">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="18" :lg="18">
        <el-card shadow="always" class="m-b">
          <div slot="header" class="clearfix">
            <h2 class="m-b">工单内容</h2>
            <h3>来自: Elon Musk</h3>
          </div>
          <div>
            管理员，你好
            <br />
            <br />我连续两天打开 IDEA2019.3 报错，无法使用...
          </div>
          <div class="hr-line-dashed"></div>

          <div class="m-b">
            <span>
              <i class="el-icon-paperclip"></i>1 个附件
            </span>
            <a href="#">Download all</a>
            |
            <a href="#">View all images</a>
          </div>

          <div class="file-box">
            <div class="file">
              <el-image :src="url" :preview-src-list="srcList"></el-image>
              <div class="file-name">
                20200315204259.jpg
                <br />
                <div class="small">上传时间：2020-03-15 10:10:10</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <div>
          <h2>同一用户的近期其他工单</h2>
          <ul class="folder-list">
            <li v-for="(v,i) in another" :key="i">
              <a href="#">{{v.title}}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "TicketDetail",
  data() {
    return {
      url: require("../../assets/20200315204259.jpg"),
      srcList: [
        require("../../assets/20200315204259.jpg"),
        require("../../assets/1.png")
      ],
      another: [
        { title: "EXCEL 故障" },
        { title: "EXCEL 故障" },
        { title: "文件无法下载" },
        { title: "EXCEL 故障" },
        { title: "文件无法下载" },
      ]
    };
  },
  methods: {
    rowClick(row) {
      // 方便跳转传参
      console.log(row);
      // this.$router.push('/mailbox/detail');
      // this.$router.push('/updateClient/index')
    }
  }
};
</script>  
<style lang="scss">
.file-box {
  float: left;
  width: 220px;
  .file {
    border: 1px solid #e7eaec;
    padding: 0;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 20px;
    margin-right: 20px;
    .file-name {
      padding: 10px;
      background-color: #f8f8f8;
      border-top: 1px solid #e7eaec;
      .small {
        color: #676a6c;
        font-size: 85%;
      }
    }
  }
}
.folder-list {
  h2 {
    font-size: 24px;
  }
  li {
    border-bottom: 1px solid #e7eaec;
    display: block;
    a {
      color: #666666;
      display: block;
      padding: 5px 0;
    }
  }
}
</style>