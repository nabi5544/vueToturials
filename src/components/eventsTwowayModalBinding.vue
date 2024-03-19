<template>
<h1>testing{{ msg }} </h1>
 <button v-on:click="click()">Click for some Action . </button>
       <button v-on:dblclick="doubleclick('double click button testing')">doubleClick for some Action . </button>
       <button v-on:click="changecount()">click to change hover value . </button>
       <p v-on:mousemove="hover('on hover testing ')">this is hover value: {{ count }} </p>

       <input type="text" v-model="count">
</template>

<script>
export default {
  name: 'eventAndTwowayBinding. ',
  props: {
    msg: String
  },
  data(){
    return {
      count:0,
      
    }
  },
  methods: {
    click(){
         alert('msg');
    },
     doubleclick(text){
      alert(text);
    },
     hover(text){
      console.warn(text);
    },
     changecount(){
      this.count=this.count+3;
    },
  },
 
}
</script>

<style>
</style>