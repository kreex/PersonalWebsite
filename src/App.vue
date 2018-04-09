<template>
  <div id="app">
    <horizontalMenu :globalData="globalData"></horizontalMenu>
    <contentInside></contentInside>
    <socialMedia></socialMedia>

  </div>
</template>

<script>
import socialMedia from "./components/socialMedia"
import horizontalMenu from './components/horizontalMenu'
import contentInside from './components/contentInside'

export default {
  name: 'app',
  data () {
    return {
      globalData:{
        domain: "localhost:8080/"
      }
    }
  },
  components: {
    horizontalMenu,
    contentInside,
    socialMedia
  }
}
</script>
