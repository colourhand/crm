<template>
    <div class="page_header">
        <div class="left">
            <img src="../assets/img/logo.jpg" alt="" class="login_logo">
        </div>
        <div class="right">
                <span>诸葛孔明先森</span>
                <span>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-submenu index="2">
                            <template slot="title">欢迎您</template>
                            <el-menu-item index="2-1">修改密码</el-menu-item>
                            <el-menu-item index="2-2">修改充值密码</el-menu-item>
                            <el-menu-item index="2-3" @click="signOut">退出</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </span>
                <span style="cursor:pointer;">
                    <el-button type="success" icon="el-icon-cancellation el-icon-bell" @click="loginOut">注销</el-button>
                </span>
            </div>
    </div>
</template>
<script>
export default {
  name: "pageHeader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      menus: [
        { id: 1, name: "菜单一" },
        { id: 1, name: "菜单二" },
        { id: 2, name: "菜单三" }
      ],
      msg: "welcome to my App"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    signOut() {
      this.$confirm('您确定退出安盛天平后天管理系统？', '温馨提醒', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
            //   this.$message({
            //     type: 'info',
            //     message: '取消操作'
            //   });         
        });
    },
     loginOut() {
        this.$confirm('您确定注销吗', '温馨提醒', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '注销成功!'
          });
        }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '取消操作'
        //   });          
        });
      }
  }
};
</script>
<style scoped>
.page_header {
  color: #909399;
  width: 1280px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
}
.page_header .left {
  flex: 1;
  align-items: center;
  display: flex;
}
.page_header .right {
  flex: 1;
  text-align: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.page_header .right span {
  margin: 0 5px;
  font-size: 14px;
  position: relative;
}
</style>

