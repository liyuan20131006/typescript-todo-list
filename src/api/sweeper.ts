import request from '@/axios/request'
import {RecheckRequestParams,SearchRequestParams} from '@/combinations/model/sweeper'
export default {
  // // 清扫器列表
  // list (data) {
  //   return request({
  //     url: `/v1/mobile/sweeper/list`,
  //     method: 'get',
  //     params: data
  //   })
  // },

  // // 添加清扫器列表
  // add (data) {
  //   return request({
  //     url: `/v1/mobile/sweeper`,
  //     method: 'post',
  //     data: data
  //   })
  // },

  // // 修改清扫器列表
  // edit (data) {
  //   return request({
  //     url: `/v1/mobile/sweeper`,
  //     method: 'put',
  //     data: data
  //   })
  // },
  //清扫器详情
  detail (data:SearchRequestParams) {
    return request({
      url: `/v1/mobile/sweeper/${data.sweeperNo}`,
      method: 'get'
    })
  },
  // 清扫器复核
  recheck (data:RecheckRequestParams) {
    return request({
      url: `/v1/mobile/sweeper/recheck`,
      method: 'post',
      data: data
    })
  },
}
