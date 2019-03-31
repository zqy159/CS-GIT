<template>
  <div class="rulePageWrap">
    <div class="rulePage">
      <h1>活动规则</h1>
      <div class="ruleContent">
        <ul>
          <li><span>1.</span>活动对象：1折购闪充套装及VIP新品专享会仅限OPPO金卡或钻卡会员专享，美味金卡或钻卡会员可享受以上所有福利，每种福利仅限一次</li>

          <li><span>2.</span>以旧换新补贴规则:现场回收旧款手机并购买0PP0 Reno, 普通品牌旧机最高额外补贴400元. R系列老机型最高额外补贴500元</li>

          <li><span>3.</span>1折购闪充套装内容:金卡、 钻卡用户购买0PP0 Reno即可1折购闪充电源适配器+闪充数据线+车载闪充或闪电充电源适配器+闪充数据线+ O-Fresh耳机(根据门店具体库存与用户偏好,在车载闪充与O-Fresh耳机中二选一) ;</li>
          <li>
            <span>4.</span>1折购闪充套装权益兑换流程:登录活动页面完成报名→获
            得权益二维码→至活动门店购买 OPP0 Reno→出示权
            益二维码现场兑换1折购权益;
          </li>
          <li><span>5.</span>活动门店：仅限制定OPPO门店，具体门店清单以活动页面门店列表为准;</li>
          <li><span>6.</span>退换货说明：在国家三包规定的退货时间内，发生退换货行为（退或者换掉 OPPO Reno 手机），需将相应的1折购闪充套装一同退回;</li>
          <li><span>7.</span>其它说明：活动过程中，凡以不正当手段（如作弊领取，恶意套取，虚假交易，扰乱系统等）参与本次活动的用户，OPPO有权终止其参与行为。并取消其活动资格（如已换购1折购产品,OPPO有权追回）；如遇不可抗力（包括但不限于重大灾难事件、活动受政府机关指令需要停止举办或调增的、活动中存在大面积作弊行为、活动遭受严重网络攻击或因系统故障导致活动核销系统出错等影响活动正常进行的突发事件），OPPO有权取消、修改或暂停本活动）</li>
          <li><span>8.</span>如有活动方面的疑问，宁可以拨打OPPO官方客服电话4001666888 咨询：</li>
        </ul>
      </div>
      <mt-button type="primary" class="confirm" @click="handleConfirm">确定</mt-button>
    </div>
  </div>
</template>
welfare
<script>
export default {
  name: "rulePage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleConfirm() {
      console.log(this.$router);
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.rulePageWrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("../assets/active-bg.jpg") no-repeat 100% 100%;
  background-size: 100%;

  .rulePage {
    position: relative;
    margin: 0.86rem 0.8rem;
    padding-top: 0.77rem;
    background-color: rgba(255, 255, 255, 0.55);
    border-radius: 0.22rem;
    height: 18.84rem;
    text-align: center;
    box-sizing: border-box;
  }
  h1 {
    font-size: 0.64rem;
    color: #1bc9be;
  }
  .ruleContent {
    overflow: auto;
    text-align: left;
    height: 14.52rem;
    padding: 0 0.51rem;
    margin-top: 0.77rem;
    li {
      list-style: none;
      display: flex;
      font-size:0.3rem;
      margin-bottom: 0.4rem;
      span{
        display:inline-block;
        padding-right:0.1rem;
      }
    }
  }
  .confirm {
    color: #fff;
    position: absolute;
    left: 2.54rem;
    bottom: 0;
    font-size: 0.46rem;
    border-radius: 0.49rem;
    background: #1bc9be;
    margin-bottom: 0.64rem;
  }
}
</style>
