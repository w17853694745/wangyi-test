<template>
  <div class="container">
    <div class="warper">
      <div class="header">
        <div class="left">
          <span>限时购</span>
          <div class="time">
            <span class="active">00</span>
            <span>:</span>
            <span class="active">00</span>
            <span>:</span>
            <span class="active">00</span>
          </div>
        </div>
        <a href="javascipt:">
          <span>更多</span>
          <span class="icon"></span>
        </a>
      </div>
      <div class="main">
        <div class="main-footer">
          <ul class="popularityList">
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/89307ce0d3406446faddf61039752cda.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <div class="text-header">
                <div class="left">
                  ¥199
                </div>
                <div class="right">
                  ¥249
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/2a51732199acbc7d7d0ab5733ae3f782.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <div class="text-header">
                <div class="left">
                  ¥10.9
                </div>
                <div class="right">
                  ¥100
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/e35ff5ceaeb7fe39e38ec95eb348d7d8.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <div class="text-header">
                <div class="left">
                  ¥255
                </div>
                <div class="right">
                  ¥339
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/a7f4693aa7f7c1683340c6cd64286529.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <div class="text-header">
                <div class="left">
                  ¥49
                </div>
                <div class="right">
                  ¥59
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/31cd86e1618ad56729c92aa3f81455c4.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <div class="text-header">
                <div class="left">
                  ¥199
                </div>
                <div class="right">
                  ¥249
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/79ce75dee9f360313c7bf759f09dd9ba.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <div class="text-header">
                <div class="left">
                  ¥179
                </div>
                <div class="right">
                  ¥199
                </div>
              </div>
            </li>
          </ul>
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
    width 100%
    .warper
      width 100%
      .header
        width 100%
        height 90px
        padding 0 30px
        line-height 90px
        font-size 32px
        color #333
        position relative 
        display flex
        justify-content space-between
        box-sizing border-box
        .left
          font-size 32px
          display flex
          .time
            margin-left 20px
            span 
              margin 0 5px 
              color #333
              font-family: PingFangSC-Medium;
              font-size 24px
              &.active
                color #fff
                background #333
                padding 4px
                border-radius 4px 
        a
          display flex
          font-size 28px
          .icon
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png)
            background-size 100% 100%
            width 20px
            height 20px
            margin-top 35px
            margin-left 5px
      .main
        margin 0 30px
        box-sizing border-box
        .main-header
          width 100%
          height 280px
          display flex
          background #FEF0DF
          margin-bottom 20px 
          .img
            background url("//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png") 
            background-size 100% 100%
            width 280px
            height 280px
            img 
              width 280px
              height 280px
          .text
            width 350px
            height 162px
            margin auto auto
            .time
              width 100%
              span
                background white
                border 1px solid red
                padding 0 10px
                margin-bottom 10px
                color red    
                display inline-block
                text-align center
                font-size 12px
                transform scale(.9)
            .info
              font-size 28px
              color #333
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;   
            .info2
              font-size 24px
              color #7F7F7F   
            .price
              color #b4282d
              font-size 28px
        .main-footer
          width 100%
          .popularityList
            display flex
            flex-wrap wrap
            .item1
              width 210px
              height 300px
              position relative
              padding-right 20px
              .img
                width 216px
                height 216px
                background #f5f5f5
                img 
                  width 216px
                  height 216px
              .text-header
                color #333  
                display flex
                height 42px
                text-align center
                line-height 42px  
                margin 15px 0
                .left
                  color #b4282d
                  font-size 28px
                  margin 0 15px
                .right
                  color #7f7f7f
                  text-decoration line-through  
</style>
