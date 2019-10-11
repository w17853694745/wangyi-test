<template>
  <div class="selection">
    <div class="container">
      <div class="header">
        <div class="top">
          <span>让生活更好的N种方式</span>
        </div>
        <div class="bottom">
          <span>可爱值max的严选萌物</span>
        </div>
      </div>
      
      <div class="swiper-container things-container">
        <div class="swiper-wrapper things-wrapper">
          <span class="swiper-slide things-slide" v-for="(look, index) in headerData.lookList" :key="index">
            <img :src="look.banner.picUrl">
          </span>
        </div>
      </div>

      <div class="wrapper">
        <div class="header">
          <span>TA们的严选生活</span>
        </div>
        <div class="change">
          <span class="new active">最新</span>
          <span class="hot">本月最热</span>
          <span class="compilation">晒单合辑</span>
        </div>
        <div class="content_wrapper">
          <ul class="content_show clearfix" v-if="threeTypeData">
            <li v-for="(topic, index) in threeTypeData.topicList" v-if="index%2 === 0" :key="index">
              <NotCollectionShow v-if="!topic.isCollection" :topic="topic"></NotCollectionShow>
              <IsCollectionShow v-if="topic.isCollection" :topic="topic" :type="type"></IsCollectionShow>
            </li>
          </ul>
          
          <ul v-if="threeTypeData" class="content_show clearfix">
            <li v-for="(topic, index) in threeTypeData.topicList" v-if="index%2 === 1" :key="index">
              <NotCollectionShow v-if="!topic.isCollection" :topic="topic"></NotCollectionShow>
              <IsCollectionShow v-if="topic.isCollection" :topic="topic" :type="type"></IsCollectionShow>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <Swiper :lookList="this.headerData.lookList"/> -->
    <!-- <Comment/> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from './components/Swiper/Swiper'
  import Comment from './components/Comment/Comment'
  import NotCollectionShow from "./components/Comment/components/NotCollectionShow/NotCollectionShow"
  import IsCollectionShow from "./components/Comment/components/IsCollectionShow/IsCollectionShow"
  import BScroll from 'better-scroll'
  export default {
    components:{
      Swiper,
      Comment,
      NotCollectionShow,
      IsCollectionShow
    },
    computed: {
      ...mapState({
        headerData:state=>state.things.headerData,
        threeTypeData: state=>state.things.threeTypeData
      })
    },
    data () {
      return {
        tabId: 7,
        type: 1,
        moreDataPage: 1
      }
    },
    watch: {
      type: {
        deep: true,
        async handler () {
          this.moreDataPage = 1
          await this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
        }
      }
    },
    methods: {
      changeType (type){
        this.type = type
      }
    },
    async mounted() {
      await this.$store.dispatch("getHeaderData")
      await this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
      this.$nextTick(()=>{
        try {
          if(this.topScroll){
            this.topScroll.refresh()
          }else{
            this.topScroll = new BScroll(".things-container",{
              click: true,
              scrollX: true,
              scrollY: false
            })
          }
          if(this.cScroll){
            this.cScroll.refresh()
          }else{
            this.cScroll = new BScroll(".selection", {
              click: true,
              probeType: 2,
              scrollX: false,
              scrollY: true,
              bounce: false,    // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
              //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
              //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
              pullUpLoad: true
            })
            this.cScroll.on("pullingUp", async ()=>{
              this.moreDataPage++;
              await this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
              this.cScroll.finishPullUp();    // 可以多次执行上拉刷新
            })
          }
          this.cScroll.hasVerticalScroll = true    // 开启： 使得数据不足时也可以拉动
        }catch (e) {console.log(e)}
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .selection
    padding-top 100px 
    position relative
    .container
      position absolute
      width 750px
      padding-top 100px 
      .wrapper
        width 100%
        // padding 0 30px 
        box-sizing border-box
        .header
          width 100%
          margin-top 60px 
          font-size 32px
          color #333
          text-align center
          font-weight bold
        .change
          display flex
          justify-content space-between
          margin 30px 30px 0
          box-sizing border-box
          span
            font-size 28px
            height 57px
            padding 5px 30px
            text-align center
            line-height 57px  
            color #333333
            background #f7f7f7
            &.active
              background #ffe4af
              color #b0955f
              font-weight bold
        .content_wrapper
            width 100%
            box-sizing border-box
            padding 30px 10px 0  
            display flex
            column-count 2
            height auto
            .content_show
              box-sizing border-box  
              width 345px
              &:nth-child(1)
                margin-right 20px
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
      .header
        width 100%
        .top
          width 100%
          height 80px
          font-size 28px
          color #7f7f7f
          text-align center
          line-height 80px
        .bottom
          width 100%
          height 96px
          font-size 32px
          color #333
          text-align center
          line-height 96px

</style>
