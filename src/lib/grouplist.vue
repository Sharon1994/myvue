<template>
  <div class="grouplist">
    <div class="lista">
      <slot name="gropimga"></slot>
    </div>
    <div class="listb">
      <h3>{{texta}}</h3>
      <p>{{textb}}</p>
    </div>
    <div class="listc">
      <span>{{textc}}</span>
    </div>
    <div class="listd">
      <slot name="gropimgb"></slot>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
  export default {
    props:["texta","textb","textc"]
  }
</script>
<style>
  .clear{
    clear: both;
  }
  .grouplist{
    width: 100%;
    height: 92px;
    margin-bottom: 15px;
    padding-bottom: 10px;
   border-bottom: 1px solid #d4d4d4;
  }
  .grouplist div{
    float: left;
  }
  .lista{
    width: 20%;
  }
  .lista img,.listd img{
    width: 100%;
  }
  .listb{
    width: 45%;
  }
  .listb h3{
    color: rgb(59, 54, 54);
  }
  .listb p{
    color: rgba(0, 0, 0, 0.37);
  }
  .listc{
    width: 20%;
  }
  .listc span{
    line-height: 91px;
    color: #d8cdbf;
    font-size: 1%;
    text-align: center;
  }
  .listd{
    width: 10%;
    padding-left: 4%;
    padding-top: 27px;
  }
  .listd img{
    width: 70%;
    line-height: 91px;
  }
</style>
