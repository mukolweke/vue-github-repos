<template>
  <div class="home">
    <div class="row mt-5">
      <div class="col-md-6 m-auto">
        <div class="card card-body text-center">
          <h1>
            <i class="fas fa-code-branch fa-3x"></i>
          </h1>
          <br />
          <p>View all your public repos ...</p>
          <div class="text-center">
            <button @click="signin" class="btn btn-secondary" :disabled="signingInUser">
              <span
                class="spinner-border spinner-grow-sm"
                role="status"
                v-if="signingInUser"
              >
                <span class="sr-only">Loading...</span>
              </span>

              <i class="fab fa-github" v-else></i>
              &nbsp;&nbsp;Sign in with {{name}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },

  data() {
    return {
      signingInUser: false,
    };
  },

  methods: {
    signin() {
      this.signingInUser = true;

      window.OAuth.initialize('MGKV6a-i66BijaYHJOiDgExpX90');

      window.OAuth.popup('github').then((result) => {
        this.$session.start();
        this.$session.set('access_token', result.access_token);

        result.get('/user').then((data) => {
          const form = {
            avatar: data.avatar_url,
            username: data.login,
            name: data.name,
            email: data.email,
            bio: data.bio,
            location: data.location,
            profile_url: data.html_url,
            repos_count: data.public_repos,
            repos_url: data.repos_url,
            followers_count: data.followers,
            following_count: data.following,
          };

          this.signingInUser = false;

          this.$store.commit('SAVE_USER_DATA', form);

          this.$router.push({ name: 'profile' });
        });
      });
    },
  },
};
</script>
