<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

<h1>Router Links.</h1>
<router-link to="/home"><button>Home</button></router-link>
<router-link to="/about"><button>About</button></router-link>
<router-link to="/profile/ahmad"><button>ahmad Profile</button></router-link>
<router-link to="/profile/waqar"><button>waqar Profile</button></router-link>
<router-link to="/profile/kashif"><button>kashif Profile</button></router-link>
<router-view></router-view>


  <h1>Dynamic Components.</h1>
 
<button @click="tab='slotchildComponent'">slotchildComponent</button>
<button @click="tab='htmlbindingComponent'">htmlbindingComponent</button>
<button @click="tab='reuseComponent'">reuseComponent</button>
<button @click="tab='event',msg='Event AND Two way binding .'">Event AND Two way binding</button>

<button @click="tab='HelloWorld',msg='Welcome to Your Vue.js App'">HelloWorld</button>

<button @click="tab='test',msg='Welcome to Your Vue.js App'">test</button>
<button @click="tab='lifecycle1Component',msg='Before and After create'">Life cycle Toturial 1</button>
<button @click="tab='lifecycle2Component',msg='Before and After mount'">Life cycle Toturial 2</button>
 <teleport to="#teleport_footer">
 <teleportComponent/>
 </teleport>

<component :is="tab" :msg="msg"/>

  <!-- <slotchildComponent/>
  <htmlbindingComponent/>
  <reuseComponent /> -->
  <!-- <event msg="Event AND Two way binding ."/> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <test msg="Welcome to Your Vue.js App"/> -->
   
</template>

<script>
import slotchildComponent from './components/slotchildComponent.vue'
import reuseComponent from './components/reuseComponent.vue'
import event from './components/eventsTwowayModalBinding.vue'

import HelloWorld from './components/HelloWorld.vue'
import test from './components/myFirstComponent.vue'
import htmlbindingComponent from './components/htmlbindingComponent.vue'
import teleportComponent from './components/teleportComponent.vue'
import lifecycle1Component from './components/lifecycle1Component.vue'
import lifecycle2Component from './components/lifecycle2Component.vue'
export default {
  name: 'App',
  components: {
     slotchildComponent,
    event,
    HelloWorld,
test,
reuseComponent,
htmlbindingComponent,
teleportComponent,
lifecycle1Component,
lifecycle2Component,
  },
   data() {
        return {
tab:"",
msg:"",
        }
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
