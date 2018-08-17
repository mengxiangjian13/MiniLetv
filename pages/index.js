// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534399622578&di=5ec4cf828025eaf1b85d24cec43ba55a&imgtype=0&src=http%3A%2F%2Ffile25.mafengwo.net%2FM00%2F4D%2F6C%2FwKgB4lOepRiANhSiAAGtdayQ1DQ68.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534399622578&di=b3e42dcfc80c60fab881a7762a54ac17&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F19784%2F19783095.JPG",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534399622578&di=edd8fc967414cf81e4f44faf8dcf860c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-17%2F59e5695a69035.jpg"],
    video: [1,2,3,4,5,6],
    title: ["热点", "电视剧", "电影", "纪录片", "甄嬛传", "芈月传"]
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
    console.log('down pull refresh!!!');
    wx.stopPullDownRefresh();
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

  clickMore: function(e) {
    console.log(e);
  },

  itemTap: function(e) {
    let videoId = e.currentTarget.dataset.videoId;
    if (videoId !== undefined) {
      console.log(videoId);
      let url = '/pages/play?vid=' + videoId;
      wx.navigateTo({
        url: url,
      });
    }
  }
})