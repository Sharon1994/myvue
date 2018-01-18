<template>
  <div class="funnypop">
     <slot name="topcon"></slot>
  </div>
</template>
<style>
  .funnypop {
    width: 100%;
    height: 125px;
    position: relative;
    z-index: -2;
  }
  .funnypop .conleft{
   width: 40%;

  }
  .funnypop .conleft,.funnypop .conright{
    float: left;
  }
  .conleft img{
      width: 25%;
      position: absolute;
      top: 5%;
    left: 15%;
  }
  .conright {
    position: absolute;
    top: 18%;
    left: 45%;
  }
  .conright p{
    color: #aea8ad;
  }
  .conright h4{
    color: #7d777c;
  }
</style>
