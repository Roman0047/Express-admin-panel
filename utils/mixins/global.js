let global = {
  data() {
    return {
      errors: [],
    }
  },
  methods: {
    validate(value) {
      let error = this.errors.find(item => item.param === value)
      return error ? error.msg : ''
    },
    setErrors(errors) {
      this.loading = false
      if (errors.response.data.errors) {
        this.errors = errors.response.data.errors
        return
      }
      this.errors = []
      if (errors.response.data.error) {
        this.$toast.error(errors.response.data.error)
        return
      }
      if (errors.response.data.message) {
        this.$toast.error(errors.response.data.message)
      }
    }
  }
}

export default global;
