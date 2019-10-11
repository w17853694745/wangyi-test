import {
  GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA,
  CHANGE_TYPE,
  GET_HEADER_DATA,
  GET_THREE_TYPE_DATA
} from "./mutation-type"

import {
  reqDropDown,
  reqAutoRecommendData,
  reqColection,
  reqList
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
  //获取甄选家顶部数据
  async getHeaderData({commit}){
    const result = await reqColection()
    const headerData = result.data
    commit(GET_HEADER_DATA,{headerData})
  },

  // 获取甄选家评论数据
  async getThreeTypeData ({commit},{page, size, type}) {    // 晒单 - 可爱值max的严选萌物
    const result = await reqList(page, size, type);    // 发送ajax
    const threeTypeData = result.data
    
    if (result.code === "200") {
      threeTypeData.type = type
      commit(GET_THREE_TYPE_DATA, {threeTypeData})    // 根据返回的数据调用 mutations 更改数据
    }
  },

  //切换发现和甄选家
  changeThingsType({commit},flag){
    commit(CHANGE_TYPE,{flag})
  }
}