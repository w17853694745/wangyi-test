<template>
  <div class="container">
    <div class="wrapper">
      <div class="left">
        <div class="header">
          <div class="avatar">
            <img :src="topic.avatar" alt="">
          </div>
          <div class="name">
            <span>{{topic.nickname}}</span>
          </div>
        </div>
        <div class="text">
          <span>{{topic.title}}</span>
        </div>
        <div class="info">
          <span>{{topic.subTitle}}</span>
        </div>
        <div class="look">
          <i class="icon">

          </i>
          <span>{{convert}}人看过</span>
        </div>
      </div>
      <div class="right">
        <img :src="topic.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 带头像的左右
    props:["topic"],
    computed: {
      convert:function() {
        let num = this.topic.readCount
        if(num>=10000){
          num = Math.floor(Math.ceil(num/1000)/10)+"w"
        }else if(num>=1000){
          num = Math.floor(Math.ceil(num/1000)/10)+"k"
        }else{
          num = num
        }
        return num;
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    padding 20px 30px 36px
    margin 20px 0
    box-sizing border-box
    border-bottom 20px solid rgba(0,0,0,.05)
    .wrapper
      width 100%
      display flex
      justify-content space-between
      .left
        width 400px
        .header
          width 100%
          height 56px
          display flex
          align-items center
          margin-bottom 20px 
          .avatar
            width 54px
            height 54px
            margin-right 15px 
            img 
              width 54px
              height 54px
              border-radius 50%
          .name
            font-size 28px   
        .text
          font-size 36px
          color #333
        .info
          font-size 28px
          color #7f7f7f
          padding-top 8px   
        .look
          width 100%
          font-size 24px
          color #999
          margin-top 18px  
          i
            display inline-block
            background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==")
            width 28px
            height 20px
            background-size 30px 20px    
            background-repeat no-repeat  
            margin-right 10px
      .right
        width 272px
        height 272px
        img 
          width 272px
          height 272px 
          border-radius 10px      
</style>
