<template>
  <div class="liuyan">
    <slot name="liuyancon"></slot>
  </div>
</template>
<style>
  .liuyan{
    width: 96%;
   background-color: #fff4e0;
    height: 310px;
    position: relative;
    border-radius: 5%;
    margin: 2%;
    z-index: -2;
  }
  .liuyan .liuyanconleft{
    width: 20%;
    margin-left: 15px;
  }
  .liuyanconleft,.liuyanconright{
    position: absolute;
    top: 5%;
  }
  .liuyanconleft img{
    width: 80%;
  }
  .liuyanconright{
    width: 80%;
    position: absolute;
    left: 25%;
  }
  .err{
    width: 3%;
    position: absolute;
    top: 10px;
    right: 13%;
  }
  .btn{
    width: 20%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 25px;
    right: 23%;
    background-color: #006600;
    border-radius: 5%;
    border: none;
    color: white;
  }
</style>
