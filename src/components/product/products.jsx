import React, { Component } from "react";
import Product from "./product";
import ProductService from "../../services/productService";

class Products extends Component {
  state = { products: [] };
  productService = new ProductService();

  getProducts = async () => {
    let products = [];
    try {
      products = await this.productService.getProducts();
    } catch (error) {
      console.log("Product service failed", error);
    }
    this.setState({ products });
  };

  async componentDidMount() {
    try {
      await this.getProducts();
    } catch (error) {
      console.log("failed to mount product", error);
    }
  }

  displayProducts = () => {
    const { products } = this.state;
    return products.map((product) => (
      <div className="col-sm-6 col-md-4 col-lg-3 mt-5" key={product._id}>
        <Product {...product}></Product>
      </div>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">{this.displayProducts()}</div>
      </React.Fragment>
    );
  }
}

export default Products;
