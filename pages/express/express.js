// pages/express/express.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expList: [{ remark: '北京 张三', datetime:'2018-5-13 20:58:30'}],
    index:0,
    expCode:null,
    comList: [{ "com": "顺丰", "no": "sf" }, { "com": "申通", "no": "sto" }, { "com": "圆通", "no": "yt" }, { "com": "韵达", "no": "yd" }, { "com": "天天", "no": "tt" }, { "com": "EMS", "no": "ems" }, { "com": "中通", "no": "zto" }, { "com": "汇通", "no": "ht" }, { "com": "全峰", "no": "qf" }, { "com": "德邦", "no": "db" }, { "com": "国通", "no": "gt" }, { "com": "如风达", "no": "rfd" }, { "com": "京东快递", "no": "jd" }, { "com": "宅急送", "no": "zjs" }, { "com": "EMS国际", "no": "emsg" }, { "com": "Fedex国际", "no": "fedex" }, { "com": "邮政国内（挂号信）", "no": "yzgn" }, { "com": "UPS国际快递", "no": "ups" }, { "com": "中铁快运", "no": "ztky" }, { "com": "佳吉快运", "no": "jiaji" }, { "com": "速尔快递", "no": "suer" }, { "com": "信丰物流", "no": "xfwl" }, { "com": "优速快递", "no": "yousu" }, { "com": "中邮物流", "no": "zhongyou" }, { "com": "天地华宇", "no": "tdhy" }, { "com": "安信达快递", "no": "axd" }, { "com": "快捷速递", "no": "kuaijie" }, { "com": "马来西亚（大包EMS）", "no": "malaysiaems" }, { "com": "马来西亚邮政（小包）", "no": "malaysiapost" }, { "com": "安能快递", "no": "ane66" }]
  },

  /**
   * 生命周期函数--监听页面加载
   * 获取快递公司代码
   */
  onLoad: function (options) {
    var obj=this;
    // app.getRequestData('http://v.juhe.cn/exp/com', { key: '3588ed959023394cd0e6cd0c5514d634'},function(res){
    //   obj.setData({ comList: res.data.result });
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getCom:function(evt){    
    this.setData({ index: evt.detail.value})
  },
  chgInput:function(evt){
    this.setData({ expCode:evt.detail.value})
  },
  /**
   * 获取快递
   */
  getExpress:function(){
    var obj = this;
    var comCode = obj.data.comList[obj.data.index].no;
    var data={
      key: '3588ed959023394cd0e6cd0c5514d634',
      com: comCode,
      no: this.data.expCode
    };
    app.getRequestData('http://v.juhe.cn/exp/index',data, function (res) {
      obj.setData({ expList: res.data.result.list });
    });
  }
})