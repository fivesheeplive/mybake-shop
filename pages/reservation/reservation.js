Page({
  data: {
    date: '',
    phone: ''
  },
  onDateInput(e) {
    this.setData({ date: e.detail.value });
  },
  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  }
});
