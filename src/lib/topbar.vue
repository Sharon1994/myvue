<template>
  <div :class="{topbar:true,hometitlebgcolor:titlebool}">
    <span>{{topbartext}}</span>
    <span class="imga"><slot name="imga"></slot></span>
    <span class="imgb"><slot name="imgb"></slot></span>
    <slot name="hometitle"></slot>
  </div>
</template>
<script>
  export default {
    props:["topbartext","titlebool"]
  }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  .topbar{
    width: 100%;
    height: 60px;
  /*  border-bottom: 1px solid black;*/
    position: fixed;
    top: 0;
    text-align: center;
    line-height: 60px;
    background-color: #e9e0c5;
    z-index: 999;
  }
  .topbar img{
    width: 30px;
  }
  .imga{
    position: absolute;
    top: 20%;
    right: 20%;
  }
  .imgb{
    position: absolute;
    top: 20%;
    right: 5%;
  }
  .topbar input{
    width: 80%;
    height: 30px;

  }
  .hometitlebgcolor{
    background-color: #63a34a;
  }
</style>
