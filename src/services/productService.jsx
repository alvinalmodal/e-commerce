import { mapProduct } from "./../mapper/product";
import { BASE_API_URL } from "./../settings";
import axios from "axios";

class ProductService {
  getProducts = async () => {
    let products = {};
    try {
      let request = await axios.get(`${BASE_API_URL}/products`);
      products = mapProduct(request.data);
    } catch (error) {
      console.log("error", error);
    }
    return products;
  };
}

export default ProductService;
