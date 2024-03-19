<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.

    
    </p>
    
  </div>
  <div>
  <h1>Two way Binding.</h1>
  <input type="text" v-model="input_value">
  <h3>{{ input_value }}</h3>

  <h1>Get Input Field Values using Two way Binding.</h1>
  <input type="text" v-model="email" placeholder="Email">
  <input type="text" v-model="name" placeholder="Name">
  <button v-on:click="values()">Get Values</button>

  <h4>Input Field Values</h4>
  <p>Name: {{ name }}  Email:{{ email }}</p>

  <h4>Get Select Boxes Values</h4>
  java
  <input type="checkbox" v-model="checkbox" value="java" id="java">

  node
  <input type="checkbox" v-model="checkbox" value="node" id="node">

  js
  <input type="checkbox" v-model="checkbox" value="js" id="js1">
  <h5>{{checkbox}}</h5>
  <h4>Get Radio Button Values</h4>
   <lable for="male">male</lable>
  <input type="radio" v-model="radio" value="male" name="radio" id="male">

  <lable for="female">female</lable>
  <input type="radio" v-model="radio" value="female" name="radio"  id="female">

  <lable for="gay">gay</lable>
  <input type="radio" v-model="radio" value="gay" name="radio"  id="gay">
  <h5>{{radio}}</h5>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      count:0,
      input_value:0,
      email:null,
      name:null,
      checkbox:[],
       radio:null,
    }
  },
  methods:{
    click(){
      alert('testing');
    },
    
     values(){
     alert("Name: "+this.name+ "Email:"+this.email);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
