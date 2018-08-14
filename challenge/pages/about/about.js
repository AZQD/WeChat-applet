// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info:{
          shop_name:'望京小腰（二七万达店）',
          shop_desc:'烧烤',
          city:'郑州市',
          addDetails:'汉江路人和路向东30米路南',
          phone:'18515599924',
          latitude:39.915,
          longitude:116.404
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
    calling: function () {
        wx.makePhoneCall({
            phoneNumber: this.data.info.phone,
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })
    },

    toAddress:function(){
        wx.navigateTo({
            url: '/pages/map/map?latitude='+this.data.info.latitude+'&longitude='+this.data.info.longitude
        })
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

    toIndex:function(){
        wx.navigateTo({
            url: '/pages/index/index'
        })
    },
    toAbout:function(){
        /*wx.navigateTo({
            url: '/pages/about/about'
        })*/
    }
})