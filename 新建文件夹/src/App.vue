<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body,html{
  height: 20.56rem;
  width: 10.8rem;
}
#app {
  height: 100%;
  width: 100%;
  font-size: 0.42rem;
}
.mint-button--normal{
  width: 4.12rem;
  height: 0.98rem;
}
</style>
