import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { index } from './components/index';

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
    
});
/*
router.beforeEach((to, from, next) => {
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
*/
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App }
})


