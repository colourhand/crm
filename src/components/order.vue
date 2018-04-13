<template>
    <div>
        <ul class="page-header">
            <li>
                <ul class="header1">
                    <li>
                     <el-button type="text">用户编号</el-button><el-input v-model="input1" clearable placeholder="用户编号"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
                    </li>
                    <li>
                     <el-button type="text">用户编号</el-button><el-input v-model="input2" clearable placeholder="用户编号"> <i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
                    </li>
                    <li>
                        <el-button type="text">领取状态</el-button>
                        <el-select v-model="value" placeholder="全部">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </li>
                    <li><el-button type="primary" icon="el-icon-search">搜索</el-button></li>
                </ul>
            </li>

            <li>
                  <el-button type="text">导入时间</el-button><el-date-picker v-model="value1" align="right" type="date" placeholder="开始时间" :picker-options="pickerOptions1"></el-date-picker>
                  <el-date-picker v-model="value2" align="right" type="date" placeholder="结束时间" :picker-options="pickerOptions1"></el-date-picker>
                  <el-button type="text">红包金额</el-button><el-input v-model="input1" clearable placeholder="最小金额"><i slot="prefix" class="el-input__icon el-icon-edit"></i></el-input>
                  <el-input v-model="input1" clearable placeholder="最大金额"><i slot="prefix" class="el-input__icon el-icon-edit"></i></el-input>
            </li>
        </ul>
        <el-table :data="tableData" stripe style="width: 100%;max-height: 540px;overflow-y: scroll;">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="pageTotal"> </el-pagination>
    </div>
</template>

<script>
export default {
  name: "orderInfo",
  data() {
    return {
      pageTotal: 8000,
      input1: "",
      input2: "",
      value1: "",
      value2: "",
      options: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "油滴红包"
        },
        {
          value: "2",
          label: "礼券红包"
        },
        {
          value: "3",
          label: "银行红包"
        },
        {
          value: "4",
          label: "加油红包"
        }
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          name: "王小虎",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  }
};
</script>
<style>
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  text-align: right;
  position: absolute;
  right: 10px;
  bottom: 40px;
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
  width: 202px;
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
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 202px;
  margin-right: 5px;
}
</style>
