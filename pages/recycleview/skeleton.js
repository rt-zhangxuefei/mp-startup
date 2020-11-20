// pages/recycleview/skeleton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 唯一id
    skeletonId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: true,
    skeletonId: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    ready() {
      this.setData({
        skeletonId: this.data.skeletonId
      });
      const {
        windowHeight
      } = wx.getSystemInfoSync();
      this._observer = this.createIntersectionObserver();
      this._observer.relativeToViewport({
          top: windowHeight / 2,
          bottom: windowHeight / 2
        })
        .observe(`#item-${this.data.skeletonId}`, (res) => {
          let {
            intersectionRatio
          } = res
          if (intersectionRatio === 0) {
            console.log('【卸载】', this.data.skeletonId, '超过预定范围，从页面卸载')
            this.setData({
              show: false
            })
          } else {
            console.log('【进入】', this.data.skeletonId, '达到预定范围，渲染进页面')
            this.setData({
              show: true
            });
          }
        })
    }
  }
})