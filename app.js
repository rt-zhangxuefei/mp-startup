// 微信 api promise 化
import {
  promisifyAll
} from "miniprogram-api-promise";
const wxp = {};
promisifyAll(wx, wxp);
// 覆盖原有的 wx 对象
wx = wxp;

App({
  onLaunch(options) {},
  onShow(options) {},
  onHide() {},
  onError(errorStr) {},
  globalData: {},
});