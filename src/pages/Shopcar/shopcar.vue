<template>
  <div class="shopcar">
    <Header/>
    <!-- 服务 -->
    <Service/>
    <!-- 购物车内容 -->
    <Main/>
    <FooterNav/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/Header/Header'
  import FooterNav from '../../components/FooterNav/FooterNav'
  import Service from './components/Service/Service'
  import Main from './components/Main/Main'
  export default {
    components:{
      FooterNav,
      Header,
      Service,
      Main
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopcar
    padding-top 88px
    background #f4f4f4
    width 100%
    height 100%
</style>
