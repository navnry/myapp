<template>
  <div class="recommond">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <div class="list">
      <div class="main">
        <h2>电台</h2>
        <div class="list-container">
          <div class="list-item" v-for="item in recommendData.radioList">
            <div class="pic">
              <img :src="item.picUrl" alt="">
              <span class="icon_player"><i class="iconfont iconbofang"></i></span>
            </div>
            <div class="info">
              <p>{{item.Ftitle}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="main">
        <h2>热门歌单</h2>
        <div class="list-container">
          <div class="list-item" v-for="(item,index) in recommendData.songList">
            <div class="pic">
              <img :src="item.picUrl" alt="">
              <span class="listen_count"><i class="el-icon-headset"></i> {{((item.accessnum)/10000).toFixed(1)+'万'}}</span>
              <span class="icon_player"><i class="el-icon-video-play"></i></span>
            </div>
            <div class="info">
              <p>{{item.songListDesc}}</p>
              <h3>{{item.songListAuthor}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getRecommendData} from '@/api/getRecommendData'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';

  export default {
    name: "recommond",
    data() {
      return {
        recommendData: '',
        banner: '',
      }
    },
    mounted() {
      this._getRecommendData();
    },
    methods: {
      _getRecommendData() {
        getRecommendData().then((res) => {
          this.recommendData = res.data
          this.banner = res.data.slider
          console.log(res.data.slider);
          this.$nextTick(function () {
            this.swiperInit()
          })
        })
      },
      swiperInit() {
        new Swiper(".swiper-container", {
          speed: 600,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        })
      },
    }
  }
</script>

<style scoped lang="less">

  .recommond {
    background: #f4f4f4;


    .swiper-container {
      margin-bottom: .24rem;

      .swiper-slide {
        font-size: 0;
      }
    }


    .list {

      h2 {
        margin-bottom: .22rem;
        font-size: .32rem;
        font-weight: normal;
      }

      .list-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .list-item {
          width: 3.47rem;
          margin-bottom: .2rem;
          background: #ffffff;

          .pic {
            position: relative;
            font-size: 0;
            margin-bottom: .1rem;

            .listen_count {
              position: absolute;
              color: #ffffff;
              left: .1rem;
              bottom: .14rem;
              font-size: .22rem;

              i {
                font-size: .2rem;
              }
            }

            .icon_player {
              position: absolute;
              bottom: .14rem;
              right: .1rem;

              i {
                color: #ffffff;
                font-size: .4rem;
              }
            }
          }

          .info {
            width: 100%;
            padding: 0 .14rem .1rem;

            p {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: .28rem;
              line-height: .4rem;
            }

            h3 {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: normal;
              font-size: .24rem;
            }
          }
        }
      }
    }
  }
</style>
