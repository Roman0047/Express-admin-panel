import ProductsService from "~/services/products";
import TypesService from "~/services/types";

export default (context) => {
  return {
    products: new ProductsService(context),
    types: new TypesService(context),
  }
}
