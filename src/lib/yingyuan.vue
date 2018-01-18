<template>
  <div class="yingyuan">
    <div class="title">
      <h3>{{title}}</h3>
      <span>{{more}}</span>
      <span><img src="../assets/img/images/ic_arrow_gray_small.png" class="yingyuanimgb"/></span>
    </div>

      <div class="haibao">
        <ul class="haibaocon">
          <li>
            <slot name="imga"></slot>
            <h4>{{content}}</h4>
            <slot name="stara"></slot>
          </li>
          <li>
            <slot name="imgb"></slot>
            <h4>{{content}}</h4>
            <slot name="starb"></slot>
          </li>
          <li>
            <slot name="imgc"></slot>
            <h4>{{content}}</h4>
            <slot name="starc"></slot>
          </li>
          <li>
            <slot name="imgd"></slot>
            <h4>{{content}}</h4>
            <slot name="stard"></slot>
          </li>
          <li>
            <slot name="imge"></slot>
            <h4>{{content}}</h4>
            <slot name="stare"></slot>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  export default {
    props:["title","more","content"]

  }
</script>
<style>
  .yingyuan .title{
   padding-left: 10px;
  }
 .yingyuan{
   width: 100%;
   margin: 15px 0;
   position: relative;
 }
 .yingyuan span:nth-child(2){
   position: absolute;
   top: 2px;
   right: 8%;
 }
 .yingyuan .yingyuanimgb{
   width: 8%;
   right: 1%;
   top: -1px;
   position: absolute;
 }
.haibaocon li{
  width: 150px;
  height: 150px;
  display: inline-block;

  margin-left: 10px;
}
  .haibaocon{
    margin-top: 5px;
  overflow-x: auto;
  /* 段落中内容不换行*/
  white-space: nowrap;
  }
  .haibaocon .yingyuanimga{
    width:100%;
  }
  .haibaocon h4,.starimg{
    text-align: center;
  }
.starimg img{
  width: 20px;
}
</style>
