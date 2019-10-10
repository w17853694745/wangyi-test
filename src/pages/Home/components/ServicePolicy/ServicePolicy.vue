<template>
  <div class="container">
    <ul class="Policys">
      <li v-for="(item, index) in PolicyList" :key="index" class="PolicyItem">
        <a href="javascript:" class="PolicyInfo">
          <img :src="item.img" class="img">
          <span class="text">{{item.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        PolicyList:[
          {
            img:"http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png",
            text:"网易自营品牌"
          },
          {
            img:"http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png",
            text:"30天无忧退货"
          },
          {
            img:"http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png",
            text:"48小时快速退款"
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 72px
    .Policys
      width 100%
      height 100%
      display flex
      align-items center
      flex-wrap nowrap
      box-sizing border-box
      padding 0 30px
      .PolicyItem
        width 33%
        .PolicyInfo
          display flex
          align-items center
          flex-wrap nowrap
          font-size 24px
          img 
            width 32px
            height 32px
            margin-right 8px 
</style>
