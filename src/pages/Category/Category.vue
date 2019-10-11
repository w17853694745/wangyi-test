<template>
  <div class="container">
    <Header/>
    <div class="wrapper">
      <div class="left">
        <ul class="navList">
          <li class="navItem" :class="currIndex == index?'active':''" v-for="(category, index) in categoryData" :key="index" @click="currIndex = index">
            {{category.name}}
          </li>
        </ul>
      </div>
      <div class="right" v-if="categoryData[currIndex]">
        <div class="content">
          <div class="header">
            <img :src="categoryData[currIndex].wapBannerUrl" alt="">
          </div>
          <div class="main">
            <ul class="mainList">
              <li class="mainItem" v-for="(subCate, index) in categoryData[currIndex].subCateList" :key="index">
                <div class="img">
                  <img :src="subCate.bannerUrl" alt="">
                </div>
                <div class="text">
                  <span>{{subCate.name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
    <FooterNav/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav/FooterNav'
  import Header from './components/Header/Header'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    components:{
      FooterNav,
      Header
    },
    data() {
      return {
        currIndex:0
      }
    },
    computed: {
      ...mapState({
        categoryData: state=>state.category.categoryData
      })
    },
    watch: {
      categoryData: {
        deep: true,
        handler () {
          this.$nextTick(()=>{
            if(this.Scroll){
              this.Scroll.refresh()
            }else{
              this.Scroll = new BScroll(".left", {
                click: true,
                scrollY: true
              })
            }
          })
          this.$nextTick(()=>{
            if(this.Scroll2){
              this.Scroll2.refresh()
            }else{
              this.Scroll2 = new BScroll(".right", {
                click: true,
                scrollY: true
              })
            }
          })
        }
      }
    },
    async mounted () {
      await this.$store.dispatch("getCategoryData")      
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    .wrapper
      width 100%
      display flex
      padding-top 120px 
      box-sizing border-box
      .left
        width 162px
        max-height 1100px
        .navList
          width 162px
          .navItem
            width 162px
            height 50px
            font-size 28px
            color #333
            text-align center
            line-height 50px
            margin-top 40px
            box-sizing border-box
            border-left 6px solid #fff
            &.active
              color #ab2b2b
              border-left 6px solid #ab2b2b
            // &::before
            //   position absolute
            //   left 0
            //   top 0
            //   content ''
            //   width 2px
            //   height 100%
            //   color #ab2b2b
            //   border-left 6px solid #ab2b2b 
      .right
        width 588px
        height 1148px
        overflow hidden
        .content
          padding 0px 30px 20px
          box-sizing border-box
          .header
            width 528px 
            height 192px
            margin-bottom 30px 
            img 
              width 528px 
              height 192px
          .main
            width 528px
            .mainList
              width 528px
              display flex
              flex-wrap wrap
              .mainItem
                width 144px
                height 216px
                margin-right 30px 
                .img
                  width 144px
                  height 144px
                  img 
                    width 144px
                    height 144px
                .text
                  text-align center
                  font-size 24px
                  color #333    
            
</style>
