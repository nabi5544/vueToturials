<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>Slots</h1>
    <ChildComponentnew>
      <h1>slot child testing</h1>
    </ChildComponentnew>
  </div>
</template>

<script>
import ChildComponentnew from './childComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponentnew
  }
};
</script>

<style scoped>
/* Parent component styles go here */
</style>
