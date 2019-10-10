<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <div class="img">
        </div>
      </div>
      <div class="button">
        <div class="text">
          去添加点什么吧
        </div>
        <div class="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 1100px
    .wrapper
      width 100%
      position relative
      .header
        width 100%
        height 300px
        display flex
        justify-content center
        position absolute
        top 380px
        padding-bottom 5px
        .img
          width 248px
          height 248px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)  
          background-size 100% 100%  
      .button  
        width 100%
        height 175px
        text-align center
        position absolute
        top 610px
        display flex
        flex-direction column
        justify-content space-between
        .text
          font-size 28px 
          color #999   
        .login
          width 480px
          height 92px
          background #b4282d
          text-align center
          line-height 92px
          margin 0 auto
          color #fff   
          font-size 30px   
          

</style>
