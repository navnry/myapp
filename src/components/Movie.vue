<template>
  <div class="movie">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <van-button type="default">默认按钮</van-button>
    <van-button loading type="primary" />
  </div>
</template>

<script>
  import {getRecommendData} from '@/api/getRecommendData.js'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';

  export default {
    name: "Movie",
    data() {
      return {
        textarea: '',
        recommendData: '',
        banner: ''
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
          this.$nextTick(function () {
            this.swiperInit()
          })
        })
      },
      swiperInit() {
        new Swiper(".swiper-container", {
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .el-carousel__container {
    height: auto;
  }

  .feel-input {
    width: 100%;
    padding: .2rem 0;

    .el-textarea__inner {
      height: 2rem;
    }

  }

  .swiper-container {
    width: 100%;

    .swiper-slide {
      font-size: 0;
    }
  }


</style>
