  <template>
  <div>
    <el-form label-position="right" :rules="rules" :model="ruleForm" ref="ruleForm">
      <el-table :data="ruleForm.tableData" style="width: 100%" :span-method="objectSpanMethod" v-if="show">
        <el-table-column prop="column" label="日期" width="180" ref='date' :render-header="renderHeader">
        </el-table-column>
        <el-table-column prop="grade" label="告警等级" width="240">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.grade'" :rules='rules.grade'>
            <el-radio-group v-model="scope.row.grade" @change="changeGrade(scope.row,scope.$index)">
              <el-radio label="serious">严重</el-radio>
              <el-radio label="commonly">一般</el-radio>
              <el-radio label="slight">轻微</el-radio>
            </el-radio-group>
            </el-form-item>

          </template>
        </el-table-column>
        <el-table-column label="阈值">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.val'" :rules='rules.val'>
              <el-input v-model="scope.row.val"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleAdd(scope.$index,scope.row)">添加</el-button>
            <el-button type="text" @click="handleDel(scope.$index,scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-form-item prop="a">
        <el-input v-model="ruleForm.a"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submit('ruleForm')">提交</el-button>
    <!-- 1
    <iconMsg messages="112"></iconMsg> -->

  </div>

</template>

  <script>
import iconMsg from "@/view/vueFun/iconMsg.vue"
export default {
  components: {
    iconMsg
  },
  data() {
    return {
      spanArr: [],
      position: 0,
      rules: {
        column: { required: true, message: '证据模板名称不能为空', trigger: 'blur' },
        grade: { required: true, message: '证据模板名称不能为空', trigger: 'blur' },
        val: { required: true, message: '证据模板名称不能为空', trigger: 'blur' },
        a: { required: true, message: '不能为空', trigger: 'blur' },
      },
      ruleForm: {
        a: ''
      },
      show:true,
      tableData: [{
        column: 'sex',
        grade: '',
        val: ''
      }, {
        column: 'name',
        grade: '',
        val: ''
      }, {
        column: 'grade',
        grade: '',
        val: ''
      }]
    }
  },
  created() {
    this.rowSpan()

    this.ruleForm.tableData = this.tableData


  },
  methods: {
    renderHeader(h, { column, $index }) {
      return h('div', [
        h('span', {
          domProps: {
            innerHTML: column.label
          }
        }),
        h(iconMsg, {
          props: { messages: "备注信息2" },
          style: {
            'cursor': 'pointer',
            'margin-left': '10px'
          }
        })
      ])

    },
    submit(formName) {
      this.$refs[formName].validate((valid, obj) => {
        console.log(valid, obj)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      console.log(this.tableData)
    },
    handleAdd(index, data) {
      
      if (this.tableData.filter((item) => {
        return item.column == data.column
      }).length == 3) {
        this.$message({
          showClose: true,
          message: '等级最多为三个',
          type: 'warning'
        });
      } else {
        this.show=false
        this.$nextTick(() => {
          // this.ruleForm.tableData.push( {
          //   column: data.column,
          //   grade: '',
          //   val: ''
          // })
           
          this.ruleForm.tableData.splice(index + 1, 0, {
            column: data.column,
            grade: '',
            val: ''
          })
          this.show=true
             this.rowSpan()
        })
      }
      console.log(this.tableData)

      this.$refs.ruleForm.clearValidate();
   
    },
    changeGrade(arr, index) {
      this.tableData.filter((item, i) => {
        return index != i
      }).forEach((item => {
        if (item.column == arr.column && item.grade == arr.grade) {
          this.$message({
            showClose: true,
            message: '同一个字段，同一个告警等级只能设置一个阈值！',
            type: 'warning'
          });
          arr.grade = ''
        }

      }))
      console.log(this.tableData)
      console.log(arr)
    },
    handleDel(index, data) {
      console.log(index)

      if (this.tableData.filter((item) => {
        return item.column == data.column
      }).length == 1) {
        this.$message({
          showClose: true,
          message: '等级最少为一个',
          type: 'warning'
        });
      } else {
        this.$nextTick(() => {
          this.tableData.splice(index, 1)
        })

        console.log(this.tableData)
        // console.log()
      }
      console.log(this.$refs.ruleForm)
      this.$refs.ruleForm.clearValidate();

      this.$set(this.tableData, index, data)
      this.rowSpan()
    },
    rowSpan() {
      this.position = 0;
      this.spanArr = []
      this.tableData.forEach((item, index) => {
        if (index == 0) {
          this.spanArr.push(1);
          this.position = 0;

        } else {
          if (item.column == this.tableData[index - 1].column) {
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
.el-table tbody tr:hover > td {
  background-color: #fff !important;
}
</style>
