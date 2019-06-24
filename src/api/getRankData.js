import jsonp from '@/assets/js/jsonp.js'

export function getRankData() {
  const url = "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg"

  let data = {
    _: new Date().getTime(),
    format: "jsonp",
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0,
    platform: "h5",
    needNewCode: 1,
  }
  return jsonp(url, data, {param: "jsonpCallback"});
}

export function getRank(id) {
  const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg"

  let data = {
    uin: 0,
    format: 'jsonp',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: id,
  }
  return jsonp(url, data, {param: "jsonpCallback"});
}
