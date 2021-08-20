import ApiService from "~/services/api";

export default class HistoryService extends ApiService {

  list(params) {
    return this.axios.$get(`/api/history`, { params })
  }

}
