<template>
<h1>reuseComponent</h1>
<ul>
    
    <li v-for="item in users" :key="item">
        <userComponent :dataitem="item" :showAlert="showAlert"/>
    </li>
</ul>
</template>

<script>
import userComponent from './userComponent.vue'
export default {
    name: 'reUse Component',
    components: {
        userComponent,
    },
    data() {
        return {

            users: [{
                    name: "akmal",
                    age: "40"
                },
                {
                    name: "junaid",
                    age: "50"
                },
                {
                    name: "akmal new",
                    age: "80"
                },
            ],
        }
    },
     methods: {
        showAlert(name) {
            return alert(name);
        }
    }

}
</script>

<style>

</style>
