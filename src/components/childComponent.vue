<!-- childComponent.vue -->
<template>
  <div>
    <!-- Slot content will be inserted here -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
};
</script>

<style scoped>
/* Child component styles go here */
</style>
