<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
   <NewCompnenttest />
   <DataPassComponent msg="how to pass data from script to html tags"/>
   <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewCompnenttest from './components/NewCompnent.vue'
import DataPassComponent from './components/DataPassComponent.vue'

export default {
  name: 'AppTest', 
  components: { 
    HelloWorld,
    NewCompnenttest,
     DataPassComponent  
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
