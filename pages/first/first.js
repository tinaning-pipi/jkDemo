var order = ['red', 'yellow', 'blue', 'green', 'red']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    butText:'第一个按钮',
    show:false,
    forTemp: { index:1,msg:'lkjk',time:new Date()},
    toView: 'red',
    scrollTop: 100,
    listA: [{ id: '1', name: '阿三的省市', time: '2018-08-15 10:38:09' }, { id: '2', name: '李三的省市', time: '2018-08-23 10:38:09' }, { id: '3', name: '李莉的省市', time: '2018-08-23 14:58:09' }, { id: '4', name: '乐积分女', time: '2018-04-15 10:38:09' }, { id: '5', name: '胜多负少', time: '2018-04-15 10:38:09' }, { id: '6', name: '色色冯绍峰大幅度发斯蒂芬斯蒂芬', time: '2018-04-15 10:38:09' }, { id: '7', name: '省份省份水电费水电费水电费的发送到发送到发送到冯绍峰第三方士大夫士大夫', time: '2018-04-15 10:38:09' }]
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
  chgName:function(){
    var ifShow=this.data.show    
    var arr=this.data.listA
    arr.pop()
    this.setData({ butText: '点我', show: !ifShow,listA:arr })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  }
})