<template>
  <div>
    <Item topbartext="小组">
      <img src="../../assets/img/ic_actionbar_search_icon.png" slot="imga"/>
      <img src="../../assets/img/ic_create_group_chat_blue.png" slot="imgb"/>
    </Item>
    <div class="grouptop">
      <img src="../../assets/img/images/banner/02.jpg"/>
      <span>根据你的兴趣进行挑选</span>
    </div>
    <div class="grouptoptwo">
      <img src="../../assets/img/images/ic_rec_group_banner_6.png"/>
      <span>精选推荐</span>
      <p>影视</p>
    </div>
    <Grouplist texta="佳片推荐" textb="伊壁鸠鲁错误地认为，灵魂是和躯体一起死亡的。" textc="600人关注">
      <img src="../../assets/img/images/short_cut_for_group.png" slot="gropimga"/>
      <img src="../../assets/img/images/ic_voucher_checked.png" slot="gropimgb"/>
    </Grouplist>
    <Grouplist texta="佳片推荐" textb="伊壁鸠鲁错误地认为，灵魂是和躯体一起死亡的。" textc="600人关注">
      <img src="../../assets/img/images/short_cut_for_group.png" slot="gropimga"/>
      <img src="../../assets/img/images/ic_voucher_checked.png" slot="gropimgb"/>
    </Grouplist>
    <Grouplist texta="佳片推荐" textb="伊壁鸠鲁错误地认为，灵魂是和躯体一起死亡的。" textc="600人关注">
    <img src="../../assets/img/images/short_cut_for_group.png" slot="gropimga"/>
    <img src="../../assets/img/images/ic_voucher_checked.png" slot="gropimgb"/>
  </Grouplist>
    <Grouplist texta="佳片推荐" textb="伊壁鸠鲁错误地认为，灵魂是和躯体一起死亡的。" textc="600人关注">
      <img src="../../assets/img/images/short_cut_for_group.png" slot="gropimga"/>
      <img src="../../assets/img/images/ic_voucher_checked.png" slot="gropimgb"/>
    </Grouplist>
    <Grouplist texta="佳片推荐" textb="伊壁鸠鲁错误地认为，灵魂是和躯体一起死亡的。" textc="600人关注">
      <img src="../../assets/img/images/short_cut_for_group.png" slot="gropimga"/>
      <img src="../../assets/img/images/ic_voucher_checked.png" slot="gropimgb"/>
    </Grouplist>
  </div>
</template>
<script>
  import Item from "../../lib/topbar.vue"
  import Grouplist from "../../lib/grouplist.vue"
  export default {
    components:{
      Item,
      Grouplist
    }
  }
</script>
<style>
  .grouptop,.grouptoptwo{
    position: relative;

  }
  .grouptoptwo{
    border-bottom: 1px darkgrey solid;
    padding-bottom: 15px;
    margin-bottom: 15px;

  }
  .grouptoptwo p{
    width: 10%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color:white;
    position: absolute;
    left: 45%;
  }
  .grouptop span{
    position: absolute;
    bottom: 9px;
    left: 1%;
    color: rgba(123, 121, 119, 0.91);
  }
  .grouptop img,.grouptoptwo img{
    width: 100%;
    z-index: -2;
  }
  .grouptoptwo span{
    position: absolute;
    bottom: 30px;
    left: 3%;
    color: white;
  }
</style>
