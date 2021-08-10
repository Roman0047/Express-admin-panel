<template>
  <div class="cards">
    <div class="cards-header">
      <v-card-title class="cards-title">Types</v-card-title>
      <v-btn
        :to="{name: 'types-id', params: { id: 0 }}"
        class="cards-create-button"
        :ripple="false"
        dark
        plain
      >
        Add new
      </v-btn>
    </div>
    <transition-group class="d-flex flex-wrap full-width" name="cards-list">
      <app-type
        v-for="item in types"
        :key="item._id"
        :type="item"
        @update-list="updateList"
      ></app-type>
    </transition-group>
  </div>
</template>

<script>
import type from "@/components/type";

export default {
  name: 'Types',
  async asyncData({ app, params, error }) {
    try {
      const types = await app.$services.types.list()
      return {
        types,
      }
    } catch (asyncError) {
      console.log('async error', asyncError);
    }
  },
  components: {
    'app-type': type,
  },
  data() {
    return {
      types: []
    }
  },
  methods: {
    updateList() {
      this.$services.types.list().then(response => {
        this.types = response
      }, (error) => {
        console.log('error', error);
      })
    }
  }
}
</script>
