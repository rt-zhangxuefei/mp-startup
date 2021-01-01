// 微信 api promise 化
import { promisifyAll } from "miniprogram-api-promise";
const wxp = {};
promisifyAll(wx, wxp);
// 覆盖原有的 wx 对象
wx = wxp;

// 重写 Page 实现全局默认分享

!(function () {
  const PageTemp = Page;
  Page = function (pageConfig) {
    pageConfig = {
      onShareAppMessage: function () {
        return {};
      },
      ...pageConfig,
    };
    PageTemp(pageConfig);
  };
})();

App({
  onLaunch(options) {},
  onShow(options) {},
  onHide() {},
  onError(errorStr) {},
  globalData: {},
});
