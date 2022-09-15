import request from '@/axios/request'
import {SearchRequestParams} from '@/combinations/model/transfer'
export default {
  //转运站
  detail (data:SearchRequestParams) {
    return request({
      url: `/v1/mobile/transfer/list/${data.projectId}`,
      method: 'get'
    })
  }
}
