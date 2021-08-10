<template>
  <div class="type-card-wrapper">
    <v-card class="type-card">
      <div class="type-card-title-wrapper">
        <v-card-title>{{ type.name }}</v-card-title>
        <div class="d-flex mr-4">
          <nuxt-link :to="{name: 'types-id', params: { id: type._id }}">
            <v-icon class="mr-2" dark>mdi-pencil</v-icon>
          </nuxt-link>
          <div class="type-card-action-wrapper" @click="remove">
            <v-icon dark>mdi-delete</v-icon>
          </div>
        </div>
      </div>
      <v-card-subtitle class="pt-0">discount: {{ type.discount }}%</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    remove() {
      this.$services.types.remove(this.type._id).then(response => {
        this.$emit('update-list')
      }, (error) => {
        console.log('error', error);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.type-card {
  height: 100%;
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
}
</style>
