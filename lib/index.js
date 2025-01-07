/*
 * @Author: Wanko
 * @Date: 2024-12-23 18:03:34
 * @LastEditors: Wanko
 * @LastEditTime: 2024-12-23 18:23:05
 * @Description: 
 */
function randomArray(array = []) {
  return array.sort(() => Math.random() - 0.5)
}

/**
 * @description: 获取query参数
 * @param {*} url
 * @param {*} paramName
 * @return {*}
 */
function getQueryParams(url, paramName = null) {
  let queryParams = {}
  let queryString = url.split('?')[1]

  if (queryString) {
    let params = queryString.split('&')
    params.forEach((param) => {
      let [key, value] = param.split('=')
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value)
    })
  }

  if (paramName) {
    return queryParams[paramName] || null
  }

  return queryParams
}

export { randomArray, getQueryParams }