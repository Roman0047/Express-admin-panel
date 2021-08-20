<template>
  <div class="item-card-wrapper">
    <v-card class="item-card">
      <div class="item-card-title-wrapper">
        <v-card-title class="item-card-title">{{ item.title }}</v-card-title>
        <div class="item-card-id" @click="copyId">{{ getId(item.item_id) }}</div>
      </div>
      <div class="text-subtitle-1 pb-4 px-4">
        {{item.created_at ? 'created at: ' : ''}}
        {{item.updated_at ? 'updated at: ' : ''}}
        {{item.deleted_at ? 'deleted at: ' : ''}}
        {{ $moment(item.created_at).format('DD-MM-YYYY hh:mm') }}
      </div>
      <v-card-subtitle class="pt-0">{{ item.type }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getId(id) {
      return id.substr(0, id.length - 10) + '...'
    },
    async copyId() {
      try {
        await this.$copyText(this.item.item_id);
        this.$toast.success('Id copied')
      } catch (e) {
        console.error(e);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.item-card {
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
  &-id {
    background-color: #272727;
    padding: 3px 6px;
    border-radius: 7px;
    cursor: pointer;
    margin-right: 16px;
    &-wrapper {
      display: flex;
      align-items: center;
      padding-bottom: 16px;
    }
  }
}
</style>
