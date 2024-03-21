<template>
<p v-if="dataitem">{{ dataitem.name }} <button v-on:click="showAlert(dataitem.name)">Click to Get Loop Value</button></p>
<p v-else>No person data available</p>
</template>

<script>
export default {
    name: 'userComponent',
    props: {
        dataitem: Object,
        showAlert: Function,
    },
    data() {
        return {

        }
    },
   
}
</script>

<style>

</style>
