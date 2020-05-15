<template>
  <div class="container">
    <div class="row profile">
      <div class="col-md-3">
        <UserProfile :userData="userData"></UserProfile>
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
      accessToken: 'getAccessToken',
    }),
  },

  components: {
    UserProfile,
    ReposList,
  },
};
</script>

<style lang="scss">
.profile {
  margin: 20px 0;

  /* Profile sidebar */
  .profile-sidebar {
    padding: 20px 0 10px 0;
    background: #fff;
    border-radius: 5px;

    .profile-userpic img {
      float: none;
      margin: 0 auto;
      width: 50%;
      height: 50%;
      -webkit-border-radius: 50% !important;
      -moz-border-radius: 50% !important;
      border-radius: 50% !important;
    }

    .profile-usertitle {
      text-align: center;
      margin-top: 20px;
    }

    .profile-usertitle-name {
      color: #5a7391;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 7px;
    }

    .profile-usertitle-job {
      text-transform: uppercase;
      color: #5b9bd1;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    /* profile stats */
    .profile-stat {
      padding: 20px 10px;
      font-size: 15px;
      border-bottom: 1px solid #f0f4f7;
      border-top: 1px solid #f0f4f7;

      .profile-stat-title {
        color: #7f90a4;
        font-size: 25px;
        text-align: center;
      }

      .profile-stat-text {
        color: #5b9bd1;
        font-size: 10px;
        font-weight: 600;
        text-align: center;
      }
    }

    /* profile desc */

    .profile-desc {
      padding: 10px 10px;

      .profile-desc-title {
        color: #7f90a4;
        font-size: 17px;
        font-weight: 600;
      }

      .profile-desc-text {
        color: #7e8c9e;
        font-size: 14px;
      }

      .profile-desc-link i {
        margin: 0px 5px 0px 0px;
      }

      .profile-desc-link a {
        color: #337ab7;
        text-decoration: none;
      }
    }
  }

  .list-separated {
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .uppercase {
    text-transform: uppercase !important;
  }

  .margin-top-20 {
    margin-top: 20px !important;
  }

  /* Profile Content */
  .profile-content {
    padding: 20px;
    background: #fff;
    min-height: 460px;
    border-radius: 5px;
  }
}
</style>
