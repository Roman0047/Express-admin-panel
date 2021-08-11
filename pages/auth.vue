<template>
  <div class="login">
    <div class="login-window" key="1">
      <transition name="login-animation" mode="out-in">
        <div v-if="type === 'login'" class="login-form-wrapper" key="1">
          <h1 class="login-title">Login</h1>
          <div class="login-form">
            <v-text-field label="Email" solo></v-text-field>
            <v-text-field type="password" label="Password" solo></v-text-field>
          </div>
          <div class="login-footer">
            <v-btn class="login-button" @click="signup">signup</v-btn>
            <v-btn class="login-button" @click="login">login</v-btn>
          </div>
        </div>
        <div v-if="type === 'signup'" class="login-form-wrapper" key="2">
          <h1 class="login-title">Signup</h1>
          <div class="login-form">
            <v-text-field label="Name" solo></v-text-field>
            <v-text-field label="Email" solo></v-text-field>
            <v-text-field type="password" label="Password" solo></v-text-field>
            <v-text-field type="password" label="Confirm password" solo></v-text-field>
            <v-text-field label="Phone" solo></v-text-field>
          </div>
          <div class="login-footer">
            <v-btn class="login-button" @click="login">login</v-btn>
            <v-btn class="login-button" @click="signup">signup</v-btn>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      type: 'login',
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      if (this.type === 'login') {
        this.$auth.loginWith('local', { data: this.form }).then(async response => {
            this.$auth.setUser(response.data)
            await this.$auth.fetchUser()
          }, errors => {
            if (errors.response.data.errors) {
              this.errors = errors.response.data.errors
            } else {
              console.log(errors.response.message)
            }
          }
        )
      } else {
        this.type = 'login'
      }
    },
    signup() {
      if (this.type === 'signup') {
        this.$auth.loginWith('local', { data: this.form }).then(async response => {
            this.$auth.setUser(response.data)
            await this.$auth.fetchUser()
          }, errors => {
            if (errors.response.data.errors) {
              this.errors = errors.response.data.errors
            } else {
              console.log(errors.response.message)
            }
          }
        )
      } else {
        this.type = 'signup'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &-window {
    width: 520px;
    height: 700px;
    background-color: #272727;
    border-radius: 20px;
    padding: 24px;
  }
  &-form {
    margin-top: 32px;
    &-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
  &-footer {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-button {
    margin-top: auto;
  }
  &-animation {
    &-enter-active, &-leave-active {
      transition: opacity .5s;
    }
    &-enter, &-leave-to {
      opacity: 0;
    }
  }
}
</style>
