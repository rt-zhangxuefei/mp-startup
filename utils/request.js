import {
  SUCCESS,
  TOKEN
} from '../config/index';

const get = (url, data) => {
  const token = wx.getStorageSync(TOKEN);
  return wx.request({
    url,
    method: "GET",
    header: {
      [TOKEN]: token,
    },
    data
  }).then(res => {
    if (res.data.status === SUCCESS) {
      return Promise.resolve(res.data.data)
    } else {
      return Promise.reject(`响应失败:${JSON.stringify(res.data)}`)
    }
  }, err => {
    console.error(err);
    return Promise.reject(`请求异常`);
  });
}

const post = (url, data) => {
  const token = wx.getStorageSync(TOKEN);
  return wx.request({
    url,
    method: "POST",
    header: {
      [TOKEN]: token,
    },
    data
  }).then(res => {
    if (res.data.status === SUCCESS) {
      return Promise.resolve(res.data.data);
    } else {
      return Promise.reject(`响应失败:${JSON.stringify(res.data)}`);
    }
  }, err => {
    console.error(err);
    return Promise.reject(`请求异常`);
  })
}

export default {
  get,
  post
}