<template>
  <div>
    <Item topbartext="书影音">
      <img src="../../assets/img/ic_actionbar_search_icon.png" slot="imga"/>
      <img src="../../assets/img/ic_create_group_chat_blue.png" slot="imgb"/>
    </Item>
    <div class="erji">
       <span :class="{green:aa==1}" @click="aa=1"><router-link to="/book/movie" >电影</router-link></span>
       <span :class="{green:aa==2}" @click="aa=2"><router-link to="/book/music">音乐</router-link></span>
       <span :class="{green:aa==3}" @click="aa=3"><router-link to="/book/read">读书</router-link></span>
       <span :class="{green:aa==4}" @click="aa=4"><router-link to="/book/tc">同城</router-link></span>
       <span :class="{green:aa==5}" @click="aa=5"><router-link to="/book/tv">电视</router-link></span>
      <div class="clear"></div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Item from "../../lib/topbar.vue"
  export default {
    components:{
      Item
    },
    data:function(){
      return{
        aa:1,
      }
    },
  }

</script>
<style>
  .erji a{
    float: left;
    width:20%;
    text-align:center;
    color: black;
    text-decoration: none;
  }
  .clear{
    clear: both;
  }
  .erji{
    width: 100%;
    height: 30px;
 /*   background-color: #646266;*/
    line-height: 30px;
  }
  .green a{
    border-bottom: 2px solid green;
  }
</style>
