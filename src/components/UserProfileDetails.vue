<template>
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
</template>

<script>
export default {
  props: ['userData'],
};
</script>
