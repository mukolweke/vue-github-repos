import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/dashboard/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:username',
    name: 'profile',
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
