<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in swiperImg" :key="index">
          <img :src="item" alt="轮播" class="img">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {
    data() {
      return {
        swiperImg:[
          "https://yanxuan.nosdn.127.net/766890ad54020808e824982e2751b717.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/1cdfc1b7ef19d9398c6a9c7b55683ba5.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/be2e77d1e49b5540f86926d48f289ff9.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0",
          'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },
    mounted() {
      new Swiper('.swiper-container',{
        autoplay: true,
        loop: true,
        pagination : {
          el:'.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    height 375px
    width 100%
    .swiper-wrapper
      .swiper-slide
          .img
            height 100%
            width 100%
</style>
<style lang="stylus" rel="stylesheet/stylus">
.swiper-pagination
  padding-bottom 20px
.swiper-pagination-bullet
  width 40px
  height 4px 
  display inline-block
  background #ffffff
  opacity 0.4
  border-radius 2px
  margin-right 10px 
.swiper-pagination-bullet-active
  opacity 1
  background #ffffff

</style>
