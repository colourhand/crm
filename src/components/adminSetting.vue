<template>
  <div>
    <el-header>
      <pageHeader></pageHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <pageAside v-bind:default-item="default_item"></pageAside>
      </el-aside>
      <el-main>
          adminSetting
          <order>

          </order>
      </el-main>
    </el-container>
    <el-footer>
      <pageFooter></pageFooter>
    </el-footer>
  </div>
</template>

<script>
import pageAside from "./pageAside.vue"
import order from "./order.vue"
import pageHeader from "./pageHeader.vue"
import pageFooter from "./pageFooter.vue"
export default {
  components: { pageAside , order , pageHeader ,pageFooter},
  name: "adminSetting",
  data() {
    return {
      default_item:'adminSetting',
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-header{
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
  
  .el-footer span{
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
