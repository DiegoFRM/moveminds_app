<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
    <v-container fluid>
      <v-layout
        row
        wrap>

        <v-flex
          xs12
          sm12>
          <v-text-field
            v-model="email"
            :rules="[rules.required]"
            label="E-mail"
          />
        </v-flex>

        <p>____</p>

        <v-flex
          xs12
          sm12>
          <v-text-field
            v-model="password"
            :append-icon="showp ? 'visibility_off' : 'visibility'"
            :rules="[rules.required]"
            :type="showp ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            counter
            @click:append="showp = !showp"
          />
        </v-flex>

        <v-flex
          xs-12
          sm12>

          <div class="text-xs-center">
            <v-btn
              :disabled="!valid"
              outline
              round
              color="blue"
              dark
              @click="loginWithAxios"
            >Login</v-btn>
          </div>

        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      showp: false,
      email: '',
      password: '',
      valid: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log('submit')
      }
    },
    async loginWithAxios() {
      let _this = this
      let api = //"http://localhost:8081/api/" //poner en archivo de configuracion
        "https://movemindsserver.appspot.com/api/"

      await this.axios
        .get(api + 'user', {
          auth: {
            username: this.email,
            password: this.password
          }
        })
        .then(function(res) {
          console.log('res', res)
          if (res.data.ID) {
            _this.$store.commit('login', res.data)
            _this.loginError = false
            _this.clear()
            _this.$router.push('/admin')
          } else {
            _this.loginError = true
          }
        })
        .catch(function(error) {
          console.log('Error al hacer login')
        })
    },
    clear() {
      this.$refs.form.reset()
    }
  }
}
</script>
