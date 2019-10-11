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
          <div class="code">
            <input type="text" placeholder="邮箱账号" v-model="code">
            <i class="icon" @click="code=''" v-if="code.length>0"></i>
          </div>
          <div class="password">
            <input type="password" placeholder="密码" v-model="pwd" >
            <i class="icon" @click="pwd=''" v-if="pwd.length>0"></i>
          </div>
        </div>
        <div class="Verification" v-if="errType!==0">
          <span>{{errType==1?"邮箱格式错误":"密码格式错误"}}</span>
        </div>
        <div class="pwd">
          <span class="problem">
            注册账号
          </span>
          <span class="usepwd">
            忘记密码
          </span>
        </div>
        <div class="login" @click="login">
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
    data() {
      return {
        errType:0, //正则错误类型: 0没有错误; 1:账号格式错误; 2:密码格式错误
        code:"", //邮箱账号
        pwd:"", //邮箱密码
      }
    },
    methods: {
      change(num){
        this.changeType(num)
      },
      login(){
        let {code,pwd} = this
        //邮箱验证
        let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        //密码验证
        let regPwd = /^([a-zA-Z]|[0-9]){6,20}$/
        if (!regEmail.test(code)) {
          this.errType = 1
          return
        }else if (!regPwd.test(pwd)) {
          console.log("1")
          this.errType = 2
          return
        }
        console.log("登录成功")
        this.errType = 0
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
        padding 170px 40px 0   
        box-sizing border-box
        font-size 28px
        color #7f7f7f
        .inputs
          width 100%
          .code
            width 100%
            box-sizing border-box
            padding 10px 0 20px
            bottom-border-1px(#7f7f7f)
            position relative
            input
              width 100%
              height 43px
              border none 
              &::-webkit-input-placeholder 
                color #7f7f7f
                font-size 28px
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
               
          .password
            width 100%
            margin-top 30px 
            box-sizing border-box
            padding 20px 0
            bottom-border-1px(#7f7f7f)
            position relative
            input
              width 100%
              border none
              &::-webkit-input-placeholder 
                color #7f7f7f
                font-size 28px
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
            color #7f7f7f
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
