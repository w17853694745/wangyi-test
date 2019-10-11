<template>
  <div class="container" :class="inputValue.length>0?'active':''">
    <!-- <Header/> -->
    <div class="wrapper">
      <div class="left">
        <i class="icon"></i>
        <input type="text" placeholder="搜索更多好物" @input="inputChange($event)" v-model="inputValue">
        <i class="icon2" v-if="inputValue.length>0" @click="inputValue = ''"></i>
      </div>
      <div class="right">
        <span @click="cancel">取消</span>
      </div>
    </div>
    <!-- 热门搜索 -->
    <HotSearch v-if="!inputValue.length"/>
    <!-- 搜索列表 -->
    <DataList v-if="inputValue.length"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/Header/Header'
  import HotSearch from './components/HotSearch/HotSearch'
  import DataList from './components/DataList/DataList'
  import _ from 'lodash'
  import {mapState} from 'vuex'
  export default {
    components:{
      Header,
      HotSearch,
      DataList
    },
    data() {
      return {
        inputValue:""
      }
    },
    computed: {
      ...mapState({
        seacherList:state=>state.home.seacherList
      })
    },
    methods: {
      cancel(){
        this.$router.replace("/home")
      },
      inputChange(e){
        let flag = false
        if (!this.flag) {
          this.flag = true    
          setTimeout(() => {
            let value = e.target.value
            this.$store.dispatch("getSeacherList",value)
            this.flag = false
          }, 500);      
        }else{
          return
        }


        var inputChanges = _.throttle(function () {
          
        }, 10000)
      }
    },
    mounted() {
      
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background #eee
    width 100%
    height 1247px
    &.active
      height 1333px
    .wrapper
      height 88px
      width 100%
      padding 0 30px
      box-sizing border-box
      display flex
      align-items center
      background white
      .left
        display flex
        height 56px
        width 604px
        padding 0 20px
        background #f4f4f4
        display flex
        align-items center
        box-sizing border-box
        .icon
          display inline-block
          width 30px
          height 28px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
          background-size 28px 28px 
          background-repeat no-repeat
          vertical-align:middle
          margin-right 20px
        .icon2
          display inline-block
          width 50px
          height 50px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-0821f71561.png) 
          background-size 50px 100% 
          margin-right 10px 
        input
          border none  
          background #f4f4f4
          width 100%
          border-radius 10px
          height 56px
          width 604px
          font-size 28px 
      .right
        display flex
        align-items center
        span
          color #333333
          font-size 28px
          margin-left 30px
</style>
