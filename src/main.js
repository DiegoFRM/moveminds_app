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

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App }
})


