<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <span>热门搜索</span>
      </div>
      <div class="main">
        <div class="main-item" v-for="(category, index) in categoryList" :key="index" :class="category.code===2?'active':''">{{category.name}}</div>
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
            name:"免洗面膜仅49.9",
            code:1
          },
          {
            name:"早秋服饰",
            code:2
          },
          {
            name:"超薄纸尿裤",
            code:1
          },
          {
            name:"咖啡碳保暖套装",
            code:1
          },
          {
            name:"金秋大闸蟹",
            code:2
          },
          {
            name:"996五宝茶",
            code:1
          },
          {
            name:"睡衣",
            code:1
          },
          {
            name:"袜子",
            code:1
          },
          {
            name:"床垫",
            code:1
          },
          {
            name:"四件套",
            code:1
          },
          {
            name:"运动耳机",
            code:1
          },
        ]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    padding-top 88px
    .wrapper
      width 100%
      height 357px
      padding 0 30px
      box-sizing border-box 
      background white
      .header
        width 100%
        height 90px
        color #999999
        font-size 28px
        line-height 90px  
      .main
        display flex
        flex-wrap wrap  
        .main-item
          color #333333
          font-size 24px
          border 2px solid rgba(0,0,0,.3)
          padding 0 15px
          height 47px
          text-align center
          line-height 47px
          border-radius 5px 
          margin 0 32px 32px 0
          &.active
            color #b4282d
            border 2px solid #b4282d



</style>
