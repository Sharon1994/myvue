<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/lun/bg.jpg"/></div>
      <div class="swiper-slide"><img src="../assets/lun/bg1.jpg"/></div>
      <div class="swiper-slide"><img src="../assets/lun/bg2.jpg"/></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
  /*引用js*/
 /* import "../assets/yinyong/js/swiper.min.js";*/
  import "../assets/yinyong/js/swiper.js"
  export default {
    mounted:function(){
      var mySwiper = new Swiper ('.swiper-container', {
        /*设置分页器*/
        pagination : '.swiper-pagination',
        /*设置轮播间隔*/
        autoplay : 1000,
      })
    }
  }
</script>
<style>
  @import "../assets/yinyong/css/swiper.css";
  .swiper-container {
    width: 100%;
    z-index: -1;
  }
  .swiper-slide img {
    width: 100%;
    height: 100px;
  }
  .swiper-pagination{
    text-align: right;
  }
  .swiper-pagination-bullet-active{
    background-color: white;
  }
</style>

