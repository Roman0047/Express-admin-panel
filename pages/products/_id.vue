<template>
  <div class="item">
    <div class="item-header">
      <v-card-title class="item-title">
        {{ parseInt($route.params.id) === 0 ? 'Create' : 'Update' }} product
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
            v-model="product.title"
            :rules="rules.title"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="product.description"
            :rules="rules.description"
            label="description"
            required
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="product.price"
            :rules="rules.price"
            label="Price"
            required
          ></v-text-field>
          <v-select
            :items="types"
            label="Type"
            v-model="product.type"
            item-text="name"
            item-value="_id"
          ></v-select>
        </div>
        <div class="item-form-container">
          <v-label>
            <div class="input-file-title">Image</div>
          </v-label>
          <div class="input-file-wrapper">
            <img v-if="url" :src="url" class="input-file-image" alt="icon">
            <img v-if="!url" src="/plus.svg" class="input-file-plus" alt="plus">
            <v-file-input
              :rules="rules.image"
              @change="readURL"
              class="input-file"
              label="image"
              accept="image/*"
              :prepend-icon="''"
              ref="file"
              multiple
              required
            ></v-file-input>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  async asyncData({ app, params, error }) {
    try {
      let product = {
        title: '',
        description: '',
        image: null,
        price: null,
        type: null,
      }
      if (parseInt(params.id) !== 0) {
        product = await app.$services.products.get(params.id)
        product.type = product.type ? product.type._id : null
      }
      const types = await app.$services.types.list()
      return {
        product,
        types,
        url: product.images ? 'http://localhost:8097/' + product.images[0] : ''
      }
    } catch (asyncError) {
      console.log('async error', asyncError);
    }
  },
  data() {
    return {
      loading: false,
      types: [],
      url: null,
      product: {
        title: '',
        description: '',
        image: null,
        price: null,
        type: null,
      },
      rules: {
        title: [v => !!v || 'Name is required'],
        description: [v => !!v || 'Description is required'],
        price: [v => !!v || 'Price is required'],
        type: [v => !!v || 'Type is required'],
      },
      valid: false
    }
  },
  mounted() {
    if (parseInt(this.$route.params.id) === 0) {
      this.rules.image = [v => !!v || 'Image is required']
    }
  },
  methods: {
    save() {
      let files = this.$refs.file.$el.children[0].children[0].children[0].children[2].files
      let data = new FormData()
      let self = this
      files.forEach(item => data.append(`files`, item))
      if (parseInt(this.$route.params.id) !== 0) {
        data.append(`image`, self.product.images[0])
      }
      data.append(`title`, self.product.title)
      data.append(`description`, self.product.description)
      data.append(`price`, self.product.price)
      self.product.type && data.append(`type`, self.product.type)
      self.product._id && data.append(`_id`, self.product._id)
      this.$refs.form.validate()
      if (this.valid) {
        this.loading = true
        this.$services.products.save(data).then(response => {
          this.$router.push({name: 'products'})
          this.loading = false
        }, errors => this.setErrors(errors))
      }
    },
    readURL() {
      let files = this.$refs.file.$el.children[0].children[0].children[0].children[2].files
      if (files && files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.url = e.target.result
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }
}
</script>
