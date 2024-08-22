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
  name: 'lifecycle2Component',
  data(){
    
  },
  props: {
    msg: String
  },
  
  beforeMount(){
    console.warn("before mount",this.$el);
    alert(this.$el);
  },
  mounted(){
    console.warn("after mount",this.$el);
    alert(this.$el);
  }
};
</script>

<style scoped>
/* Child component styles go here */
</style>
