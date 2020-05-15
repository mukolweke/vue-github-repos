<template>
  <div class="container">
    <div class="row profile">
      <div class="col-md-3">
        <div class="profile-sidebar">
          <div class="profile-userpic text-center">
            <!-- <i class="fab fa-github-alt fa-5x"></i> -->
            <img :src="userData.avatar" class="img-responsive" alt />
          </div>

          <div class="profile-usertitle">
            <div class="profile-usertitle-name">{{userData.name}}</div>
            <div class="profile-usertitle-job">{{userData.username}}</div>
          </div>

          <div class="portlet light bordered">
            <div class="row list-separated profile-stat">
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="uppercase profile-stat-title">{{userData.repos_count}}</div>
                <div class="uppercase profile-stat-text">Repos</div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="uppercase profile-stat-title">{{userData.followers_count}}</div>
                <div class="uppercase profile-stat-text">Followers</div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="uppercase profile-stat-title">{{userData.following_count}}</div>
                <div class="uppercase profile-stat-text">Following</div>
              </div>
            </div>
            <div class="profile-desc">
              <h4 class="profile-desc-title">About {{userData.username}}</h4>
              <span class="profile-desc-text">{{userData.bio}}</span>
              <div class="margin-top-20 profile-desc-link">
                <i class="far fa-envelope"></i>
                <a href="#">{{userData.email}}</a>
              </div>
              <div class="margin-top-20 profile-desc-link">
                <i class="fas fa-map-marker-alt"></i>
                <a href="#">{{userData.location}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="profile-content">Some user related content goes here...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
