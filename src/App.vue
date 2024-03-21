<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <reuseComponent />
  <event msg="Event AND Two way binding ."/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <test msg="Welcome to Your Vue.js App"/>
   
</template>

<script>
import reuseComponent from './components/reuseComponent.vue'
import event from './components/eventsTwowayModalBinding.vue'

import HelloWorld from './components/HelloWorld.vue'
import test from './components/myFirstComponent.vue'

export default {
  name: 'App',
  components: {
    event,
    HelloWorld,
test,
reuseComponent,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
