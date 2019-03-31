<template>
  <div class="ActiveWelfare">
    <h1>报名领取福利资格</h1>
    <span>(报名信息提交后，会有专人负责联系)</span>

    <div class="welfareForm">
      <div class="col">
        <span class="col-title">姓名</span>
        <span class="col-con">
          <input type="text" class="input" v-model="Welfare.name">
        </span>
      </div>
      <div class="col">
        <span class="col-title">性别</span>
        <span class="col-con" style="display: flex;
          justify-content: space-around">
          <label>
            男
            <input
              name="sex"
              type="radio"
              v-model="Welfare.sex"
              value="男"
              style="width:0.36rem;height:0.36rem"
            >
          </label>
          <label>
            女
            <input
              name="sex"
              type="radio"
              v-model="Welfare.sex"
              value="女"
              style="width:0.36rem;height:0.36rem"
            >
          </label>
        </span>
      </div>
      <div class="col">
        <span class="col-title">选择门店</span>
        <span class="col-con" style="height:4.23rem;">
          <select class="input" v-model="Welfare.province">
            <option value disabled selected hidden>省份</option>
            <option v-for="item in provinceData" :value="item.value">{{item.label}}</option>
          </select>
          <select class="input" v-model="Welfare.city">
            <option value disabled selected hidden>城市</option>
            <option v-for="item in cityData" :value="item.value">{{item.label}}</option>
          </select>
          <select class="input" v-model="Welfare.store">
            <option value disabled selected hidden>门店</option>
           <option v-for="item in storeData" :value="item.value">{{item.label}}</option>
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
      <div class="imgCode" v-show="isImgcode" ref="imgCode"></div>
    </div>

    <mt-button class="confirm" @click="handleConfirm">提交</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Axios from 'axios'
import Info from './StoreInfo'
export default {
  data() {
    return {
      isImgcode: false,
      myCaptcha:{},
      Welfare: {
        name: "",
        sex: "男",
        phoneNumber: "",

        province: "",
        city: "",
        store: "",
        verificationCode: ""
      },
      provinceData: [],
      cityData:[],
      storeData:[]
    };
  },
  created(){
    console.log(this.$route.params)
    this.initData(this.$route.params.welfareType)
  },
  methods: {
    getCode() {
      if (
        /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.Welfare.phoneNumber)
      ) {
        this.isImgcode = !this.isImgcode;
        this.capInit();
      } else {
        Toast({
          message: "请输入合法的手机号！",
          position: "center",
          duration: 1000
        });
      }
    },
    handleConfirm() {
      this.$router.push("/");
    },
    // 门店数据
    initData(key){
      console.log(key)
      if(key){
        this.provinceData=[]
          Info[key].forEach(item=>{
              this.provinceData.push({
                  value:item.province,
                  label:item.province
              })
          })  
      }

      var storageCity=[]
      this.$watch('Welfare.province',(newData)=>{
        this.cityData=[]
        this.storeData=[]
        storageCity=Info[key].filter((item)=>{
            return item.province==newData
        })[0].cityChildren
        storageCity.forEach((item=>{
            this.cityData.push({
                  value:item.city,
                  label:item.city
            })
        }))

             
        this.$watch('Welfare.city',(newData)=>{
          this.storeData=[]
          console.log( storageCity.filter(item=>{
              return item.city==newData
          })[0])
          storageCity.filter(item=>{
              return item.city==newData
          })[0].store.forEach((item)=>{
              this.storeData.push({
                  value:item,
                  label:item
              })
          })
      })
      })

 
      
    },
    // 验证码
    capInit(options) {
      var _this = this;
      var uri = "https://captcha-sec.oppomobile.com";
      this.myCaptcha = _dx.Captcha(this.$refs.imgCode, {
        appId: "b09ca8827bac117cf192b378b7164029",
        apiServer: uri,
        constIDServer: uri + "/udid/c1",
        constID_js: uri + "/dx-captcha/libs/const-id.js",
        logoServer: uri + "/logo",
        width: 300,
        isSaaS: false,
        ua_js: uri + "/dx-captcha/libs/greenseer.js",
        style: "embed" == "" ? "embed" : "embed",
        tpc: "aaaa_1_1" == "" ? "aaaa_1_1" : "aaaa_1_1",
        success: function(token) {
          localStorage.setItem("token", token);
          _this.callbacks(token);
        },
        fail: function(errToken) {
          localStorage.setItem("token", errToken);
          _this.callbacks(errToken);
        }
      });
      if(this.myCaptcha){
        this.myCaptcha.show()
      }
    },
    initialize(container, options) {
      capInit(options);
    },
    getTicket() {
      return localStorage.getItem("token");
    },
    callbacks(result) {
      Axios.post("/captcha/verifyCode",{
          token: result
        }).then((response)=>{
         this.isImgcode = !this.isImgcode;
         Toast({
          message: "获取验证码成功",
          position: "center",
          duration: 1000
        });
        }).catch((error)=>{
           this.isImgcode = !this.isImgcode;
           Toast({
          message: "获取验证码失败",
          position: "center",
          duration: 1000
        });
        })
    }
  }
};
</script>

<style lang="less">
.ActiveWelfare {
  text-align: center;
  .confirm {
    color: #1bc9be;
    border-radius: 0.49rem;
    font-size: 0.46rem;
  }
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
    background-color: rgba(255, 255, 255, 0.34);
    height: 12rem;
    margin: 0.8rem;
    position: relative;
    .imgCode {
      position: absolute;
      top: 3rem;
      left: 50%;
      transform: translate(-50%);
      border: 1px solid #ddd;
    }
    .getCode {
      position: absolute;
      right: 0.92rem;
      cursor: pointer;
      bottom: 1.8rem;
      color: #fff;
    }
    .col {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 0.56rem 0;
      line-height: 0.98rem;
      select {
        margin-bottom: 0.2rem;
        color: #b5b5b6;
        border: none;
        font-size: 0.3rem;
        outline: none;
        option {
          width: 20px;
          outline: none;
        }
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
        color: #b5b5b6;
        border: none;
        font-size: 0.36rem;
        outline: none;
        border-radius: 0.44rem;
        width: 4.76rem;
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
</style>

