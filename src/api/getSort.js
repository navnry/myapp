import jsonp from '@/assets/js/jsonp.js'

export function getSortData() {
  let method = "post"
  const url = "http://i.waimai.meituan.com/openh5/poi/filterconditions"
  let data = {
    _: new Date().getTime(),
  }
  return jsonp(method, url, data, {param: "jsonpCallback"});
}
