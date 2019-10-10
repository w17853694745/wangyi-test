<template>
  <div class="container">
    <Header/>
    <!-- 分割条 -->
    <div class="split">
    </div>
    <!-- 发现-推荐 -->
    <Recommend/>
    <FooterNav/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav/FooterNav'
  import Header from './components/Header/Header'
  import Recommend from './components/Recommend/Recommend'
  export default {
    components:{
      FooterNav,
      Header,
      Recommend
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    .split
      padding-top 152px 
      width 100%
      height 10px
      background rgba(0,0,0,.05)
</style>
