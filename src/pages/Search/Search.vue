<template>
  <div class="container">
    <Header/>
    <HotSearch/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/Header/Header'
  import HotSearch from './components/HotSearch/HotSearch'
  export default {
    components:{
      Header,
      HotSearch
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background #eee
</style>
