<template>
  <div class="container">
    <div class="warper">
      <div class="main">
        <ul class="specialList">
          <li class="specialItem1" v-for="(item, index) in superList" :key="index">
            <div class="wapper">
              <div class="text">
                <div class="top">
                {{item.text1}}
                </div>
                <div class="bottom">
                  {{item.text2}}
                </div>
              </div>
              <div class="img">
                <img :src="item.img1" class="left">
                <img :src="item.img2" class="right">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        superList:[
          {
            text1:"9.9超值专区",
            text2:"190款商品定价直降",
            img1:"https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75",
            img2:"https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" 
          },
          {
            text1:"享住",
            text2:"家的多种可能",
            img1:"https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&thumbnail=150x150&quality=75",
            img2:"https://yanxuan-item.nosdn.127.net/f28c5db21c4d8aef33176e628ea3c4e2.png?imageView&thumbnail=150x150&quality=75" 
          },
          {
            text1:"靠谱好物大盘点",
            text2:"闭着眼买都不会错",
            img1:"https://yanxuan-item.nosdn.127.net/3588ca21c954a4289e4c87c2e66ec7b7.png?imageView&thumbnail=150x150&quality=75",
            img2:"https://yanxuan-item.nosdn.127.net/0853a574159cd7c4dd277005a1909cb3.png?imageView&thumbnail=150x150&quality=75" 
          },
          {
            text1:"断货补单王",
            text2:"严选必买爆款",
            img1:"https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75",
            img2:"https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" 
          },
        ]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    padding 2px 30px 10px
    box-sizing border-box
    .warper
      width 100%
      .main
        width 100%
        height 553px
        box-sizing border-box
        .specialList
          display flex
          flex-wrap wrap
          width 100%
          height 100%
          .specialItem1
            background-image: url("https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75")
            background-size 100% 100% 
            width 340px
            height 49%
            margin-right 5px
            margin-bottom 5px 
            .wapper
              padding 20px 0 0 20px
              box-sizing border-box
              .text
                width 100%
                height 95px
                padding-left 10px 
                .top
                  font-size 32px
                  color #333
                .bottom
                  font-size 24px
                  color #7F7F7F
                  span 
                    display inline-block
                    padding 2px 10px
                    background #CBB693  
                    color white
              .img
                display flex
                .left
                  width 150px
                  height 150px
                .right
                  width 150px
                  height 150px        
</style>
