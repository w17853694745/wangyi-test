<template>
  <div class="container">
    <Header/>
    <!-- 选择类型 -->
    <Choice v-if="showType==0" :changeType="changeType"/>
    <!-- 手机登录 -->
    <Phone v-else-if="showType==1" :changeType="changeType"/>
    <!-- 邮箱登录 -->
    <Email v-else-if="showType==2" :changeType="changeType"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/Header/Header'
  import Choice from './components/Choice/Choice'
  import Phone from './components/Phone/Phone'
  import Email from './components/Email/Email'
  export default {
    components:{
      Header,
      Choice,
      Phone,
      Email
    },
    data() {
      return {
        showType:0  //显示的类别:0 选择登录方式; 1 手机号登录; 2 邮箱登录;
      }
    },
    methods: {
      changeType(num){
        this.showType = num*1
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
    
</style>
