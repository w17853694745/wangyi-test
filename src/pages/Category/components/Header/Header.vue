<template>
  <div class="container">
    <div class="wrapper">
      <div class="main">
        <div class="center">
          <i class="icon"></i>
          <span class="text">搜索商品, 共23047款好物</span>
        </div>
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
    position fixed
    left 0
    top 0
    width 100%
    z-index 100
    .wrapper
      width 100%
      height 88px
      padding 0 30px 
      box-sizing border-box
      display flex
      align-items center
      background #fff
      bottom-border-1px(#d9d9d9)
      .main
        width 100%
        height 56px
        background #EDEDED
        border-radius 10px 
        .center
          display flex
          justify-content center
          align-items center
          line-height 56px
          font-size 28px
          color #666666
          .icon
            width 28px
            height 28px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
            background-size 100% 100%
            display inline-block
            margin-right 10px 

</style>
