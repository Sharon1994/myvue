<template>
  <div class="hengtiaobar">
      <slot name="hengtiaobar"></slot>
  </div>
</template>
<style>
  .hengtiaobar{
    width: 100%;
    height: 30px;
    margin-top: 10px;
    background-color: #ffffff;
    z-index: -1;
  }
  .hengtiaobar img{
    width: 30px;
  }
  .hengtiaobar{
    position: relative;
    padding: 5px 0;

  }
  .hengtiaobarimga{
    position: absolute;
    left: 4%;
    top: 3px;
  }
  .clear{
    clear: both;
  }
  .hengtiaobartext{
    position: absolute;
    top: 3px;
    left: 13%;
  }
</style>
