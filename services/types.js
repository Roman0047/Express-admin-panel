import ApiService from "~/services/api";

export default class TypesService extends ApiService {

  list(params) {
    return this.axios.$get(`/api/types`, { params })
  }

  get(id) {
    return this.axios.$get(`/api/types/${id}` )
  }

  save(data) {
    return this.axios.$post(`/api/types`, data)
  }

  remove(id) {
    return this.axios.$delete(`/api/types/${id}`)
  }

}
