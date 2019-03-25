<template>
  <div class="ActiveWelfareWrap">
    <span class="activeRule" @click="handleRule"> 活动规则 》</span>
    <div class="ActiveWelfare">
      <h1>报名领取福利资格</h1>
      <span>(报名信息提交后，会有专人负责联系)</span>

      <div class="welfareForm">
        <div class="col">
          <span class="col-title">姓名</span>
          <span class="col-con">
            <input type="text" class="input" v-model='Welfare.name'>
          </span>
        </div>
        <div class="col">
          <span class="col-title">性别</span>
          <span class="col-con" style="display: flex;
          justify-content: space-around">
            <label>
              男
              <input name="sex" type="radio" v-model="Welfare.sex" value="男">
            </label>
            <label>
              女
              <input name="sex" type="radio" v-model="Welfare.sex" value="女">
            </label>
          </span>
        </div>
        <div class="col">
          <span class="col-title">选择门店</span>
          <span class="col-con" style="height:4.23rem;">
            <select class="input" v-model='Welfare.province'> 
              <option value="" disabled selected hidden>省份</option>
              <option v-for='item in provinceData' :value="item.value">
                  {{item.label}}
              </option> 
            </select>
            <select class="input"  v-model='Welfare.city'> 
             <option value="" disabled selected hidden>城市</option>
            <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option> 
            </select>
            <select class="input" v-model='Welfare.store'> 
                 <option value="" disabled selected hidden>门店</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </span>
        </div>
        <div class="col">
            <span class="col-title">手机号</span>
            <span class="col-con">
            <input type="text" class="input" v-model="Welfare.phoneNumber">
          </span>
        </div>
        <span class="getCode" @click="getCode">获取验证码＞</span>
        <div class="col" style="margin-top:1rem;">
            <span class="col-title">获取验证码</span>
            <span class="col-con">
            <input type="text" class="input" v-model="Welfare.verificationCode">
          </span>
        </div>
      </div>

      <mt-button class="confirm">提交</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        Welfare:{
            name:'',
            sex:'男',
            phoneNumber:'',
            
            province:'',
            city:'',
            store:'',
            verificationCode:''
        },
        provinceData:[{
                value:"广东省",
                label:'广东省'
            },{value:"江西省",label:'江西省'}],
    };
  },
  methods:{
      handleRule(){
          this.$router.push('/rulePage')
      },
      getCode(){

      }
  }
};
</script>

<style lang="less">
a,input,label{-webkit-tap-highlight-color:rgba(255,255,255,0);vertical-align: middle;}
.ActiveWelfareWrap {
  height: 100%;
  width: 100%;
  background: url("../assets/active-bg.jpg") no-repeat 100% 100%;
  background-size: 100%;
  .activeRule {
    color: #fff;
    font-size: 0.36rem;
    display: inline-block;
    margin: 0.99rem 0 1.33rem 1.27rem;
  }
  .confirm{
      color:#1bc9be;
      border-radius:0.49rem;
      font-size:0.46rem;
  }
  .ActiveWelfare {
    text-align: center;
    > span {
      color: #fff;
      font-size: 0.36rem;
    }
    h1 {
      font-size: 0.84rem;
      color: #fff;
    }
    .welfareForm {
    overflow: hidden;
      border-radius: 0.22rem;
      background-color:rgba(255,255,255,0.34);
      height: 12rem;
      margin: 0.8rem;
      position: relative;
      .getCode{
          position: absolute;
          right:0.92rem;
          bottom:1.8rem;
          color:#fff;
      }
      .col {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0.56rem 0;
        line-height: 0.98rem;
        select{
            margin-bottom:0.2rem;
            color:#b5b5b6;
            border:none;
            font-size:0.3rem;
            outline: none;
        }
        .col-title {
          width: 3.52rem;
          height: 0.98rem;
        }
        .col-con {
          width: 5.68rem;
          height: 0.98rem;
          
        }
        span {
          font-size: 0.4rem;
          color: #fff;
        }
        .input {
             color:#b5b5b6;
             border:none;
             
    outline: none;
          border-radius: 0.44rem;
          width:4.76rem;
             padding-left: 0.2rem;
          height: 0.98rem;
          box-sizing: border-box;
        }
      }
      //   .mint-field-core{
      //       border-radius: 0.22rem;
      //       padding-left:0.2rem;
      //       height: 0.98rem;
      //       background: #fff;
      //       opacity: 0
      //   }
      //   .mint-field .mint-cell-value{
      //       border-radius: 0.22rem;
      //   }
    }
  }
}
</style>

