<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <span>热门搜索</span>
      </div>
      <div class="main">
        <div class="main-item" v-for="(category, index) in seacherDataList()" :key="index" :class="category.hidden!==0?'active':''">{{category.keyword}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import _ from 'lodash'
  export default {

    computed: {
      ...mapState({
        seacherData:state=>state.home.seacherData
      }),
      
    },
    methods: {
      seacherDataList(){
        let arr = this.seacherData
        arr = _.shuffle(arr)
        arr = arr.splice(0,9)
        return arr
      }
    },
    async mounted() {
      await this.$store.dispatch("getSeacherData")
      this.$nextTick(()=>{
        this.seacherDataList()
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background white
    .wrapper
      width 100%
      padding 0 30px
      box-sizing border-box 
      background white
      .header
        width 100%
        height 90px
        color #999999
        font-size 28px
        line-height 90px  
      .main
        display flex
        flex-wrap wrap 
        background white 
        .main-item
          color #333333
          font-size 24px
          border 2px solid rgba(0,0,0,.3)
          padding 0 15px
          height 47px
          text-align center
          line-height 47px
          border-radius 5px 
          margin 0 32px 32px 0
          &.active
            color #b4282d
            border 2px solid #b4282d



</style>
