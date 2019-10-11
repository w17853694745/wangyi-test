<template>
  <div class="container">
      <div class="wrapper">
        <div class="left">
          <i class="icon1"></i>
          <input type="text" placeholder="搜索更多好物">
          <i class="icon2"></i>
        </div>
        <div class="right">
          <span @click="cancel">取消</span>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      cancel(){
        this.$router.replace("/home")
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    position fixed
    left 0
    top 0
    width 100%
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
        .icon1
          display inline-block
          width 40px
          height 28px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
          background-size 28px 28px 
          background-repeat no-repeat
          vertical-align:middle
          margin-right 20px
        input
          border none  
          background #f4f4f4
          width 100%
          border-radius 10px
      .right
        display flex
        align-items center
        span
          color #333333
          font-size 28px
          margin-left 30px 

</style>
