<template>
  <div class="container">
    <div class="warper">
      <div class="header">
        <span>新品首发</span>
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
                <img src="https://yanxuan-item.nosdn.127.net/462bb01f4928dcb1cc08dd726b593c94.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>柔润护唇膏</span> 
                  <span class="price">
                    ¥24.9
                  </span>      
                </div>
              </div>
              <div class="text-footer">
                <p class="price">新品尝鲜价</p>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/c09d7cf66a445da4c45e560fb61a728b.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>秋冬暖绒沙发盖巾</span> 
                  <span class="price">
                    ¥99.9
                  </span>      
                </div>
              </div>
              <div class="text-footer">
                <p class="price">新品尝鲜价</p>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/5e6f4b5523be752e53dbec8c81feeb1d.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>天鹅绒柔暖床笠</span> 
                  <span class="price">
                    ¥109
                  </span>      
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/0d7f0028d1cb07ef67f2a865cbe9dbe6.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>女式加绒皮毛一体乐福鞋</span> 
                  <span class="price">
                    ¥299
                  </span>      
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/ff2b35fc5025fc737e8a5f79206604bf.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>衣物除螨除菌液 1L/3L</span> 
                  <span class="price">
                    ¥59.9
                  </span>      
                </div>
              </div>
            </li>
            <li class="item1">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="text-header">
                <div class="name">
                  <span>地表强温 女式收腰派克大毛...</span> 
                  <span class="price">
                    ¥1099
                  </span>      
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
        .main-footer
          width 100%
          .popularityList
            display flex
            flex-wrap wrap
            .item1
              width 210px
              height 316px
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
                font-size 24px  
                .price
                  margin-left 10px 
                  color #b4282d
                  font-size 26px 
              .text-footer   
                font-size 20px
                color red
                transform scale(.8)
                .price
                  border 2px solid #ff0000
                  border-radius 15px 
                  display inline-block
                  padding 2px 15px  
                  position absolute
                  left -25px
                  top 10px

                  

</style>
