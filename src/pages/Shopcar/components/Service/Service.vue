<template>
  <div class="container">
    <div class="wrapper">
      <ul class="serviceList">
        <li class="serviceItem">
          <i class="icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="serviceItem">
          <i class="icon"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="serviceItem">
          <i class="icon"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
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
    .wrapper
      width 100%
      height 70px
      padding 0 30px
      box-sizing border-box
      background #eee
      .serviceList
        display flex
        justify-content space-between 
        .serviceItem   
          line-height 72px
          color #666
          i
            width 10px
            height 10px
            display inline-block
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
            background-size 100% 100%  
            vertical-align middle
            margin-right 5px 

</style>
