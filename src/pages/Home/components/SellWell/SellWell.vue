<template>
  <div class="container">
    <div class="warper">
      <div class="header">
        <span>类目热销榜</span>
      </div>
      <div class="main">
        <ul class="wellList">
          <li class="wellItem1">
            <div class="text">
              热销榜
            </div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/a5b6447bf85a8ff946c9438fe2ee740a.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="wellItem2">
            <div class="text">
              好评榜
            </div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/d13a653535740e0091d856cdea006c1d.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
        </ul>
        <ul class="wells">
          <li class="item">
            <div class="text">居家生活榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">美食酒水榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">服饰鞋包榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">个护清洗榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">数码家电榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/3ddebc9df09f6b10b9b301d1edf2c303.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">母婴亲子榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">运动旅行榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li class="item">
            <div class="text">全球特色榜</div>
            <div class="img">
              <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
        </ul>
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
    padding-bottom 20px
    margin-bottom 40px
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
        width 100%
        height 553px
        padding 0 30px
        box-sizing border-box
        .wellList
          display flex
          flex-wrap wrap
          width 100%
          .wellItem1
            background-size 100% 100% 
            width 335px
            height 200px
            margin-right 10px
            margin-bottom 10px 
            background #F9F3E4
            position relative
            .text
              font-size 28px
              position absolute
              left 25px
              top 65px
              &::before
                content ''
                position absolute
                left 0
                bottom -20px
                width 48px
                height 4px
                background #333333
            .img
              width 200px
              height 200px
              float right 
              img 
                width 200px
                height 200px   
          .wellItem2
            background-size 100% 100% 
            width 335px
            height 200px
            margin-right 10px
            margin-bottom 10px 
            background #EBEFF6
            position relative
            .text
              font-size 28px
              position absolute
              left 25px
              top 65px
              &::before
                content ''
                position absolute
                left 0
                bottom -20px
                width 48px
                height 4px
                background #333
            .img
              width 200px
              height 200px
              float right 
              img 
                width 200px
                height 200px  
        .wells
          width 100%
          display flex
          flex-wrap wrap
          .item
            width 23.5%
            height 180px
            background #F5F5F5
            margin 0 10px 10px 0
            box-sizing border-box
            .text
              padding-top 10px 
              font-size 24px
              color #333
              text-align center
            .img
              width 120px
              height 120px
              margin 0 auto
              img
                width 120px
                height 120px                
</style>
