import axiosInstance from './axiosInstance'

const orderApi = {
  add(data) {
    const url = '/orders'
    return axiosInstance.post(url, data)
  }
}

export default orderApi
