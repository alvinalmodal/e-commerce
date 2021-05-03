import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
            <Product></Product>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
            <Product></Product>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
            <Product></Product>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
            <Product></Product>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
