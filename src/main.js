import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { index } from './components/index';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'

// Router
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
    
});

router.beforeEach((to, from, next) => {
// redirect to login page if not logged in and trying to access a restricted page
const publicPages = ['/auth/login'];
const authRequired = !publicPages.includes(to.path);
const loggedIn = localStorage.getItem('user');

if (authRequired && !loggedIn) {
  return next({ 
    path: '/auth/login', 
    query: { returnUrl: to.path } 
  });
}

next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App }
})


