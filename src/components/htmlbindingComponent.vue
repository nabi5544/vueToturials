<template>
<h1>Html Binding</h1>

<div v-html="htmltag"></div>
</template>

<script>
export default {
    name: 'userComponent',
    
    data() {
        return {
htmltag:"<h2 class='htmlbinding'>binding tag. testing .</h2>",
        }
    },
   
}
</script>

<style>
.htmlbinding{
    color:red;
}
</style>
