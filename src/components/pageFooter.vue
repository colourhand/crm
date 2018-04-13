<template>
  <div>
      <div>安盛天平后台管理系统   |  技术支持 <span>聚目堂</span> |  版本号：V1.0</div>
      <div>{{rightMsg}}</div>
  </div>
</template>

<script>

export default {
  name: "pageFooter",
  data() {
    return {
      default_item: "pageFooter",
      rightMsg: "Copyright © 2018安盛天平后台管理系统 苏ICP备115741300号"
    };
  }
};
</script>

<style scoped>
.el-header {
  background-color: #fff;
  color: #333;
  text-align: left;
  align-items: center;
  display: flex;
}
.el-footer {
  background-color: #0e0f10;
  text-align: center;
  color: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.el-footer span {
  color: #f99c25;
  font-size: 12px;
}
.el-aside {
  background-color: #ebebeb;
  color: #333;
  text-align: center;
  margin-right: 20px;
  padding: 20px 0 0;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: left;
  border: 1px solid #e0e0e0;
  position: relative;
}

.el-container {
  width: 1280px;
  min-height: 788px;
  margin: 20px auto;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
