<template>
  <div class="container">
    <div class="wapper">
      <div class="bottomItem">
        <a href="javascript:">
          <img :src="Bottom.imgBig" alt="">
        </a>
        <div class="swiper">
          <div class="scoll-container" ref="container">
            <ul class="scoll-wrapper">
              <li class="scoll-slide" v-for="(item2, index) in Bottom.categoryList" :key="index" v-if="item2.code!==2">
                <div class="item">
                  <div class="img">
                    <img :src="item2.img" alt="">
                  </div>
                  <div class="text">
                    <span>{{item2.text}}</span>
                  </div>
                  <div class="price">
                    <span>{{item2.price}}</span>
                  </div>
                  <div class="info" v-if="item2.info">
                    <p>{{item2.info}}</p>
                  </div>
                  <div class="choice" v-if="item2.choice">
                    <div class="text" v-for="(item3, index) in item2.choice" :key="index">{{item3}}</div>
                  </div>
                </div>
              </li>
              <li v-else class="scoll-slide">
                <div class="more">
                  <span>查看更多</span>
                  <img :src="item2.img" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="split">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props:["Bottom"],
    mounted() {
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll = new BScroll(this.$refs.container, {
            click: true,
            scrollX: true
          })
        }else{
          this.bScroll.refresh()
        }
      }) 
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    margin-top -10px
    .split
      width 100%
      height 20px
      margin 10px 0 
      background rgba(0,0,0,.1)
    .wapper
      height 780px
      .bottomItem
        a
          width 100%
          height 370px
          img 
            width 100%
            height 370px
        .swiper
          width 100%
          height 390px  
          padding 20px 0 0 30px
          box-sizing border-box
          .scoll-container
            width 100%
            overflow hidden
            .scoll-wrapper
              float left
              display flex
              .scoll-slide
                width 200px
                height 360px
                margin-right 20px
                position relative
                .img 
                  background #f4f4f4
                  img 
                    width 200px
                .text
                  color #333
                  font-size 24px
                  margin 10px 0 10px 0
                  text-overflow -o-ellipsis-lastline
                  overflow hidden
                  text-overflow ellipsis
                  display -webkit-box
                  -webkit-line-clamp 2
                  line-clamp 2
                  -webkit-box-orient: vertical;
                .price
                  color #b4282d   
                  font-size 24px
                  font-family PingFangSC-Regular
                .info
                  width auto
                  position relative
                  p
                    transform scale(.8)
                    color #CE2424
                    border-radius 20px    
                    border 2px solid #CE2424
                    padding 0 15px
                    display inline-block
                    line-height 35px
                    position absolute
                    left -15px
                .choice
                  position absolute
                  top 10px
                  left 10px 
                  border 2px solid #b4a078 
                  display flex
                  flex-direction column 
                  .text
                    text-align center
                    font-size 12px
                    color #b4a078 
                    line-height 1
                    transform scale(.7)
                    margin 0
                  
                .more
                  width 200px
                  height 200px
                  display flex
                  align-items center
                  background #f4f4f4
                  justify-content center
                  img 
                    width 20px
                    height 20px
                  span 
                    font-size 28px
                    color #333   
                
                       

                

</style>
