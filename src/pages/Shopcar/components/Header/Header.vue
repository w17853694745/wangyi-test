<template>
  <div class="container">
    <div class="wrapper">
      <div class="left">
        <span>购物车</span>
      </div>
      <div class="right">
        <span>领券</span>
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
    position fixed
    left 0
    top 0
    width 100%
    .wrapper
      width 100%
      height 88px
      background #fff 
      display flex
      justify-content space-between
      padding 0 30px
      box-sizing border-box
      .left
        font-size 36px
        line-height 88px
      .right
        font-size 30px
        color #B4282D
        line-height 88px
        margin-right 30px     
          
</style>
