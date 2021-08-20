<template>
  <div class="cards">
    <div class="cards-header">
      <v-card-title class="cards-title">History</v-card-title>
    </div>
    <transition-group class="d-flex flex-wrap full-width" name="cards-list">
      <app-history
        v-for="item in history"
        :key="item._id"
        :item="item"
      ></app-history>
    </transition-group>
  </div>
</template>

<script>
import history from "@/components/history";

export default {
  name: 'History',
  async asyncData({ app, params, error }) {
    try {
      const history = await app.$services.history.list()
      return {
        history,
      }
    } catch (asyncError) {
      console.log('async error', asyncError);
    }
  },
  components: {
    'app-history': history,
  },
  data() {
    return {
      history: []
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
