<template>
  <div class="container">
    <div class="row profile">
      <div class="col-md-3">
        <UserProfile :userData="userData" @logMeOut="logoutUser"></UserProfile>
      </div>
      <div class="col-md-9">
        <ReposList :repoUrl="userData.repos_url"></ReposList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfileDetails.vue';
import ReposList from '@/components/ReposList.vue';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      userData: 'getUserData',
    }),
  },

  components: {
    UserProfile,
    ReposList,
  },

  methods: {
    logoutUser() {
      this.$session.destroy();
      this.$router.push('/');
    },
  },

  mounted() {
    if (Object.keys(this.userData).length === 0) {
      this.logoutUser();
    }
  },

  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles.scss";
</style>
