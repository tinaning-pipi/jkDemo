// pages/topic/topicList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true, 
    replyVal:'',//回复内容
    replyTo:'',//被回复对象
    topic: [{ id: '1', img: '21.png', nic: '动次打次', sj: '2018-8-28 21:33:03', nr: '好夸张的小黄人', zan: '0', reply: [{ nic: '你家的谁谁谁', sj: '2018-8-30 10:09:09', nr: '确实很夸张' }, { nic: '没有叮当的口袋', sj: '2018-8-31 15:44:09', nr: '我也想要个小黄人' }] }, { id: '2', img: '31.png', nic: '你妹妹的妹妹', sj: '2018-8-28 22:43:23', nr: '我没有想到的事', zan: '0',reply:[] }]
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
  ckZan: function (e) {
    var id =parseInt(e.target.id);
    var zan = 'topic[' + id +'].zan';
    if (this.data.topic[id].zan=='0') {
      this.setData({ [zan]: '1'})
    }else{
      this.setData({ [zan]: '0' })
    }
  },
  reBack:function(e){
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      replyTo:e.currentTarget.dataset.nic
    }) 
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  reply:function(e){
    this.setData({replyVal:e.detail.value})
  },
  //确认  
  confirm: function (e) {
    this.data.replyVal//回复内容值，连接服务器，传递参数
    this.data.replyTo//被回复对象昵称
    this.setData({
      hiddenmodalput: true
    })
  }  
})