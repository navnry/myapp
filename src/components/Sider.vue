<template>
  <div class="sider" @click="closeSider">
    <div class="sider-wrap" @click.stop>
      <div class="sider-head">
        <img src="" alt="">
        <span>{{username}}</span>
      </div>
      <div class="side-content">
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
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
