<template>
  <div class="login">
    <div class="login-window">
      <h1 class="login-title">Login</h1>
      <div class="login-form">
        <v-text-field v-model="loginForm.email" label="Email" solo :error-messages="validate('email')"></v-text-field>
        <v-text-field v-model="loginForm.password" type="password" label="Password" solo :error-messages="validate('password')"></v-text-field>
      </div>
      <div class="login-footer">
        <v-btn class="login-button" @click="$router.push('signup')">signup</v-btn>
        <v-btn class="login-button" @click="login">login</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$auth.loginWith('local', { data: this.loginForm }).then(async response => {
        this.$auth.setUser(response)
        await this.$auth.fetchUser()
        this.loading = false
      }, errors => this.setErrors(errors))
    },
  }
}
</script>
