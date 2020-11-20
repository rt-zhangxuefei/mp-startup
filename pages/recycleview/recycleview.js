import {
  URL_BING_WALLPAPER
} from '../../config/url';


Page({
  data: {
    list: [],
    pageIndex: 0,
    loading: false
  },
  onLoad: function (options) {
    // 用来接收参数

  },
  onUnload() {
    if (this._observer) this._observer.disconnect();
  },
  onReady: function () {
    // 界面设置操作
    this.getData();
  },
  getData() {
    const {
      pageIndex
    } = this.data;
    wx.request({
      url: URL_BING_WALLPAPER,
      method: 'GET',
      data: {
        format: 'js',
        idx: pageIndex,
        n: 7,
        mkt: 'zh-CN'
      }
    }).then(res => {
      this.setData({
        pageIndex: pageIndex + 1,
        [`list[${pageIndex}]`]: res.data.images,
        loading: false
      })
    })
  },
  loadmore() {
    this.setData({
      loading: true
    });
    this.getData();
  }
})