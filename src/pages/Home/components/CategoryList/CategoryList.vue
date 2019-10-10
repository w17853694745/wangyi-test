<template>
  <div class="categoryContainer">
    <div class="wapper">
      <div class="item" v-for="(item, index) in categoryList" :key="index">
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        categoryList:[
          {
            img:"http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
            text:"新品首发"
          },
          {
            img:"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
            text:"居家生活"
          },
          {
            img:"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
            text:"服饰鞋包"
          },
          {
            img:"http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
            text:"美食酒水"
          },
          {
            img:"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
            text:"个护清洗"
          },
          {
            img:"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
            text:"母婴亲子"
          },
          {
            img:"https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
            text:"运动旅行"
          },
          {
            img:"https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
            text:"数码家电"
          },
          {
            img:"https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
            text:"全球特色"
          },
          {
            img:"http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
            text:"好货抄底"
          }

          
        ]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    width 100%
    height 330px
    padding-bottom 32px
    .wapper
      display flex
      flex-wrap wrap
      .item
        width 17%
        height 156px
        display flex
        align-items center
        flex-direction column
        box-sizing border-box
        margin 5px 10px
        justify-content space-between
        .img
          width 110px
          height 110px
          img 
            width 100%
            height 100%
        .text
          font-size 24px 
          color #333 
</style>
