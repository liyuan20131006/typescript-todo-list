import { BeltObj } from '@/combinations/model/belt';
import request from '@/axios/request'
import {SearchRequestParams,FormRequestParams} from '@/combinations/model/belt'
export default {
  // 胶带列表
  list (data:SearchRequestParams) {
    return request({
      url: `/v1/mobile/belt/list`,
      method: 'get',
      params: data
    })
  },

  // 添加胶带列表
  add (data:FormRequestParams) {
    return request({
      url: `/v1/mobile/belt`,
      method: 'post',
      data: data
    })
  },

  // 修改胶带列表
  edit (data:FormRequestParams) {
    return request({
      url: `/v1/mobile/belt`,
      method: 'put',
      data: data
    })
  },
}
