<template>
  <div class="auth-layout">
    <div class="nav hidden-lg-up"><router-link class="basix-home" :to="{path: '/'}"></router-link></div>
    <div class="main row">
      <div class="auth-content col-md-12">
        <router-view></router-view>
      </div>
      <!-- <div class="auth-wallpaper col-md-6 hidden-md-down">
        <img class="img-responsive" src="../images/logo.png" />
      </div> -->
    </div>
  </div>
</template>



<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="scss">


  .auth-layout {
    height: 100vH;
    margin: 0;

    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, #5A7DA3 0%,#51547D 99%); 
      }

        .basix-home {
          z-index: 2;
          font-size: 2.625rem;
          color: #1ec260;
        

      }
    }

  }
</style>