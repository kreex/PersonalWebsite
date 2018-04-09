<template>
  <div class="menuConteiner" >

    <span id="menu-small" class="menuElement pointer" @click="toggleFullMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
    </span>

    <transition name="pop">
      <div class="fullMenuModal" v-show="is_full_menu" @click="toggleFullMenu"> 
        <menuElement :globalData="globalData"
          v-for="element in elementss"
          :menuName="element.menuName"
          :key="element.menuName"
          v-html="element.html"
          @menuClick="selectMenu"  >
        </menuElement>
      </div>
    </transition>

    <div class="normalMenu">
      <menuElement v-for="element in elementss"
        :menuName="element.menuName"
        :key="element.menuName"
        v-html="element.html"
        @menuClick="selectMenu" >
      </menuElement>
    </div>  
  </div>
</template>
<script>
  import menuElement from './menuHorizontal/menuElement'
  import menuLogo from './menuHorizontal/menuLogo'
  export default{
    name: "horizontalMenu",
    props: [ "globalData"],
    data(){
      return {
        is_full_menu: false,
        url: "home",
        elements: [
          {
            html: "About",
            menuName: "about",
          },
          {
            html: "Projects",
            menuName: "projects",
          },
          {
            html: "<span class='activeElement'><span id='logo-letter'>T</span></span>",
            menuName: "home",
          },
          {
            html: "Skills",
            menuName: "skills",
          },
          {
            html: "Contact",
            menuName: "contact",
          }
        ]
        // image: "https://cdn.internationalinsurance.com/wp-content/uploads/2017/07/img-logo-lg.png"
      }
    },
    methods:{
      selectMenu(ele){
        this.url = ele
        
      },
      toggleFullMenu(){
        this.is_full_menu = !this.is_full_menu ;
      }
    },
    computed:{
      elementss(){
        this.elements.forEach((el) => {
          if(el.menuName == "home")
            el.html = "<span class='logo-letter pointer'>T</span>"
          else
            el.html = "<span class='pointer'>" + el.menuName.charAt(0).toUpperCase() + el.menuName.slice(1) + "</span>";

          if(el.menuName == this.url )
            el.html = "<span class='activeElement'>" + el.html + "</span>"
        })

        return this.elements;
      }
    },
    components:{
      menuElement,
      menuLogo
    }
  }
</script>
