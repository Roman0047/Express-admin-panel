<template>
  <div class="login">
    <div class="login-window">
      <h1 class="login-title">Signup</h1>
      <div class="login-form">
        <v-text-field v-model="signupForm.name" label="Name" solo :error-messages="validate('name')"></v-text-field>
        <v-text-field v-model="signupForm.email" label="Email" solo :error-messages="validate('email')"></v-text-field>
        <v-text-field v-model="signupForm.password" type="password" label="Password" solo :error-messages="validate('password')"></v-text-field>
        <v-text-field v-model="signupForm.confirm" type="password" label="Confirm password" solo :error-messages="validate('confirm')"></v-text-field>
        <v-text-field v-model="signupForm.phone" label="Phone" solo :error-messages="validate('phone')"></v-text-field>
      </div>
      <div class="login-footer">
        <v-btn class="login-button" @click="$router.push('login')">login</v-btn>
        <v-btn class="login-button" @click="signup">signup</v-btn>
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
      signupForm: {
        name: '',
        email: '',
        password: '',
        confirm: '',
        phone: '',
      }
    }
  },
  methods: {
    signup() {
      this.$services.auth.signup(this.signupForm).then(response => {
        let data = {
          email: this.signupForm.email,
          password: this.signupForm.password
        }

        this.$auth.loginWith('local', { data: data }).then(response => {
          this.loading = false
        }, errors => this.setErrors(errors))
      }, errors => this.setErrors(errors))
    },
  }
}
</script>
