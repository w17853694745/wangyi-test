<template>
  <div class="container">
    <div class="wrapper">
      <div class="main">
        <div class="left">
          <a href="javascipt:" @click="Toroute('home')">

          </a>
        </div>
        <div class="center">
          <i></i>
        </div>
        <div class="right">
          <i class="search" @click="Toroute('search')">

          </i>
          <i class="shopCar" @click="Toroute('shopCar')">

          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      Toroute(route){
        this.$router.push("/"+route)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    position fixed
    left 0
    top 0
    background #fafafa
    .wrapper
      width 100%
      height 88px
      padding 0 22px
      box-sizing border-box
      .main
        display flex
        align-items center
        justify-content space-between
        height 88px
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
            background-size 180px 420px  
            background-position-y -74px
        .center
          width 172px
          height 54px
          line-height 54px
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          margin auto auto
          i
            display inline-block
            width 172px
            height 54px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
            background-repeat no-repeat
            background-size 165px 430px  
            background-position-y -130px 
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

</style>
