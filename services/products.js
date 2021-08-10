import ApiService from "~/services/api";

export default class ProductsService extends ApiService {

  list(params) {
    return this.axios.$get(`/api/products`, { params })
  }

  get(id) {
    return this.axios.$get(`/api/products/${id}` )
  }

  save(data) {
    return this.axios.$post(`/api/products`, data)
  }

  remove(id) {
    return this.axios.$delete(`/api/products/${id}`)
  }

}
