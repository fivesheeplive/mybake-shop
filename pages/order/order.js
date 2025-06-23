Page({
  data: {
    orderTypes: ['提前点单', '到店点单'],
    consumeWays: ['堂食', '自取', '邮寄'],
    orderType: '提前点单',
    consumeWay: '堂食'
  },
  onTypeChange(e) {
    this.setData({
      orderType: this.data.orderTypes[e.detail.value]
    });
  },
  onConsumeChange(e) {
    this.setData({
      consumeWay: this.data.consumeWays[e.detail.value]
    });
  }
});
