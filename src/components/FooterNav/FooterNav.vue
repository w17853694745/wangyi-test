<template>
  <footer id="footer_box">
    <ul class="footer_nav">
      <li class="item" :class="{active: $route.path === '/home'}" @click="goHome">
        <i class="u-icon" :class="$route.path === '/home' ? 'u-icon-tabBar-index-active' : 'u-icon-tabBar-index'"></i>
        <span class="text">首页</span>
      </li>
      <li class="item" :class="{active: $route.path.includes('/category')}" @click="goCategory">
        <i class="u-icon" :class="$route.path.includes('/category') ? 'u-icon-tabBar-cate-active' : 'u-icon-tabBar-cate'"></i>
        <span class="text">分类</span>
      </li>
      <li class="item" :class="{active: $route.path.includes('/things')}" @click="goThings">
        <i class="u-icon" :class="$route.path.includes('/things') ? 'u-icon-tabBar-topic-active' : 'u-icon-tabBar-topic'"></i>
        <span class="text">识物</span>
      </li>
      <li class="item" :class="{active: $route.path === '/shopcar'}" @click="goShopcar">
        <i class="u-icon" :class="$route.path === '/shopcar' ? 'u-icon-tabBar-cart-active' : 'u-icon-tabBar-cart'"></i>
        <span class="text">购物车</span>
      </li>
      <li class="item" @click="goPersonal">
        <i class="u-icon" :class="$route.path === '/personal' ? 'u-icon-tabBar-ucenter-active' : 'u-icon-tabBar-ucenter'"></i>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'FooterNav',
    data () {
      return {
      }
    },
    methods: {
      goThings(){
        if (this.$route.path!=="/things/recommend") {
          this.$router.replace('/things')          
        }else{
          return
        }
      },
      goHome(){
        if (this.$route.path!=="/home") {
          this.$router.replace('/home')          
        }else{
          return
        }
      },
      goCategory(){
        if (this.$route.path!=="/category") {
          this.$router.replace('/category')          
        }else{
          return
        }
      },
      goShopcar(){
        if (this.$route.path!=="/shopcar") {
          this.$router.replace('/shopcar')          
        }else{
          return
        }
      },
      goPersonal(){
        if (this.$route.path!=="/personal") {
          this.$router.replace('/personal')          
        }else{
          return
        }
      },
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  /*底部导航*/
  #footer_box
    position fixed
    left 0
    bottom: 0
    width 100%
    height: 100px
    background-color: $footerBgc
    border-top: 0.75px solid $borderBgc
    z-index 200
  
    .footer_nav
      width 100%
      height: 100%
      display flex
      align-items center
      
      .item
        flex 1
        text-align center
        color #333
      
        &.active
          color #b4282d
      
        .u-icon
          display inline-block
          margin-bottom 15px
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
      
        .u-icon-tabBar-index
          background-position: 0 -250px
      
        .u-icon-tabBar-index-active
          background-position: 0 -200px
      
        .u-icon-tabBar-cate
          background-position: 0 -150px
      
        .u-icon-tabBar-cate-active
          background-position: 0 -100px
      
        .u-icon-tabBar-topic
          background-position: 0 -350px
      
        .u-icon-tabBar-topic-active
          background-position: 0 -300px
  
        .u-icon-tabBar-cart-active
          background-position: 0 0
          
        .u-icon-tabBar-cart
          background-position: 0 -50px
          
        .u-icon-tabBar-ucenter
          background-position: 0 -450px
  
        .u-icon-tabBar-ucenter-active
          background-position: 0 -400px
      
        .text
          display block
          font-size 24px
          margin-top -15px
</style>
