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
        <ul class="page-header">
            <li>
                <ul class="header1">
                    <li>
                     <el-button type="text">用户编号</el-button><el-input v-model="input1" clearable placeholder="用户编号"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
                    </li>
                    <li>
                     <el-button type="text">手机号码</el-button><el-input v-model="input2" maxlength="11" clearable placeholder="手机号码"> <i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
                    </li>
                    <li>
                        <el-button type="text">用户等级</el-button>
                        <el-select v-model="value" placeholder="全部">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </li>
                    <li><el-button type="primary" icon="el-icon-edit-outline">新增</el-button></li>
                </ul>
            </li>

            <li>
                <ul style="display:flex">
                  <li><el-button type="text">选择时间</el-button><el-date-picker v-model="value7" style="width: 406px !important;" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2"></el-date-picker>
</li><li>
                        <el-button type="text">用户状态</el-button>
                        <el-select v-model="statusValue" placeholder="全部">
                            <el-option v-for="item in userStatus" :key="item.statusValue" :label="item.label" :value="item.statusValue"></el-option>
                        </el-select>
                    </li>
                    <li><el-button type="primary" icon="el-icon-search">搜索</el-button></li>
                </ul>
 
            </li>
        </ul>
        <el-table :data="tableData" stripe   max-height="560">
            <el-table-column prop="id" label="用户编号"></el-table-column>
            <el-table-column prop="name" label="用户名"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column prop="telNumber" label="手机号"></el-table-column>
            <el-table-column prop="creatTime" label="时间"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column fixed="right" label="操作">
      <template slot-scope="scope" width="200px">
        <el-button type="primary" icon="el-icon-edit" circle @click="editData()"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteData()"></el-button>
      </template>
    </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="pageTotal"> </el-pagination>
      </el-main>
    </el-container>
    <el-footer>
          <pageFooter></pageFooter>
    </el-footer>
  </div>
</template>

<script>
import pageAside from "./pageAside.vue";
import order from "./order.vue";
import pageHeader from "./pageHeader.vue";
import pageFooter from "./pageFooter.vue";
export default {
  components: { pageAside, order, pageHeader ,pageFooter},
  name: "userManage",
  data() {
    return {
      startTime:'',
      endTime:'',
      pageTotal: 8000,
      input1: "",
      input2: "",
      value1: "",
      value2: "",
      statusValue:"",
      options: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "管理员"
        },
        {
          value: "2",
          label: "商户管理员"
        },
        {
          value: "3",
          label: "会计"
        },
        {
          value: "4",
          label: "数据维护"
        }
      ],
        userStatus: [
        {
          statusValue: "0",
          label: "全部"
        },
        {
          statusValue: "1",
          label: "正常"
        },
        {
          statusValue: "2",
          label: "锁定"
        },
        {
          statusValue: "3",
          label: "删除"
        },
        {
          statusValue: "4",
          label: "拉黑"
        }
      ],
       tableData: [
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {  
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        },
        {
          id: "20180403",
          name: "管理员",
          password: "123456",
          telNumber: "13913313037",
          creatTime: "2018-104-04",
          status: "正常"
        }
      ],
      value: "",
      default_item: "userManage",
          pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
    };
  },
  methods:{
      deleteData() {
        this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
       editData() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', '编辑', {
          dangerouslyUseHTMLString: true
        });
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  text-align: right;
  position: absolute;
  right: 10px;
  bottom: 20px;
}
.page-header {
}
.page-header li {
  margin: 10px 0;
  display: flex;
  margin-right: 20px;
}
.header1 {
  display: flex;
  align-items: center;
}
.el-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
  margin-right: 20px;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 198px;
  margin-right: 20px;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 42px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 202px !important;
}
.el-input--prefix .el-input__inner {
    padding-left: 30px;
    width: 202px;
}
</style>
