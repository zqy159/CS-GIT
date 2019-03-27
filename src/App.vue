<template>
  <div id="app">
    <div class="ActiveWelfareWrap">
      <span class="activeRule" @click="handleRule" v-if="this.$route.path!='/rulePage'"> 活动规则 》</span>
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    handleRule(){
          this.$router.push('/rulePage')
    },
  }

}
</script>

<style lang='less'>
*{
  margin:0;
  padding: 0;
}
a,input,label{-webkit-tap-highlight-color:rgba(255,255,255,0);vertical-align: middle;}
body,html{
  height: 20.56rem;
  width: 10.8rem;
}
#app {
  height: 100%;
  width: 100%;
  font-size: 0.42rem;
}
.ActiveWelfareWrap {
  height: 100%;
  width: 100%;
  background: url("./assets/active-bg.jpg") no-repeat 100% 100%;
  background-size: 100%;
  overflow: hidden;
  .activeRule {
    color: #fff;
    font-size: 0.36rem;
    display: inline-block;
    margin: 0.99rem 0 1.33rem 1.27rem;
  }
}
.mint-button--normal{
  width: 4.12rem;
  height: 0.98rem;
}
</style>
