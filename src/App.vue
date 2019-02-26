<template>
  <div id="app">
    <auth-layout v-if="isAuth" ></auth-layout>
      <div class="" v-else>
    <Header/>
    <InfoUser/>
    <div class="admin-container">
        <MenuNav :navItems="nav"/>
        <div id="right-panel" class="right-panel">
          
          <div class="content pb-0">
              <transition enter-active-class="animated fadeIn">
                <router-view v-if="!isHome"></router-view>
              </transition>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import nav from './nav' // nav = items del archivo nav.js
import Header from './components/Header.vue'
import MenuNav from './components/MenuNav.vue'
//import Sidebar from './components/Sidebar.vue'
import InfoUser from './components/InfoUser.vue'

import AuthLayout from './layouts/AuthLayout.vue';

export default {
  data () {
    return {
      nav: nav.items
    }

  },
  components: {
    AuthLayout,
    Header,
    InfoUser, 
    MenuNav
  },
  computed: {
    name(){
      return this.$route.name
    },
    list() {
      return this.$route.matched
    },
    isAuth () {
      return this.$route.path.match('auth')
    },
    isHome (){
      return this.$route.path.match('dashboard')
    }

  }
}
</script>

<style lang="scss">
@import url('./assets/css/font-awesome.min.css');
@import url('./assets/css/themify-icons.css');
@import url('./assets/css/pe-icon-7-filled.css');
@import url('./assets/css/flag-icon.min.css');
@import url('./assets/css/cs-skin-elastic.css');
@import url('./assets/css/Sidebar.css');

@import "./assets/scss/style";

button{
    cursor: pointer;
}

</style>
