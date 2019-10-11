import {
  GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA,
  CHANGE_TYPE,
  GET_HEADER_DATA,
  GET_THREE_TYPE_DATA
} from "./mutation-type"

export default {
  [GET_RECOMMEND_DATA](state, {
    recommendData
  }) {
    state.recommendList = recommendData // mutation直接操作状态
  },
  [GET_MORE_RECOMMEND_DATA] (state, {moreRecommendData}) {
    if (!state.moreRecommendData.hasMore) {
      state.moreRecommendData = moreRecommendData    // 如果 autoRecommendData 还没有数据
    } else if (state.moreRecommendData.hasMore) {
      state.moreRecommendData.result.push(...moreRecommendData.result)    // 如果有数据向其中追加
    }
  },
  [CHANGE_TYPE](state,{flag}){
    state.isFind = flag
  },
  //获取甄选家头部数据
  [GET_HEADER_DATA](state,{headerData}){
    state.headerData = headerData
  },
  //获取甄选家评论数据
  [GET_THREE_TYPE_DATA] (state, {threeTypeData}) {
    if (!state.threeTypeData.hasMore) {
      state.threeTypeData = threeTypeData    
    } else if (state.threeTypeData.hasMore) {
      if (state.threeTypeData.type === threeTypeData.type) {
        state.threeTypeData.topicList.push(...threeTypeData.topicList)
      } else {
        state.threeTypeData = threeTypeData
      }
    }
  }
}
