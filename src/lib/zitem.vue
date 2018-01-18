<template>
  <div class="item" @click="zifun()">
    <span v-show="bool"><slot name="imga"></slot></span>
    <span v-show="!bool"><slot name="imgb"></slot></span>
    <br/>
    <span :class="bool?'itemtextcoloractive':'itemtextcolor'">{{itemtext}}</span>
  </div>
</template>
<script>
  export default {
    props:["itemtext","mark","sel"],
    computed:{
      "bool":function(){
        if(this.mark==this.sel){
          return false;
        }
        return true;
      }
    },
    methods:{
      zifun:function(){
       /* console.log(this.mark);
        console.log(this.sel)*/
        this.$emit("zipaochu",this.mark)
        this.$router.push("/"+this.mark)
      }
    }
  }
</script>
<style>
  .item{
    width: 20%;
    float: left;
    text-align: center;
  }
  .item img{
    width: 35px;
  }
  .itemtextcoloractive{
    color: black;
  }
  .itemtextcolor{
    color: #f166d1;
  }
</style>
