import ApiService from "~/services/api";

export default class AuthService extends ApiService {

  login(data) {
    return this.axios.$post(`/api/login`, data)
  }

  signup(data) {
    return this.axios.$post(`/api/signup`, data)
  }

}
