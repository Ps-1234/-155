var app = getApp()
Page({
  
  loginBtnClick: function() {
     wx.switchTab({
      url: "../indexTwo/indexTwo"
    })
 },
  register:function(){
wx.navigateTo({
  url:"../load/load"
  })

  },
  Problem:function(){
wx.navigateTo({
  url: '../problem/problem'
})
  }
  
 
})
