import {
  GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA
} from "./mutation-type"

import {
  reqDropDown,
  reqAutoRecommendData
} from "../../../api"

export default {
  async getDropDownData({commit}) {
    const result = await reqDropDown(); // 发送ajax
    const recommendData = result.data
    if (result.code == 200) {
      commit(GET_RECOMMEND_DATA, {
        recommendData
      }) // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getMoreRecommendData ({commit},{page, size}) {    // 推荐 - 上拉加载数据
    const result = await reqAutoRecommendData(page, size);    // 发送ajax
    const moreRecommendData = result.data
    
    if (result.code === "200") {
      commit(GET_MORE_RECOMMEND_DATA, {moreRecommendData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
}