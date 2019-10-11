<template>
  <div class="swiper-container things-container">
    <div class="swiper-wrapper things-wrapper">
      <span class="swiper-slide things-slide" v-for="(look, index) in lookList" :key="index">
        <img :src="look.banner.picUrl">
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    props:["lookList"],
    mounted() {
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll = new BScroll(".things-container", {
            click: true,
            scrollX: true,
            scrollY:false
          })
        }else{
          this.bScroll.refresh()
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .things-container
    width 100%
    border-bottom 20px solid rgba(0,0,0,.05) 
    .things-wrapper
      width 4800px
      height 280px
      .things-slide
        text-align center
        display inline-block
        width 240px
        height 240px
        img 
          display inline-block
          width 240px
          height 240px
          border-radius 10px 
</style>
