<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">新增用户</el-button>
      <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="600">
        <el-form :model="form" width="800">
          <el-form-item label="用户昵称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="form.telNumber" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户类别" :label-width="formLabelWidth">
            <el-select v-model="form.level">
              <el-option v-for="item in userLevel" :key="item.value" :label="item.label" :value="item.value" ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth">
            <el-select v-model="form.userStatus">
              <el-option v-for="item in userStatus" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
      userLevel: [
        {
          value: "0",
          label: "管理员"
        },
        {
          value: "1",
          label: "商户"
        },
        {
          value: "2",
          label: "会计"
        },
        {
          value: "3",
          label: "数据管理员"
        }
      ],
      userStatus: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "锁定"
        },
        {
          value: "2",
          label: "删除"
        },
        {
          value: "3",
          label: "黑名单"
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        telNumber: "",
        level: "管理员",
        userStatus: "正常",
        password: "",
        createTime: ""
      },
      formLabelWidth: "120px"
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
.el-dialog{
    width: 800px !important;
}
.el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    text-align: left;
}
.el-select {
    display: inline-block;
    position: relative;
    text-align: left;
    display: flex;
}
.el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    line-height: 24px;
    font-size: 14px;
    width: 600px;
}
input{
      width: 500px;
}
</style>
