<template>
  <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwipper">
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
    props: {
      swiperList: Array
    },
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination',
          loop : true
        },
      }
    },
    computed: {
      showSwipper () {
        return this.swiperList.length
      }
    }

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