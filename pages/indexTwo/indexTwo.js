Page({
  data: {
    imgheights: [],
    current: 0,
    imgwidth: 750,
    
    imgUrls: [
      '/image/1.jpg',
      '/image/蓝色多肉.jpg',
      '/image/山地玫瑰多肉.jpg',
      '/image/3.jpg',
    
      '/image/4.jpg'
    ],
  },
  imageLoad: function (e) {
    //获取图片真实宽度
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      src = [],
      //宽高比
      ratio = imgwidth / imgheight;
    console.log(e.target.dataset['src'])
    src.push(e.target.dataset['src'])
    console.log(src)
    //计算的高度值
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights
    //把每一张图片的高度记录到数组里
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  },
  bindchange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
})
