<template>
  <div class="sider" @click="closeSider">
    <div class="sider-wrap" @click.stop>
      <div class="sider-head">
        <img src="" alt="">
        <span>{{username}}</span>
      </div>
      <div class="side-content">

      </div>
      <div class="sider-footer">
        <span>{{address}}</span>
        <span>{{wendu}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  // import BMap from 'BMap'
  import {location} from "@/assets/js/LocationUtil";

  export default {
    data() {
      return {
        username: "未登录",
        wendu: 0,
        address: '正在定位...',
        activeNames: ['1']
      }
    },
    mounted() {
      this.getLocation()
      // this.$axios.get("http://wthrcdn.etouch.cn/weather_mini?city=长沙").then(res => {
      this.$axios.get("https://www.tianqiapi.com/api/").then(res => {
        this.wendu = res.data.data[1].tem
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      closeSider: function () {
        this.$parent.closeSider();
      },
      getLocation() {
        let _that = this;
        let geolocation = location.initMap("map-container"); //定位
        AMap.event.addListener(geolocation, "complete", res => {
          _that.lat = res.position.lat;
          _that.lng = res.position.lng;
          _that.province = res.addressComponent.province;
          _that.city = res.addressComponent.city;
          _that.district = res.addressComponent.district;
          _that.address = _that.city + _that.district
        });
      },
    }
  }
</script>

<style scoped lang="less">
  .sider {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all .3s linear;


    .sider-wrap {
      width: 60%;
      height: 100%;
      float: left;
      background: #ffffff;
      padding: .5rem .2rem;
      position: relative;
      left: -60%;
      transition: left .2s linear;

      .sider-head {
        text-align: center;
        padding: .4rem 0;
        border-bottom: 1px solid #cccccc;

        img {
          display: block;
          width: 1rem;
          height: 1rem;
          margin: .5rem auto .15rem auto;
          border-radius: 50%;
          background: #cccccc;
        }

        span {
          font-size: .3rem;
          color: #333333;
        }
      }

      .sider-footer {
        position: absolute;
        left: .2rem;
        right: 0;
        /*text-align: right;*/
        bottom: .5rem;
        right: .3rem;
        padding: .3rem 0;
        border-bottom: 1px solid #cccccc;

        span {
          font-size: .32rem;
          color: #333333;
        }
      }
    }
  }


  .sider.open {
    opacity: 1;
    visibility: visible;
    transition: all .3s linear;

    .sider-wrap {
      left: 0;
      transition: left .2s linear;
    }
  }
</style>
