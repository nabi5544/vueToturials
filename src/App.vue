<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <slotchildComponent/>
  <htmlbindingComponent/>
  <reuseComponent />
  <event msg="Event AND Two way binding ."/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <test msg="Welcome to Your Vue.js App"/>
   
</template>

<script>
import slotchildComponent from './components/slotchildComponent.vue'
import reuseComponent from './components/reuseComponent.vue'
import event from './components/eventsTwowayModalBinding.vue'

import HelloWorld from './components/HelloWorld.vue'
import test from './components/myFirstComponent.vue'
import htmlbindingComponent from './components/htmlbindingComponent.vue'

export default {
  name: 'App',
  components: {
     slotchildComponent,
    event,
    HelloWorld,
test,
reuseComponent,
htmlbindingComponent,
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
