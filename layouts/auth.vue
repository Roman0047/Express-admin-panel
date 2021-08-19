<template>
  <v-app class="auth" dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      clipped: true,
      title: 'Express admin panel'
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  background-image: url("https://wallpaperaccess.com/full/2029165.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
