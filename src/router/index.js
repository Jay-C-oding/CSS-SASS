import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NaTour from '../views/NaTour.vue';
import LoopLab from '../views/LoopLab.vue';
import Intro from '../views/Intro.vue';
import googleFontClone from '../views/googleFontClone';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro,
  },
  {
    path: '/natour',
    name: 'NaTour',
    component: NaTour,
  },
  {
    path: '/looplab',
    name: 'LoopLab',
    component: LoopLab,
  },
  {
    path: '/googlefontclone',
    name: 'GoogleFontClone',
    component: googleFontClone,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
