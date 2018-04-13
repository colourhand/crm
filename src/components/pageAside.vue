<template>
    <div class="page-aside">
        <div>
            <img src="../assets/img/pp.png" alt="" class="avator">
            <div class="user-name">
                安盛天平用户 
            </div>
        </div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :default-active="defaultItem" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据展示</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="orderInfo">订单数据</el-menu-item>
                        <el-menu-item index="userInfo">用户总量</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="baseInfo" @select="selectMenu()">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>查看数据</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="userManage">数据Data1</el-menu-item>
                        <el-menu-item index="menuManage">数据Data2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="userSetting" @select="selectMenu()">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户设置</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="userManage">基础信息</el-menu-item>
                        <el-menu-item index="menuManage">密码管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
           
                    <el-submenu index="adminSetting" @select="selectMenu()">
                        <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>管理设置</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="userManage">用户管理</el-menu-item>
                        <el-menu-item index="menuManage">菜单管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>  
    </div>
</template>
<script>
export default {
  name: "pageAside",
  data() {
    return {
      menus: [
        { id: 1, name: "菜单一" },
        { id: 1, name: "菜单二" },
        { id: 2, name: "菜单三" }
      ],
      defaultItem:'',
      msg: "welcome to my App"
    };
  },
  props: {
    defaultItem:String
  },
  methods: {
    handleOpen() {
      alert("111");
    },
    select() {
      console.log("000");
    },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
  }
};
</script>


<style scoped>
.page-aside .avator {
  width: 90px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 2px 2px 10px #686963;
}
.user-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
  margin: 30px auto;
}
.el-menu {
  list-style: none;
  position: relative;
  margin: 0;
  height: 580px;
  padding-left: 0;
}
.el-submenu__title i span{
    width: 60px;
    display: inline-block;
}
.el-menu-item{
    background-color: rgba(0, 0, 0, .1)
}
</style>




