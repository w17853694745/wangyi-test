// 模拟数据
import Mock from 'mockjs'

import category from './category.json'

Mock.mock("/category",{
  code:0,
  data: category
})


