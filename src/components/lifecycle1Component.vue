<!-- childComponent.vue -->
<template>
  <div>
    <!-- Slot content will be inserted here -->
    <!-- <slot></slot> -->
   <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'lifecycle1Component',
  data(){
    console.warn("created......");
  },
  props: {
    msg: String
  },
  
  beforeCreate(){
    alert('beforeCreated');
  },
  created(){
    alert('created');
  }
};
</script>

<style scoped>
/* Child component styles go here */
</style>
