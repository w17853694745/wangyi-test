<template>
  <div class="header">
    <div class="wrapper-header" :class="isFinds?'':'active'">
      <div class="main">
        <div class="left">
          <a href="javascipt:" @click="Toroute('home')">

          </a>
        </div>
        <div class="center">
          <span :class="{active:isFinds}" @click="changeType(true)" >发现</span>
          <span :class="{active:!isFinds}" @click="changeType(false)" >甄选家</span>
        </div>
        <div class="right">
          <i class="search" @click="Toroute('search')">

          </i>
          <i class="shopCar" @click="Toroute('shopCar')">

          </i>
        </div>
      </div>
    </div>
    <div class="wrapper-bottom" v-if="isFinds">
      <div class="main">
        <div class="main-item" :class="currIndex == index?'active':''"  v-for="(tab, index) in tabList" :key="index" @click="currIndex = index">
          {{tab.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    methods: {
      Toroute(route){
        this.$router.push("/"+route)
      },
      changeType(flag){
        this.isFinds = !this.isFinds
        this.$store.dispatch("changeThingsType",this.isFinds)
        if (flag) {
          this.$router.replace("/things/recommend")
        }else{
          this.$router.replace("/things/selection")
        }
      },
      // 问题:当没有wrapper-bottom的时候,刷新会报错,而且来回切换路由也会失效
      mountedIsFind(){
        let isFind = this.$route.path=="/things/recommend"?true:false
        this.$store.dispatch("changeThingsType",isFind)
      }
    },
    computed: {
      ...mapState({
        isFind:state=>state.things.isFind
      })
    },
    data() {
      return {
        tabList:[
          {
            name:"推荐"
          },
          {
            name:"好货内部价"
          },
          {
            name:"晒单"
          },
          {
            name:"选购指南"
          },
          {
            name:"回购榜"
          },
          {
            name:"达人"
          },
          {
            name:"HOME"
          }
        ],
        currIndex:0,
        isFinds:this.$route.path == "/things/recommend"
      }
    },
    watch: {
      isFinds(value){
        if (value) {
          this.$nextTick(()=>{
            this.bScroll = new BScroll(".wrapper-bottom", {
              click: true,
              scrollX: true,
              scrollY:false
            })
          })
        }
      }
    },
    mounted() {
      this.mountedIsFind()
      if (this.isFinds) {
        this.$nextTick(()=>{
          if(!this.bScroll){
            this.bScroll = new BScroll(".wrapper-bottom", {
              click: true,
              scrollX: true,
              scrollY:false
            })
          }else{
            this.bScroll.refresh()
          }
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    position fixed
    left 0
    top 0
    background white
    z-index 100
    .wrapper-header
      width 100%
      height 100px
      padding 0 22px
      box-sizing border-box
      border-bottom 1px solid #d9d9d9 
      &.active
        height 88px
      .main
        display flex
        align-items center
        justify-content space-between
        height 100%
        position relative
        .left
          width 48px
          height 44px
          a
            display inline-block
            width 48px
            height 44px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
            background-repeat no-repeat
            background-size 160px 380px  
            background-position-y -68px
        .center
          width 320px
          height 54px
          line-height 54px
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          margin auto auto
          text-align center
          span 
            font-size 28px
            color #7f7f7f
            padding 0 16px
            &.active
              font-size 40px
              color #b4282d
              font-weight bold
        .right
          width 148px
          height 64px
          display flex
          align-items center
          justify-content space-between
          padding 0 7px
          box-sizing border-box
          .search
            display inline-block
            width 48px
            height 44px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
            background-repeat no-repeat
            background-size 170px 410px  
            background-position -10px -355px
          .shopCar
            display inline-block
            width 48px
            height 44px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
            background-repeat no-repeat
            background-size 170px 410px  
            background-position -10px -10px 
    .wrapper-bottom
      height 72px
      padding 0 0 0 20px
      box-sizing border-box
      border-bottom 1px solid #d9d9d9    
      .main
        display flex
        align-items center
        white-space nowrap
        padding-bottom 12px    
        height 80px
        box-sizing border-box
        position absolute
        width 1000px
        .main-item
          display inline-block
          font-size 28px
          color #7f7f7f
          margin 0 20px
          padding 0px 10px 0px
          height 72px
          line-height 80px
          border-bottom 4px solid #fafafa
          box-sizing border-box
          &.active
            color #B4282D
            border-bottom 4px solid #B4282D
   

</style>
