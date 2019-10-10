<template>
  <div class="recommend">
    <div class="wrapper" ref="wrapper">
      <ul class="recommendList" v-for="(recommend, index) in recommendList" :key="index">
        <li class="recommendItem" v-for="(topic, index) in recommend.topics" :key="index">
          <Code0Show v-if="topic.type == 0 || topic.type == 10" :topic="topic"/>
          <Code2Show v-if="topic.type == 2" :topic="topic"/>
          <Code7Show v-if="topic.type == 7" :topic="topic"/>
          <Code11Show v-if="topic.type == 11 || topic.type == 12" :topic="topic"/>
        </li>
      </ul>

      <ul class="recommendList" v-for="(recommend, rIndex) in moreRecommendData.result" :key="rIndex+Date.now()">
        <li class="recommendItem" v-for="(topic, tIndex) in recommend.topics" :key="tIndex-2+Date.now()">
          <Code0Show v-if="topic.type == 0 || topic.type == 10" :topic="topic"/>
          <Code2Show v-if="topic.type == 2" :topic="topic"/>
          <Code7Show v-if="topic.type == 7" :topic="topic"/>
          <Code11Show v-if="topic.type == 11 || topic.type == 12" :topic="topic"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Code0Show from './components/Code0Show/Code0Show'
  import Code2Show from './components/Code2Show/Code2Show'
  import Code7Show from './components/Code7Show/Code7Show'
  import Code11Show from './components/Code11Show/Code11Show'
  import BScroll from 'better-scroll'
  export default {
    components:{
      Code0Show,
      Code2Show,
      Code7Show,
      Code11Show
    },
    data () {
      return {
        moreDataPage: 1
      }
    },
    computed: {
      ...mapState({
          recommendList:state=>state.things.recommendList,
          moreRecommendData: state=>state.things.moreRecommendData  
      })
    },
    async mounted() {
      this.$nextTick(()=>{
        try {
          if(this.recScroll){
            this.recScroll.refresh()
          }else{
            this.recScroll = new BScroll(".recommend", {
              click: true,
              probeType: 2,
              scrollX: false,
              scrollY: true,
              bounce: false,
              pullUpLoad: true
            })
            this.recScroll.on("pullingUp", async ()=>{
              this.moreDataPage++;
              await this.$store.dispatch('getMoreRecommendData', {page: this.moreDataPage, size: 5})
              this.recScroll.finishPullUp();    
            })
          }
        }catch (e) {
        
        }
        
      })
      await this.$store.dispatch("getDropDownData") 
      await this.$store.dispatch("getMoreRecommendData", {page: 1, size: 5})

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    width 100%  
    padding-bottom 80px
    overflow hidden
    max-height 1050px
    .wrapper
      width 100%
      .recommendList
        width 100%
        .recommendItem
          width 100%

          


</style>
