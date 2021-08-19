<template>
  <div class="product-card-wrapper">
    <v-card class="product-card">
      <v-img :src="'http://localhost:8097/' + product.images[0]" height="200px"></v-img>
      <v-card-title class="product-card-price">
        <span v-if="product.priceWithDiscount || product.priceWithDiscount === 0">
          {{ product.priceWithDiscount }}$
        </span>
        <span :class="{'product-card-price-old': product.priceWithDiscount || product.priceWithDiscount === 0}">
          {{ product.price }}$
        </span>
      </v-card-title>
      <div class="product-card-title-wrapper">
        <v-card-title>{{ product.title }}</v-card-title>
        <div class="d-flex mr-4">
          <nuxt-link :to="{name: 'products-id', params: { id: product._id }}">
            <v-icon class="mr-2" dark>mdi-pencil</v-icon>
          </nuxt-link>
          <div class="product-card-action-wrapper" @click="remove">
            <v-icon dark>mdi-delete</v-icon>
          </div>
        </div>
      </div>
      <v-card-subtitle class="pt-0">{{ product.description }}</v-card-subtitle>
      <v-card-subtitle v-if="product.type" class="pt-0">type: {{ product.type.name }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    remove() {
      this.$services.products.remove(this.product._id).then(response => {
        this.$emit('update-list')
      }, errors => this.setErrors(errors))
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  height: 100%;
  position: relative;
  &-wrapper {
    padding: 20px;
    width: 25%;
    @media (max-width: 1903px) {
      width: 33.33%;
    }
    @media (max-width: 1263px) {
      width: 50%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  &-title {
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &-action {
    &-wrapper {
      cursor: pointer;
    }
  }
  &-price {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0 7px;
    border-radius: 10px;
    background-color: #1E1E1E;
    box-shadow: 0 0 10px #1E1E1E;
    &-old {
      margin-left: 7px;
      color: crimson;
      text-decoration: line-through;
    }
  }
}
</style>
