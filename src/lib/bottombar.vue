<template>
  <div class="bottombar">
    <Zitem itemtext="主页" mark="home" :sel="futext" @zipaochu="fufun">
      <img src="../assets/img/1.png" slot="imga"/>
      <img src="../assets/img/6.png" slot="imgb"/>
    </Zitem>
    <Zitem itemtext="书影音" mark="book" :sel="futext" @zipaochu="fufun">
      <img src="../assets/img/2.png" slot="imga"/>
      <img src="../assets/img/7.png" slot="imgb"/>
    </Zitem>
    <Zitem itemtext="广播" mark="video" :sel="futext" @zipaochu="fufun">
      <img src="../assets/img/3.png" slot="imga"/>
      <img src="../assets/img/8.png" slot="imgb"/>
    </Zitem>
    <Zitem itemtext="小组" mark="group" :sel="futext" @zipaochu="fufun">
      <img src="../assets/img/4.png" slot="imga"/>
      <img src="../assets/img/9.png" slot="imgb"/>
    </Zitem>
    <Zitem itemtext="我的" mark="mine" :sel="futext" @zipaochu="fufun">
      <img src="../assets/img/5.png" slot="imga"/>
      <img src="../assets/img/10.png" slot="imgb"/>
    </Zitem>
  </div>
</template>
<script>
  import Zitem from "./zitem.vue"
  export default {
    data:function(){
      return{
        futext:"a"
      }
    },
    methods:{
      fufun:function(val){
        this.futext=val
      }
    },
    components:{
      Zitem
    },
    mounted:function(){
      this.$router.push("/home")
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .bottombar{
    width: 100%;
    height: 60px;
    text-align: center;
    bottom: 0;
    border-top: 1px solid black;
    position: fixed;
    background-color: white;
  }

</style>
