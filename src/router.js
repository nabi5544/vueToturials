import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/routerHome.vue';
import About from './components/routerAbout.vue';
import Profile from './components/routerProfile.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile/:name',
    name: 'Profile',
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
