<template>
  <div class="menuLogo" @click="logoClick">
    
  </div>
</template>
<script>
  export default{
    name: "menuLogo",
    props: ["image", "globalData"],
    data(){
      return {
      }
    },
    methods:{
      logoClick(){
        console.log(this.globalData.domain + "logo.dir")
      }
    },
    computed:{
    }
  }
</script>
