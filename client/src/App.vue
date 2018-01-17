<template>
  <div id="app">
    <the-public></the-public>
    <router-view></router-view>
    <div class="clear"></div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import ThePublic from '@/components/navbar/ThePublic'
import TheFooter from '@/components/navbar/TheFooter'
export default {
  name: 'app',
  components: {
    ThePublic,
    TheFooter
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.clear { 
  clear: both;
}
</style>
