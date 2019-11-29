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
            imgUrl:'https://imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg'
          },{
            id: '0002',
            imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/76e68eda4ed089c0e5b0ce2367efe428.jpg'
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
  }
</style>