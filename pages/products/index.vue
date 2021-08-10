<template>
  <div class="cards">
    <div class="cards-header">
      <v-card-title class="cards-title">Products</v-card-title>
      <v-btn
        :to="{name: 'products-id', params: { id: 0 }}"
        class="cards-create-button"
        :ripple="false"
        dark
        plain
      >
        Add new
      </v-btn>
    </div>
    <transition-group class="d-flex flex-wrap full-width" name="cards-list">
      <app-product
        v-for="item in products"
        :key="item._id"
        :product="item"
        @update-list="updateList"
      ></app-product>
    </transition-group>
  </div>
</template>

<script>
import product from "@/components/product";

export default {
  name: 'Products',
  async asyncData({ app, params, error }) {
    try {
      const products = await app.$services.products.list()
      return {
        products,
      }
    } catch (asyncError) {
      console.log('async error', asyncError);
    }
  },
  components: {
    'app-product': product,
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    updateList() {
      this.$services.products.list().then(response => {
        this.products = response
      }, (error) => {
        console.log('error', error);
      })
    }
  }
}
</script>
