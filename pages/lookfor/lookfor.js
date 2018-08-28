Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    srollHeight:0,
    //记录当前点击功能id
    dateCurrent:'',
    //功能数据
    listFun: [{ id: '1', name: '寻物启事' }, { id: '2', name: '失物招领' }, { id: '3', name: '寻人启事' }, { id: '4', name: '感谢信' }],
    listA: [{ id: '1', img: '11.png', zan: 99, message: 30, name: '我在人民广场吃着炸鸡，结果把猫丢了，黑得发亮的猫猫', nic: 'lililili', time: '2018-08-28 15:28:09' }, { id: '2', img: '12.png', zan: 99, message: 30, nic: 'tinaning-007pipi', name: '丢了钱包', time: '2018-08-28 10:38:09' }, { id: '3', zan: 99, message: 30, img: '21.png', name: '李莉的省市', nic: 'linda-liu', zan: 99, message: 30, time: '2018-08-28 14:58:09' }, { id: '4', nic: '从前有只猫', img: 'cat1.jpg', zan: 99, message: 30, name: '乐积分女', time: '2018-08-27 10:38:09' }, { id: '5', img: 'cat2.jpg', zan: 99, message: 30, nic: '我去年买了个表', name: '胜多负少', time: '2018-04-15 10:38:09' }, { id: '6', zan: 99, message: 30, img: 'banana.jpg', name: '色色冯绍峰大幅度发斯蒂芬斯蒂芬', nic: '充了一罐奶粉', time: '2018-04-15 10:38:09' }, { id: '7', zan: 99, message: 30,img: '41.png', name: '省份省份水电费水电费水电费的发送到发送到发送到冯绍峰第三方士大夫士大夫', nic: '电脑好重呀', time: '2018-04-15 10:38:09' }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({ dateCurrent: this.data.listFun[0].id});
    var app=this;
    wx.getSystemInfo({
      success: function (res) {
        app.setData({ srollHeight: res.windowHeight - 30 });
      },
    })
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
  upper: function (e) {
    //console.log(e)
  },
  lower: function (e) {
    //console.log(e)
  },
  scroll: function (e) {
   // console.log(e)
  },
  /*功能切换事件，更改样式 */
  chg:function(e){
    var obj=e.target.id;
    this.setData({ dateCurrent:obj});
  },
  showProd:function(e){
    var obj = e.currentTarget.id;
    wx.navigateTo({
      url: '../product/product?id='+obj
    })
  }
})