import {
  GET_SEACHER_DATA,
  GET_SEACHER_LIST
} from "./mutation-type"

import {
  reqInitSearch,
  reqSearchResult
} from "../../../api"

export default {
  async getSeacherData({commit}) {
    const result = await reqInitSearch(); // 发送ajax
    const seacherData = result.data.defaultKeywords
    commit(GET_SEACHER_DATA, {
      seacherData
    }) // 根据返回的数据调用 mutations 更改数据

  },
  async getSeacherList({commit},content){
    const result = await reqSearchResult(content)
    const seacherList = result.data
    commit(GET_SEACHER_LIST, {
      seacherList
    }) // 根据返回的数据调用 mutations 更改数据
  }
}