<template>
  <div  >
    <div class="contentConteiner left">
      <transition name="bounce" >
        <div id="fly" v-show="show == 'projects' " >
          <p>what i did </p>
        </div>
      </transition>
      <transition name="bounce">
        <div id="fly"  v-show="show == 'contact' " >
          <p for="name">Your Name</p>
          <input id="name">
          <p for="email">E-mail</p>
          <input id="email">

          <p for="subject">Subject</p>
          <input id="subject">

          <p for="message">Message</p>
          <textarea id="message" name="name" rows="12" cols="80"></textarea>

          <button class="call-to-action" name="button">Send</button>
        </div>
      </transition>
      <transition name="bounce">
        <div id="fly"  v-show="show == 'skills' " >
          <p>my skills</p>
        </div>
      </transition>
      <transition name="bounce">
        <div id="fly"  v-show="show == 'about' " >

        </div>
      </transition>
      <transition name="bounce">
        <div id="fly"  v-show="show == 'home' " >
          <p>My name is Karol Wiczling.<br> Im from Poland, and I both:<br> web designer and develpoer</p>
          <button class="call-to-action"> Contact me</button>
        </div>
      </transition>
    </div>
    <div class="contentConteiner right">
       <transition name="bounce" >
        <div id="fly" v-show="show == 'projects' " >
          <p>that project</p>
        </div>
      </transition>
      
    </div>
  </div>
</template>
<script>
  export default{
    name: "contentInside",
    data(){
      return {
        show : "home"
      }
    },
    methods:{

    },
    computed:{

    },
    components:{
    },
    created(){
      Event.$on("changePage", (page) => this.show = page)
    }
  }
</script>
