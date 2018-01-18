<template>
  <div class="minelist">
    <div class="lista">
    <slot name="colone"></slot>
    <p>{{texta}}</p>
    </div>
    <div>
    <slot name="coltwo"></slot>
    <p>{{textb}}</p>
    </div>
    <div>
    <slot name="colthree"></slot>
    <p>{{textc}}</p>
    </div>
      <div>
        <slot name="colfour"></slot>
    <p>{{textd}}</p>
  </div>
  </div>
</template>
<script>
  export default {
    props:["texta","textb","textc","textd"]
  }
</script>
<style>

  .minelist{
   width: 100%;
    position: relative;
    height: 100px;
    top: 70px;
    padding: 35px 0;
    border-bottom: 1px solid silver;
    z-index: -2;
  }
  .minelist div{
    float: left;
    width: 25%;
    text-align: center;
  }
  .minelist img{
    width: 30%;
  }
</style>
