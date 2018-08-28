// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowId:'',
    ifZan: false,
    ifLow: false,
    markers:[],
    proInfo: { id: '7', img: 'banana.jpg',zan:23453, name: '省份省份水电费水电费水电费的发送到发送到发送到冯绍峰第三方士大夫士大夫', nic: '电脑好重呀', time: '2018-04-15 10:38:09', remark: '本人于4月15日在四川省成都市高新区天府五街地铁口遗失小黄人一枚，请拾到者速与本人联系，此物危害性极大，容易把人萌翻，坠入动漫世界无法自拔。', lng: 104.076479, lat: 30.542615 }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({nowId:options.id})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({markers:[{
      iconPath: "/img/narrow.png",
      id: 0,
      latitude: this.data.proInfo.lat,
      longitude: this.data.proInfo.lng,
      width: 25,
      height: 25
    }]})
  },
  ckZan:function(){
    if(!this.data.ifZan){
      this.setData({ ifZan: true, ifLow: false,'proInfo.zan': this.data.proInfo.zan + 1 })
    }    
  },
  ckLow: function () {
    if (!this.data.ifLow) {
      this.setData({ ifLow: true,ifZan:false, 'proInfo.zan': this.data.proInfo.zan - 1 })
    }
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
  
  }
})