//app.js
App({
  onLaunch: function () {
wx.request({
  url: 'http://localhost:3000/Files',
  success: res=> {
    if (res.statusCode == 200) {
      this.globalData.filesInfo = res.data;
    } else {
      console.log(errorInfo)
    }
  }
})
     
  },
  globalData: {
    filesInfo:[],
    errorInfo:"无法连接到服务器"
  }
})