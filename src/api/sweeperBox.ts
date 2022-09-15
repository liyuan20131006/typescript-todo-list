import request from '@/axios/request'
import {SearchRequestParams} from '@/combinations/model/sweeperBox'
export default {
  // // 清扫箱列表
  // list (data:SearchRequestParams) {
  //   return request({
  //     url: `/v1/mobile/sweeperBox/list`,
  //     method: 'get',
  //     params: data
  //   })
  // },

  // // 添加清扫箱列表
  // add (data) {
  //   return request({
  //     url: `/v1/mobile/sweeperBox`,
  //     method: 'post',
  //     data: data
  //   })
  // },

  // // 修改清扫箱列表
  // edit (data) {
  //   return request({
  //     url: `/v1/mobile/sweeperBox`,
  //     method: 'put',
  //     data: data
  //   })
  // },
  //清扫箱详情
  detail (data:SearchRequestParams) {
    return request({
      url: `/v1/mobile/sweeperBox/${data.sweeperBoxNo}`,
      method: 'get'
    })
  },
  // // 清扫箱复核
  // recheck (data) {
  //   return request({
  //     url: `/v1/mobile/sweeperBox/recheck`,
  //     method: 'post',
  //     data: data
  //   })
  // },
}
