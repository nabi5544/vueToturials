<template>

<h1>{{msg}}</h1>
<p>{{email}}</p>


</template>

<script>
export default {
  name: 'DataPass',
  props: {
    msg: String
  },
  data(){
    return {
        email:"test@gmail.com"
    }
  }
}
</script>

<style scoped>
h1{
    color:green;
}
</style>