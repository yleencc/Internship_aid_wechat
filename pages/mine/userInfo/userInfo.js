// pages/mine/userInfo/userInfo.js
let util = require('../../../utils/util.js');
import { userInfo } from '../../../api/mine.js';
import Dialog from '/@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
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

  //获取用户信息
  getUserInfo: function() {
    userInfo().then(res => {
      if(res.code == 1) {
        this.setData({
          userInfo: res.result
        })
      }else {
        wx.showToast({
          title: '获取信息失败',
          icon: 'none',
          duration: 1000
        });
      }
    }).catch(err => {
      console.error(err)
    })
  },

  //退出登录
  bindTapLogout: function() {
    Dialog.confirm({
      title: '提示',
      message: '是否退出并重新登录？'
    }).then(() => {
      util.setCache("token", null);
      wx.showToast({
        title: '已退出登录',
        icon: 'none',
        duration: 1500,
        success: function() {
          setTimeout(() => {
            //直接关闭当前页面,跳转到新页面
            wx.redirectTo({
              url: '/pages/login/login/login',
            })
          }, 1000);
        }
      });

    }).catch(() => {
      // on cancel
    });
  }
})