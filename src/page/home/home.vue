<template>
  <div>
    <Title titlebool="true">
      <div slot="hometitle" class="hometitle">
        <input type="text" placeholder="影视 图书 唱片 小组等" />
        <img src="../../assets/img/ic_search_gray.png" class="hometitleimga"/>
        <img src="../../assets/img/ic_scan_gray.png" class="hometitleimgb"/>
        <img src="../../assets/img/ic_chat_white.png" class="hometitleimgc"/>
      </div>
    </Title>
    <Lun></Lun>
    <Tixing>
      <div slot="hengtiaobar" class="hengtiaobarredian">
        <span>热点</span>
      </div>
    </Tixing>
    <Homelist v-for="v in arr">
      <div slot="listcontent" class="listcontent">
        <div class="listcontentleft">
          <h3>{{v.title}}</h3>
          <p>{{v.target.desc}}</p>
          <span>作者：{{v.target.author.name}}</span>
        </div>
        <div  class="listcontentright">
          <img :src="v.target.author.avatar" alt="" class="homelistimg"/>
        </div>
        <div class="clear"></div>
      </div>

    </Homelist>
  </div>
</template>
<script>
  import Title from "../../lib/topbar.vue"
  import Lun from "../../lib/lun.vue"
  import Tixing from "../../lib/hengtiao.vue";
  import Homelist from "../../lib/homelist.vue";
  export default{
    data:function(){
  return{
    arr:""
  }
},
    components:{
      Lun,
      Title,
      Tixing,
      Homelist,
    },
    mounted:function(){
     this.axios.get("/api/someApi").then(
       (res)=>{
       this.arr=res.data.recommend_feeds;
     }
     )
    }
  }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  .hometitle img{
    width: 25px;
    position: absolute;
    top: 19px;
  }
  .hometitle input{
    position: absolute;
    left: 3%;
    top: 15px;
    border-radius: 5px;
    text-indent: 2em;
  }
.hometitleimga{
  left: 4%;
}
  .hometitleimgb{
    right:18%
  }
  .hometitleimgc{
    right: 5%;
  }
  .hengtiaobarredian{
    border-left: 3px solid orange;
    position: relative;
    top: 5px;
    z-index: -2;
  }
  .hengtiaobarredian span{
    color: orange;
   margin-left: 4%;

  }
.clear{
  clear: both;
}

</style>
