<template>
  <div id="app">
     <HeaderTop></HeaderTop>
     <router-view></router-view>
     <FooterBottom v-if="hide"></FooterBottom>
  </div>
</template>

<script>
  import HeaderTop from "./components/header.vue"
  import FooterBottom from "./components/footer.vue"

  export default{
      data(){
         return{
           hide:true
         }
      },
      components:{
           HeaderTop,
           FooterBottom
      },
      watch:{
        $router(to,from){
           if( to.path="/productDetail"){
                this.hide=false;
           }else{
           }
        }
      }
  }
</script>

<style scoped>

</style>
