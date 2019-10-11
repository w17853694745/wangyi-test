<template>
  <div class="dataList">
    <div class="wrapper">
      <div class="item" v-for="(seacher, index) in seacherList" :key="index">
        <span>{{seacher}}</span>
      </div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        seacherList:state=>state.home.seacherList
      })
    },
    mounted() {
      this.$nextTick(()=>{
        console.log(this.seacherList)
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dataList
    width 750px
    background white
    .wrapper
      width 100%
      padding-left 30px
      box-sizing border-box
      .item
        width 100%
        height 91px
        display inline-block
        line-height 84px
        position relative
        &::after
          position absolute
          content ""
          width 100%
          height 2px
          left 0
          bottom 0px
          background #eee
        span
          display inline-block
          width 100%
          height 42px
          line-height 102px
          font-size 28px
          color #333 

</style>
