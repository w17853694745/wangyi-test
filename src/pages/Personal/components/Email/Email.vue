<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <div class="img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>
      <div class="center">
        <div class="inputs">
          <div class="phone">
            <input type="text" placeholder="邮箱账号">
          </div>
          <div class="code">
            <input type="text" placeholder="密码">
          </div>
        </div>
        <div class="pwd">
          <span class="problem">
            注册账号
          </span>
          <span class="usepwd">
            忘记密码
          </span>
        </div>
        <div class="login">
          登录
        </div>
      </div>
      <div class="footer">
        <div class="other" @click="change('0')">
          <a>
            其他登录方式
          </a>
          <i class="icon">

          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["changeType"],
    methods: {
      change(num){
        this.changeType(num)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .container
    width 100%
    padding-top 88px
    .wrapper
      width 100%
      .header
        width 100%
        height 64px
        margin-top 56px 
        .img
          width 100%
          height 64px
          text-align center
          img
            width 192px
            height 64px
            display inline-block
      .center
        width 100%  
        padding 160px 40px 0   
        box-sizing border-box
        font-size 28px
        color #7f7f7f
        .inputs
          width 100%
          .phone
            width 100%
            padding 20px 0
            bottom-border-1px(#7f7f7f)
            input
              width 100%
              border none 
              &::-webkit-input-placeholder 
                color #7f7f7f
                font-size 28px

          .code
            width 100%
            margin-top 30px 
            padding 20px 0
            bottom-border-1px(#7f7f7f)
            position relative
            input
              width 100%
              border none
              &::-webkit-input-placeholder 
                color #7f7f7f
                font-size 28px
        .pwd
          display flex
          justify-content space-between
          margin 40px 0   
          .problem
            color #7f7f7f
            font-size 28px 
          .usepwd
            color #7f7f7f
            font-size 28px  
        .login
          width 100%
          height 91px
          background #DD1A21
          color rgba(225,225,225,.5)
          text-align center 
          line-height 91px
          font-size 28px   
          margin-bottom 20px
      .footer
        width 100% 
        padding 0 40px   
        margin-top 60px  
        box-sizing border-box 
        .other
          display flex
          align-items center
          justify-content center
          a
            font-size 28px
            color #333
          .icon
            width 28px
            height 28px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png  )        
            background-size 100% 100%  
</style>
