<template>
  <div class="container">
    <div class="warper">
      <div class="header">
        <span>人气推荐</span>
        <a href="javascipt:">
          <span>更多</span>
          <span class="icon"></span>
        </a>
      </div>
      <div class="main">
        <div class="main-header">
          <div class="img">
            <img src="https://yanxuan-item.nosdn.127.net/7ee6fafe787e7b26498a5f49cf2b937b.png?imageView&quality=65&thumbnail=280x280" alt="">
          </div>
          <div class="text">
            <div class="time">
              <span>限时购</span>
            </div>
            <div class="info">
              95%白鹅绒保暖羽绒被 升级款
            </div>
            <div class="info2">
              热销5万+条，洁净舒柔好睡眠
            </div>
            <div class="price">
              <span class="left">¥</span>
              <span>1149</span>
            </div>
          </div>
        </div>
        <div class="main-footer">
          <ul class="popularityList">
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>网易智造蒸汽沐足盆（可单买...</span> 
                  <span class="price">
                    ¥449
                  </span>      
                </div>
              </div>
              <div class="text-footer">
                <p class="discount">
                  满400减60券
                </p>
              </div>
            </li>
            <li class="item2">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/35bdc218b4daa12e06b211908f6ce3b9.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>网易智造太空舱按摩大师椅</span> 
                  <span class="price">
                    ¥9479
                  </span>      
                </div>
              </div>
              <div class="text-footer">
                <p>
                  抄底特惠
                </p>
                <p>
                  满赠
                </p>
              </div>
            </li>
             <li class="item3">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>免洗式 乳酸菌冰沙睡眠面膜...</span> 
                  <span class="price">
                    ¥49.9
                  </span>      
                </div>
              </div>
              <div class="text-footer">
                <p>
                  好货内部价
                </p>
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
    padding-bottom 20px
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
            .item1
              width 216px
              height 353px
              position relative
              margin-right 20px
              .img
                width 216px
                height 216px
                background #f5f5f5
                img 
                  width 216px
                  height 216px
              .text-header
                color #333    
                .price
                  color #b4282d
              .text-footer   
                font-size 20px
                color red
                margin-top 10px
                transform scale(.8)
                position absolute
                left -10px
                bottom 25px
                .discount
                  background-image url(//yanxuan.nosdn.127.net/ed89ab4f5ad97ad23257f635a9c2fdbb.png),url(//yanxuan.nosdn.127.net/344655c651a5cf17b7d6096b69be7aba.png),url(//yanxuan.nosdn.127.net/6dcff693a2be08725c1313c7e2390840.png)
                  background-repeat: no-repeat,no-repeat,repeat-x
                  background-size: auto 100%,auto 100%,100% 100%;
                  background-position: left center,right center,center center;
                  overflow hidden
                  display inline-block
                  padding 0 15px
            .item2
              width 216px
              height 353px
              position relative
              margin-right 20px
              .img
                width 216px
                height 216px
                background #f5f5f5
                img 
                  width 216px
                  height 216px
              .text-header
                color #333    
                .price
                  color #b4282d
              .text-footer   
                font-size 20px
                color red
                margin-top 10px
                transform scale(.8)
                position absolute
                left -30px
                bottom 25px
                display flex
                p
                  border 2px solid red
                  border-radius 15px 
                  display inline-block
                  margin 0 5px
                  padding 2px 15px   
            .item3
              width 216px
              height 353px
              position relative
              margin-right 20px
              .img
                width 216px
                height 216px
                background #f5f5f5
                img 
                  width 216px
                  height 216px
              .text-header
                color #333    
                .price
                  color #b4282d
              .text-footer   
                font-size 20px
                color red
                margin-top 10px
                transform scale(.8)
                position absolute
                left -20px
                bottom 25px
                display flex
                p
                  border 2px solid red
                  border-radius 15px 
                  display inline-block
                  margin 0 5px
                  padding 2px 15px        
                  

</style>
