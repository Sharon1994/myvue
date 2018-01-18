<template>
  <div class="homelistbar">
    <slot name="listcontent"></slot>
  </div>
</template>
<style>
  .homelistbar{
    width: 100%;
  }
  .homelistbar .listcontent{
    width: 100%;
  }
  .listcontentleft,.listcontentright{
    float: left;
  }
  .listcontentleft{
    width: 60%;
  }
  .listcontentright{
    width: 40%;
  }
  .listcontentleft h3,.listcontentleft p,.listcontentleft span{
    margin: 10px 15px;
  }
  .listcontentleft p{
    color: #909090;
  }
  .listcontentleft h3{
    color: #777777;
  }
  .listcontentleft span{
    color: #d0d0d0;
  }
.listcontent{
  padding-bottom: 10px;
  border-bottom: 1px solid #eae8e1;
}
  .listcontentright img{
    width: 90%;
   padding: 3px;
  }
</style>
