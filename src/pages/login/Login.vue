<template>
  <div class="login">
      <div class="auth-wallpaper col-md-12 hidden-md-down">
        <img class="img-responsive" src="../../images/logo.png" />
      </div>
    <div >
      <div class="card-body card-block">
        <form method="post" action="/auth/login" name="login">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
              <input type="email" id="email" name="email" placeholder="Correo" class="form-control">
            </div>
          </div>
 
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-building"></i></div>
              <input type="company" id="company" name="company" placeholder="compañia" class="form-control">
            </div>
          </div>         
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
              <input type="password" id="password" name="password" placeholder="Contraseña" class="form-control">
            </div>
          </div>
          <div class="form-actions form-group buttons-login">
              <button type="submit" class="btn btn-login btn-md">Entrar</button>
              <!--<button type="submit" class="btn btn-primary btn-md float-right">
                 <router-link class='link text-light float-right' :to="{name: 'Register'}">Crear Cuenta</router-link>
              </button> -->
          </div>
          <div class="recovery-pass">
            <u>Olvidé mi contraseña</u>

          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>

  .recovery-pass{
    text-align: center;
    color:#ABC43A;
  }

  .card-title{
    padding-left: 20px;
  }
  .buttons-login{
    text-align: center;
  }
  .btn-login{
    background-color:#FF5361;
    color:#FFF;
    width: 50%;
  }
      .auth-wallpaper {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding:1vw;
      }

</style>