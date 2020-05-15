<template>
  <div class="home">
    <GithubLogin name="Github"></GithubLogin>
  </div>
</template>

<script>
import GithubLogin from '@/components/GithubLogin.vue';

export default {
  name: 'Home',
  components: {
    GithubLogin,
  },
};
</script>
