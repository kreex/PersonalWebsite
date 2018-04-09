<template>
  <div class="menuElement"  @click="menuClick">
      <slot></slot>
  </div>
</template>
<script>
  export default{
    name: "menuElement",
    props: ["menuName"],
    data(){
      return {

      }
    },
    methods:{
      menuClick(){
        // window.location.pathname = this.menuName
        this.$emit("menuClick", this.menuName)
        Event.$emit("changePage", this.menuName)
      }
    },
    computed:{
    }
  }
</script>
