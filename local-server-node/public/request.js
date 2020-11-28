export function getUserList() {
  let url = 'http://192.168.0.1';
  fetch(url)
  console.log(url);
}

export function setData() {
  const baseUrl = 'http://wx.oa.com.kuangpengjihua/get_temp_info';
  fetch(baseUrl, {
    method: "post",
  })
}