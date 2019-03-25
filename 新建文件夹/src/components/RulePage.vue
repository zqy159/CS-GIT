<template>
  <div class="rulePageWrap">
    <div class="rulePage">
      <h1 >活动规则</h1>
      <div class="ruleContent">
        <!-- <img src="@/assets/rule.png" alt="" style="width:400px;height:400px"> -->
        <ul>
          <li>1.</li>
          <li>2.</li>
        </ul>
      </div>
      <mt-button type="primary" class="confirm" @click="handleConfirm">确定</mt-button>
    </div>
    
  </div>
</template>
welfare
<script>
export default {
  name: 'rulePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleConfirm(){
      console.log( this.$router)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.rulePageWrap{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("../assets/active-bg.jpg") no-repeat 100% 100%;
  background-size: 100%;
  
  .rulePage{
    position: relative;
    margin:0.86rem 0.8rem;
    padding-top:0.77rem;
    background-color:rgba(255,255,255,0.55);
    border-radius:0.22rem;
    height: 18.84rem;;
    text-align: center;
    box-sizing: border-box;
  }
  h1{
    font-size:0.64rem;
    color:#1bc9be;
  }
  .ruleContent{
    text-align: left;
    padding:0 0.51rem;
    margin-top:0.77rem;
    li{
      list-style: none;
      margin-bottom:0.4rem;
    }
  }
  .confirm{
      color:#fff;
      position: absolute;
      left:3rem;
      bottom:0;
      font-size:0.46rem;
      border-radius:0.49rem;
      background: #1bc9be;
      margin-bottom:0.64rem;
  }
}
</style>
