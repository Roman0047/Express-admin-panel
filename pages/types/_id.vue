<template>
  <div class="item">
    <div class="item-header">
      <v-card-title class="item-title">
        {{ parseInt($route.params.id) === 0 ? 'Create' : 'Update' }} type
      </v-card-title>
      <v-btn
        class="cards-create-button"
        :loading="loading"
        :ripple="false"
        @click="save"
        dark
        plain
      >
        Save
      </v-btn>
    </div>
    <div class="item-content">
      <v-form class="item-form" v-model="valid" ref="form">
        <div class="item-form-container">
          <v-text-field
            v-model="type.name"
            :rules="rules.name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="type.discount"
            :rules="rules.discount"
            label="Discount"
            required
          ></v-text-field>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Type',
  async asyncData({ app, params, error }) {
    try {
      let type = {
        name: '',
        discount: null
      }
      if (parseInt(params.id) !== 0) {
        type = await app.$services.types.get(params.id)
      }
      return {
        type,
      }
    } catch (asyncError) {
      console.log('async error', asyncError);
    }
  },
  data() {
    return {
      loading: false,
      type: {
        name: '',
        discount: null
      },
      rules: {
        name: [v => !!v || 'Name is required'],
        discount: [v => !!v || 'Discount is required'],
      },
      valid: false
    }
  },
  methods: {
    save() {
      this.$refs.form.validate()
      if (this.valid) {
        this.loading = true
        this.$services.types.save(this.type).then(response => {
          this.$router.push({name: 'types'})
          this.loading = false
        }, (error) => {
          this.loading = false
          console.log('error', error);
        })
      }
    },
  }
}
</script>
