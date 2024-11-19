import { createRouter, createWebHistory } from 'vue-router';
import DoctorsPage from './pages/DoctorsPage.vue';
import NursesPage from './pages/NursesPage.vue';

const routes = [
  { path: '/doctors', name: 'Doctors', component: DoctorsPage },
  { path: '/nurses', name: 'Nurses', component: NursesPage },
  { path: '/', redirect: '/doctors' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
