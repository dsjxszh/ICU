import request from '@/utils/request'

// 登录验证
export function GetConfigValues() {
  return request({
    url: 'NwsIndex/GetConfigValues',
    method: 'post',
  })
}