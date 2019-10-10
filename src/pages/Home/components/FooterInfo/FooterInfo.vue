<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <span class="left">下载APP</span>
        <span class="right">电脑版</span>
      </div>
      <div class="footer">
        <p>网易公司版权所有 © 1997-2019</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .container
    width 100%
    height 244px
    margin-top -10px 
    .wrapper
      width 100%
      height 244px
      padding 54px 20px 28px
      box-sizing border-box
      background #414141
      text-align center
      .header
        display flex
        color #fff
        justify-content center
        margin-bottom 30px 
        .left
          width 172px
          height 62px
          text-align center
          line-height 62px
          margin-right 50px 
          border 2px solid #999
          border-radius 5px
        .right
          width 172px
          height 62px
          border 2px solid #999
          text-align center
          line-height 62px 
          border-radius 5px

      .footer   
        color #999 
</style>
