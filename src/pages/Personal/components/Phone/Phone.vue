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
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="code">
            <input type="text" placeholder="请输入短信验证码">
            <span class="obtain">
              获取验证码
            </span>
          </div>
        </div>
        <div class="pwd">
          <span class="problem">
            遇到问题?
          </span>
          <span class="usepwd">
            使用密码验证登录
          </span>
        </div>
        <div class="login">
          登录
        </div>
        <div class="ok">
          <span class="cheack">
            <input id="allChecked" type="checkbox"/>
          </span>
          <span> 我同意 </span>
          <span class="color">《服务条款》</span>
          <span> 和 </span>
          <span class="color">《网易隐私政策》</span>

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
        padding 65px 40px 0   
        box-sizing border-box
        font-size 28px
        color #7f7f7f
        .inputs
          width 100%
          .phone
            width 100%
            padding 30px 0
            bottom-border-1px(#7f7f7f)
            input
              width 100%
              border none 
          .code
            width 100%
            margin-top 30px 
            padding 30px 0
            bottom-border-1px(#7f7f7f)
            position relative
            input
              width 100%
              border none
            .obtain
              width 168px
              height 53px
              display inline-block
              border 2px solid #7F7F7F
              border-radius 10px 
              text-align center
              line-height 57px  
              position absolute    
              right 20px
              top 20px 
        .pwd
          display flex
          justify-content space-between
          margin 40px 0   
          .problem
            color #7f7f7f
            font-size 28px 
          .usepwd
            color #333333
            font-size 28px  
        .login
          width 100%
          height 91px
          background #DD1A21
          color white
          text-align center 
          line-height 91px
          font-size 28px   
          margin-bottom 20px
        .ok
          width 100%   
          font-size 12px
          color #7f7f7f
          span
            &:nth-child(2)
              margin-left 10px 
            &.color
              color #007AFF 
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
