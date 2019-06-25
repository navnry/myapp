<template>
  <div class="messge">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
  </div>
</template>

<script>
  import {getRecommendData} from '@/api/getRecommendData'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';

  export default {
    name: "Messge",
    data() {
      return {
        textarea: '',
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

  .popup {
    padding: .2rem;
  }

</style>
