//  包含所有ajax请求的模块

import axios from './ajax'

// category列表数据
export const reqCategory = () => axios("/category")

//获取识物的推荐数据
export const reqDropDown = () => axios({
  url: "/api/topic/v1/find/recManual.json"
})

//获取识物下拉的推荐数据
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => axios(`/api/topic/v1/find/recAuto.json`, {
  page,
  size,
  exceptIds
})