<template>
  <div class="home">
    <Login name="Github"></Login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>
