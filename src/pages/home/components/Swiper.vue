<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
          </swiper-slide>
          
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- 左右箭头 -->
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
          <!-- 滚动条 -->
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
  </div>
            
</template>

<script>
export default{
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination',
          loop : true
        },
        swiperList: [{
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/8bafd35f-bde7-45f1-9202-fa96ff014a75.jpg_r_390x260x90_474f0918.jpg'
          },{
            id: '0002',
            imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5b6b9b1d-fcab-4134-8c6c-5241ecc832d4.jpg_r_390x260x90_16cec21e.jpg'
          }]
      }
    },

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #fff;
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;
  }
  .swiper-img{
    width: 100%;
    height: 2.4rem;
  }
</style>