<template>
  <div class="container">
    <div class="warper">
      <div class="header">
        新人专享礼
      </div>
      <div class="main">
        <div class="package">
          <div class="package-text">
            新人专享礼包
          </div>
          <div class="img">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="礼包">
          </div>
          <div class="flow">

          </div>
        </div>
        <div class="right">
          <div class="welfare">
            <a href="javascript:">
              <div class="text">
                <div class="text-header">
                  福利社
                </div>
                <div class="text-footer">
                  今日特价
                </div>
              </div>
              <div class="img">
                <div class="img-header">
                  <img src="https://yanxuan-item.nosdn.127.net/9032e04ee24f14607f2a8b5635ebcd95.png?imageView&thumbnail=200x200&quality=75" alt="">
                </div>
                <div class="img-footer">
                  <div class="one">¥54.4</div>
                  <div class="two">¥99</div>
                </div>
              </div>
            </a>
          </div>
          <div class="new">
            <a href="javascript:">
              <div class="text">
                <div class="text-header">
                  新人拼团
                </div>
                <div class="text-footer">
                  1元起包邮
                </div>
              </div>
              <div class="img">
                <div class="img-header">
                  <img src="https://yanxuan-item.nosdn.127.net/089fd1b96fa7be9776edb1f43878f826.png?imageView&thumbnail=200x200&quality=75" alt="">
                </div>
                <div class="img-footer">
                  <div class="one">¥20.4</div>
                  <div class="two">¥48</div>
                </div>
              </div>
            </a>
          </div>
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
  .container
    padding-bottom 20px
    .warper
      width 100%
      .header
        width 100%
        height 90px
        text-align center
        line-height 90px
        font-size 32px
        color #333
        position relative
        &::before
          content ''
          position absolute
          top 45px
          left 250px
          width 24px
          height 4px
          background #333
        &::after
          content ''
          position absolute
          top 45px
          right 250px
          width 24px
          height 4px
          background #333  
      .main
        width 100%
        height 437px
        display flex
        padding-left 30px 
        box-sizing border-box
        .package
          width 342px
          background #F9E9CF
          position relative
          margin-right 5px 
          .package-text
            color #333
            font-size 32px
            padding 30px 0 0 30px
          .img
            box-sizing border-box
            margin 25px 44px
            img 
              width 258px
              height 257px 
          .flow
            position absolute
            left 210px
            top 320px
            width 30px
            height 15px
            background url("//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png") no-repeat  
            background-size 100% 100%
            animation carousel 1s linear infinite
        .right
          width 342px  
          .welfare  
            background #FBE2D3
            height 50% 
            a
              display block
              padding 20px 0 0 30px
              display flex
              .text
                .text-header
                  color #333
                  font-size 32px
                .text-footer
                  color #7F7F7F  
              .img
                width 200px
                height 200px
                position relative
                img 
                  width 200px
                  height 200px
                .img-footer
                  position absolute
                  right 20px
                  top 0  
                  width 80px
                  height 80px
                  opacity .8
                  border-radius 50% 
                  background #F59524
                  text-align center
                  line-height 80px  
                  .one
                    font-size 26px
                    color white
                    margin-top -5px
                  .two
                    color white  
                    font-size 12px
                    margin-top -52px
                    transform scale(.9)
                    text-decoration line-through
          .new
            background #FFECC2
            height 48% 
            margin-top 5px 
            a
              display block
              padding 20px 0 0 30px
              position relative
              .text
                 position relative 
                .text-header
                  color #333
                  font-size 32px
                .text-footer
                  color #7F7F7F  
              .img
                width 200px
                height 200px
                position absolute
                right 0
                top 20px
                img 
                  width 200px
                  height 200px
                .img-footer
                  position absolute
                  right 20px
                  top 0  
                  width 80px
                  height 80px
                  opacity .8
                  border-radius 50% 
                  background #F59524
                  text-align center
                  line-height 80px  
                  .one
                    font-size 26px
                    color white
                    margin-top -5px
                  .two
                    color white  
                    font-size 12px
                    margin-top -52px
                    transform scale(.9)
                    text-decoration line-through      

</style>
