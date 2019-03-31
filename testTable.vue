  <template>
  <el-table :data="tableData" style="width: 100%" :span-method="objectSpanMethod" >
    <el-table-column prop="date" label="日期" width="180" ref='date'>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="handleAdd(scope.$index,scope.row)">添加</el-button>
        <el-button type="text" @click="handleDel(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      spanArr: [],
      position: 0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    this.rowSpan()
  },
  methods: {

    handleAdd(index,data) {
      this.tableData.splice(index,0,data)
      this.rowSpan()
    },
    handleDel(index,data) {
      this.tableData.splice(index,1)
      this.rowSpan()
    },
    rowSpan() {
      this.position = 0;
      this.spanArr=[]
      this.tableData.forEach((item, index) => {
        if (index == 0) {
          this.spanArr.push(1);
          this.position = 0;
          
        }else{
          if (item.date == this.tableData[index - 1].date) {
            this.spanArr[this.position] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.position = index;
          }
        }

      })
      console.log(this.spanArr)
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
    		return {
    			rowspan: this.spanArr[rowIndex],
    			colspan: 1
    		}
    	}

    }

  }
}
</script>

<style>
.el-table tbody tr:hover>td { background-color: #fff!important }
</style>
