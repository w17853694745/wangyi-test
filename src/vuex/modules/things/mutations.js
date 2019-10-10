import {
  GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA
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
}
