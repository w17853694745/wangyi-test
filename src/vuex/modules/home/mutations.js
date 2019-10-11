import {
  GET_SEACHER_DATA,
  GET_SEACHER_LIST
} from "./mutation-type"

export default {
  [GET_SEACHER_DATA](state, {
    seacherData
  }) {
    state.seacherData = seacherData // mutation直接操作状态
  },
  [GET_SEACHER_LIST](state, {
    seacherList
  }) {
    state.seacherList = seacherList // mutation直接操作状态
  },
}
