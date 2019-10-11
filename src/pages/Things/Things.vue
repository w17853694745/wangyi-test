<template>
  <div class="container">
    <keep-alive>
    <Header/>
    </keep-alive>
    <!-- 分割条 -->
    <div class="split" v-if="isFind">
    </div>
    <!-- 发现-推荐 -->
    <!-- <Recommend v-if="isFind"/> -->
    <!-- 甄选家 -->
    <!-- <Selection v-if="!isFind"/> -->
    <router-view></router-view>
    <FooterNav/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav/FooterNav'
  import Header from './components/Header/Header'
  import Recommend from './components/Recommend/Recommend'
  import Selection from './components/Selection/Selection'
  import {mapState} from 'vuex'
  export default {
    components:{
      FooterNav,
      Header,
      Recommend,
      Selection
    },
    computed: {
      ...mapState({
        isFind:state=>state.things.isFind
      })
    },
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
