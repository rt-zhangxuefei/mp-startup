import {
  URL_BING_WALLPAPER
} from '../../config/url';


Page({
  data: {
    list: [],
    pageIndex: 0,
    loading: false,
    loaded: false
  },
  onLoad(options) {
    this.getDataByPage();
  },
  bindscrolltolower() {
    const {
      pageIndex
    } = this.data;
    this.setData({
      loading: true
    });
    // this.getDataByPage(pageIndex + 1);
  },
  getDataByPage(pageIndex = 0, pageSize = 5) {
    if (pageIndex > 0) {
      this.setData({
        loading: true
      });
    }
    wx.request({
      url: URL_BING_WALLPAPER,
      method: 'GET',
      data: {
        format: 'js',
        mkt: 'zh-CN',
        idx: pageIndex,
        n: pageSize
      }
    }).then(res => {
      this.setData({
        [`list[${pageIndex}]`]: res.data.images,
        loading: false,
        pageIndex
      });

    });
  }
})