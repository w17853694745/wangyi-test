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
            <input type="text" placeholder="请输入手机号" v-model="phone">
            <i class="icon" @click="phone=''" v-if="phone.length>0"></i>
          </div>
          <div class="code">
            <input type="text" placeholder="请输入短信验证码" v-model="phoneCode">
            <span class="obtain" @click="ObtainCode">
              获取验证码
            </span>
          </div>
        </div>
        <div class="Verification" v-if="errType!==0">
          <span>{{errType==1?"手机号格式错误":"请输入正确的手机号和验证码"}}</span>
        </div>
        <div class="pwd">
          <span class="problem">
            遇到问题?
          </span>
          <span class="usepwd">
            使用密码验证登录
          </span>
        </div>
        <div class="login" @click="login">
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
    data() {
      return {
        phone:'',
        phoneCode:'',
        errType:0, //错误类型 0:没有错误; 1:手机号格式错误; 2:验证码错误
      }
    },
    methods: {
      change(num){
        this.changeType(num)
      },
      login(){
        let {phoneCode} = this
        //如果不是正常状态,或者验证码长度不等于6,返回错误
        if (phoneCode.length!==6) {
          this.errType = 2
          console.log(this.errType,phoneCode.length)
        }else{
          this.errType = 0
        }

        //登录
        if (this.errType==0 && phoneCode.length==6) {
          console.log("登录")   
          this.errType = 0 
        }
      },
      ObtainCode(){
        let {phone} = this
        let exp = /^1[3456789]\d{9}$/
        if (!exp.test(phone)) {
          this.errType = 1
          return
        }else{
          console.log("发送手机验证码")
          this.errType = 0
        }
        
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
            padding 20px 0
            bottom-border-1px(#7f7f7f)
            box-sizing border-box
            input
              width 100%
              height 44px
              border none 
              font-size 32px
              color #333
            i
              display inline-block
              margin-bottom 10px 
              width 53px
              height 53px
              background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAp1JREFUSA29lr9v2kAUx8/mh0BCMGQAxRMC0REKqtQOVafskeiUvyVj/pYubaXsnaoMrVRBYUD8WMqAUwnhCQkGI+j7XnyXs302kJCeZHz33rv34fne3T2DHdB6vd7r7XZ7Sc97MrcMwzjHtN1ud08v2zTNO3puG43Gb8jjmhGn7Ha7HwlyQzav4uwU3ZjA181m84si83W1wH6/X95sNp8ogrc+6wMH9AV+JpPJq3q9/ic4JQSkqD5QVF/J8CxofOTYoWjbFO13dZ4P6MG+kUFKNXpG3yXohQqVQHxG13V/kfPnRhb8f04qlXojPq8ptFizF4DB/Znnm6M4ENn41AThXvb8wDcYMONAL/W109LpNCuVSoyyTqsXwmw2y4rFIqMMFSLfWzAMbGoKuevTKgPALMti6/WaTSYTRraK9qGby+VYtVpliUSCDYdDtlqtQjYQ0J9umkS+1Go94WKx4DBEUKvVQpGqMMdxImFwBxaAOK4iGyJCZIgwCA3CptNppB8owMIaWrFWpNRBC4WC/IyIbB/MY1imOIiPhVYqFb5mR8CQUOdyH+4DQo9IbdvGLcGzEePZbHbIVG5D83YmPbhiDmpYs3K5LGHYKrpEinH2FxHaMQZSFUyQwWCgTSQ5Qd/B3Wne6XWP0iAMCaJLpH2HA1gA3j66DvewFcSmDiaIDkr+wk48CVimVxaMo6zy+XxsNgahmUwmytUYLH5AEvmaNuVnneV8PmfL5TL2BAF0NBoxwKKONTDgX560nU7nB2Xsk0oK3R9VZSg5Wq3WO8jkB6cFv6KxoxqeqO94vrk7CcSNTGG3SeqeCAQ3KDHa4raHQAIxQO1BBhfUPUWkKKJ89QwYcg0xEO2/lokCijfKAsrely+EVSj6pyz1/wFrT2LaPTPA3AAAAABJRU5ErkJggg==")    
              background-size 50% 50%
              background-repeat no-repeat
              background-position 10px 10px
              position absolute
              right 0
              bottom 0    
              
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
        .Verification
          width 100%   
          height 40px
          font-size 24px
          color #DD1A21  
          margin-top 10px      
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
          border-radius 5px 
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
