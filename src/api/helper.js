import axios from 'axios'
const ERR_OK = true
const ERR_FAIL = false
export function get (url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      // const serverData = res.data
      // const success = serverData.success
      // const data = serverData.data

      const { success, data } = res.data
      if (success === ERR_OK) {
        return data
      } else if (success === ERR_FAIL) {
        return data
      }
    }).catch(() => {

    })
  }
}

export function post (url) {
  return function (params) {
    return axios.post(url, params).then((res) => {
      const { success, data } = res.data
      if (success === ERR_OK) {
        return data
      } else if (success === ERR_FAIL) {
        return data
      }
    }).catch(() => {

    })
  }
}
