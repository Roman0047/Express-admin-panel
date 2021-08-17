import ProductsService from "~/services/products";
import TypesService from "~/services/types";
import AuthService from "~/services/auth";

export default (context) => {
  return {
    products: new ProductsService(context),
    types: new TypesService(context),
    auth: new AuthService(context),
  }
}
