Component({

  // 组件的属性列表，用于组件自定义设置
  properties: {
    bgcolor: {
      type: String,
      value: '#FFF'
    },
    selector: { // 定义骨架屏的容器
      type: String,
      value: 'skeleton'
    },
    loading: {
      type: String,
      value: 'spin'
    }
  },

  // 组件的初始数据
  data: {
    loadingAni: ['spin', 'chiaroscuro'],
    systemInfo: {},
    skeletonRectLists: [],
    skeletonCircleLists: []
  },

  // 组件挂载之前执行，节点树完成，可以用setData渲染节点
  attached: function () {
    //默认的首屏宽高，防止内容闪现
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      systemInfo: {
        width: systemInfo.windowWidth,
        height: systemInfo.windowHeight
      },
      loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'spin'
    })
  },

  // 组件挂载后执行，这时可以获取节点信息，也可以操作节点
  ready: function () {
    const that = this;
    //绘制背景
    wx.createSelectorQuery().selectAll(`.${this.data.selector}`).boundingClientRect().exec(function (res) {
      console.log('skeleton', res);
      that.setData({
        'systemInfo.height': res[0][0].height + res[0][0].top
      })
    });

    //绘制矩形
    this.rectHandle();
    //绘制圆形
    this.radiusHandle();
  },

  //组件的方法列表
  methods: {
    rectHandle: function () {
      const that = this;

      //绘制不带样式的节点
      wx.createSelectorQuery().selectAll(`.${this.data.selector} >>> .${this.data.selector}-rect`).boundingClientRect().exec(function (res) {
        console.log('skeleton-rect', res);
        that.setData({
          skeletonRectLists: res[0]
        })
      });

    },
    radiusHandle: function () {
      const that = this;

      wx.createSelectorQuery().selectAll(`.${this.data.selector} >>> .${this.data.selector}-radius`).boundingClientRect().exec(function (res) {
        console.log('skeleton-radius', res);
        that.setData({
          skeletonCircleLists: res[0]
        })
      });
    },
  }

})