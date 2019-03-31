<template>
  <div class="vipWefare">
    <span class="title">全新系列 OPPO Reno</span>
    <br>
    <!-- 三重福利 -->
    <span class="titleSmall" v-if="welfareType=='twoWelfare'">金、钻会员专享三重福利</span>
    <span class="titleSmall" v-if="welfareType=='twoWelfare'">金、钻会员专享双重福利</span>
    <span class="titleSmall" v-if="welfareType=='核销' || welfareType=='oneWelfare'">金、钻会员专享福利</span>
    <div class="wefareList" v-show="welfareType=='threeWelfare' || welfareType=='twoWelfare'">
      <div class="list">
        <p>福利 1：旧机换购 Reno 最高额外补贴 500 元</p>
        <span>
          现场回收旧款手机并购买 OPPO Reno，估价基础上最高额外补贴 500元。
          <br>时间：4/19-4/21
        </span>
      </div>
      <div class="list">
        <p>福利 2：1 折购闪充套装</p>
        <span>
          购买 OPPO Reno，即享 1 折购闪充套装（闪充电源适配器 + 闪充数 据线 + 车载闪充或。
          <br>时间：4/19-4/28
        </span>
      </div>
      <div class="list" v-show="welfareType=='threeWelfare'">
        <p>福利 3：VIP 新品专享会</p>
        <span>
          仅面向金卡、钻卡用户限时开放，沉浸式品鉴 OPPO Reno，并有免费 精美礼品相赠。
          <br>时间：4/20-4/21
        </span>
      </div>
    </div>
    <div v-if="welfareType=='cancel'" style="margin-top:1.82rem">
      <div class="qrcode">
        <img src alt ref="qrcode">
        {{urlTitle}}
      </div>
    </div>
    <div v-show="welfareType=='oneWelfare'" style="margin-top:1.82rem;color:#fff">
      <div class="list">
        <p style="font-size:0.38rem;
            font-weight: bold;">1 折购闪充套装</p>
        <span>
          购买 OPPO Reno，即享 1 折购闪充套装（闪充电源适配器 + 闪充数 据线 + 车载闪充或。
          <br>时间：4/19-4/28
        </span>
      </div>
      <input type="text" placeholder="输入核销码" class="cancelCode">
      <mt-button class="confirm">立即核销</mt-button>
    </div>
    <mt-button class="confirm" v-show="welfareType!='oneWefare'" @click="handleConfirm">领取福利资格</mt-button>
    <img src="../assets/product.png" class="productImg" alt>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      urlTitle: "21BSQOEWDSSSDRTQOML",
      welfareType: "twoWelfare"
    };
  },
  created() {
    //   console.log(QRCode)
    if (this.welfareType == "cancel") {
      QRCode.toDataURL(this.urlTitle)
        .then(url => {
          console.log(this.$refs.qrcode);
          this.$refs.qrcode.src = url;
          console.log(url);
        })
        .catch(err => {
          console.error(err);
        });
    }

    //   this.qrcode()
  },
  methods: {
    handleConfirm() {
      this.$router.push({name:"activeWelfare",params:{
          welfareType:this.welfareType
      }});
    },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 100,
        height: 100, // 高度
        text: "56663159" // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
      console.log(qrcode);
    }
  }
};
</script>

<style lang='less'>
.vipWefare {
  text-align: center;
  position: relative;
  height: 18.47rem;
  padding: 0 1.3rem;
  .cancelCode {
    border: none;
    outline: none;
    width: 7.3rem;
    height: 0.98rem;
    margin-top: 1.6rem;
    padding: 0 2.43rem;
    box-sizing: border-box;
    color: #b5b5b6;
    font-size: 0.48rem;
    border-radius: 0.49rem;
  }
  .confirm {
    color: #1bc9be;
    position: absolute;
    border-radius: 0.49rem;
    font-size: 0.46rem;
    font-weight: bold;
    bottom: 6.39rem;
    left: 3.34rem;
  }
  .title {
    font-size: 0.78rem;
    color: #fff;
    border-bottom: 0.05rem solid #fff;
    padding-bottom: 0.1rem;
    margin-bottom: 0.1rem;
    display: inline-block;
  }
  .titleSmall {
    display: inline-block;
    color: #fff;
    font-size: 0.56rem;
  }
  .productImg {
    position: absolute;
    width: 6.61rem;
    height: 4.92rem;
    bottom: 0;
    left: 2.09rem;
  }
  .wefareList {
    text-align: left;
    margin-top: 1.38rem;
    font-size: 0.36rem;
    color: #fff;
    position: relative;
  }
  p {
    font-size: 0.38rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
  }
  .list {
    margin-bottom: 0.5rem;
    span {
      font-size: 0.36rem;
    }
  }
}
</style>
