<template>
<h1 >email: {{ number }}</h1>
<h1 >Methods testing : {{ getname('testing') }}</h1>

<h4 v-if="show">If Condition.</h4>
<h4 v-else>else Condition.</h4>

<p>for loop testing</p>
<ul>
<li v-for="item in technology" :key="item">{{ item }}</li>
<li v-for="item in users" :key="item">{{ item.name }}</li>
</ul>

<button v-on:click="show=!show">Toggle</button>
</template>


<script>
export default {
  name: 'home-new',
  data(){
return{
    email:"email@gmail.com",
    number:"+1 290904304",
    show:false,
    technology:['php','java'],
    users:[
      {name:"akmal",age:"40"},
      {name:"junaid",age:"50"},
      {name:"akmal new",age:"80"},
    ],
}
  },
  methods:{
    getname(name){
        return name;
    }
  }
}
</script>

<style>

</style>