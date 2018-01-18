<template>
  <div class="mine">
    <Item topbartext="我的">
      <img src="../../assets/img/ic_settings.png" slot="imgb"/>
    </Item>
    <Topbar>
          <div slot="minetopbarcontent">
            <div class="minetopbarcontent-left">
              <img src="../../assets/img/images/ic_groupchat_default.png" class="minetopbarcontentimg"/>
            </div>
            <div class="minetopbarcontent-right">
                <p>常思吉 <img src="../../assets/img/images/ic_mine_male.png" class="content-rightimg"/></p>
                <div class="topbarright-bott">
                  <span>ID:158746672</span>
                  <span class="geren">个人主页 <img src="../../assets/img/images/ic_seti_arrow_right_white.png" class="imgright"/></span>
                </div>
              <div class="fina">
                <span>关注 1</span>
                <span>被关注 0</span>
              </div>
            </div>
          </div>
    </Topbar>
    <Tixing>
      <div slot="hengtiaobar" >
        <div class="hengtiaobar">
        <img src="../../assets/img/images/ic_mine_notification.png" class="hengtiaobarimga"/>
        <span class="hengtiaobartext">提醒</span>
        <img src="../../assets/img/images/ic_arrow_gray_small.png"  class="hengtiaobarimgb"/>
        </div>
        <div class="tixingcon">
          <p>暂无新提醒</p>
        </div>
      </div>
    </Tixing>

    <List texta="喜欢" textb="日记" textc="相册" textd="我的广播">
      <img src="../../assets/img/images/ic_photo_liked.png" slot="colone" class="listimga"/>
      <img src="../../assets/img/images/ic_my_note.png" slot="coltwo" class="listimgb"/>
      <img src="../../assets/img/images/ic_my_album.png" slot="colthree" class="listimgc"/>
      <img src="../../assets/img/images/ic_my_status.png" slot="colfour" class="listimgd"/>
    </List>
    <List texta="电影·电视" textb="读书" textc="音乐" textd="同城活动">
      <img src="../../assets/img/images/ic_my_movies_tvs.png" slot="colone" class="listimga"/>
      <img src="../../assets/img/images/ic_my_books.png" slot="coltwo" class="listimgb"/>
      <img src="../../assets/img/images/ic_my_music.png" slot="colthree" class="listimgc"/>
      <img src="../../assets/img/images/ic_my_events.png" slot="colfour" class="listimgd"/>
    </List>
    <List texta="豆列" textb="订单" textc="钱包" >
      <img src="../../assets/img/images/ic_my_doulist.png" slot="colone" class="listimga"/>
      <img src="../../assets/img/images/ic_my_orders.png" slot="coltwo" class="listimgb"/>
      <img src="../../assets/img/images/ic_my_wallet.png" slot="colthree" class="listimgc"/>
    </List>
  </div>
</template>
<script>
  import Item from "../../lib/topbar.vue";
  import Tixing from "../../lib/hengtiao.vue";
  import Topbar from "../../lib/minetopbar.vue";
  import List from "../../lib/minelist.vue";
  export default {
    components:{
      Item,
      Tixing,
      Topbar,
      List
    }
  }
</script>
<style>

  .minetopbarcontent{
    position: relative;

  }
  .imgright{
    width: 15px;
  }
  .hengtiaobarimgb{
    position: absolute;
    right: 5%;
  }
  .minetopbarcontentimg{
    width:80px;
  }
  .minetopbarcontent-left{
    margin:25px 5% ;
    z-index: 1;
  }
  .minetopbarcontent-right{
    width: 75%;
    margin-top: 20px;
    left: 31%;
    top: 55px;
    z-index: 1;
  }
  .minetopbarcontent-left,.minetopbarcontent-right{
   position: absolute;
  }
  .content-rightimg{
    width: 20px;
  }
  .topbarright-bott span,.minetopbarcontent-right p{
    color: white;
  }
  .topbarright-bott span{
    font-size: 14px;

  }
  .topbarright-bott{
    border-bottom: 1px solid white;
    padding: 10px 0;
  }
  .geren{
  position: absolute;
    right: 50px;
  }
.clear{
  clear: both;
}
  .fina{
     color: white;
    margin-top: 15px;

  }
  .tixingcon{
    text-align: center;
    color: darkgrey;
    padding: 15px 0;
    border-top: 1px solid darkgrey;
    background-color: #f0f0f0;
  }
</style>
