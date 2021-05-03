import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import SubImage from "./subimages";

class Product extends Component {
  state = {
    selectedImageUrl: "https://i.postimg.cc/htWpbH6Y/remote.png",
    productHoverState: "product-card shadow mb-1 mt-5",
  };

  handleImageSelect = (selectedImage) => {
    this.setState({ selectedImageUrl: selectedImage });
  };

  handleProductFocus = () => {
    this.setState({ productHoverState: "product-card shadow-lg mb-1 mt-4" });
  };

  handleProductUnfocus = () => {
    this.setState({ productHoverState: "product-card shadow mb-1 mt-5" });
  };

  render() {
    const { selectedImageUrl, productHoverState } = this.state;
    return (
      <React.Fragment>
        <div
          className="product-container"
          onMouseEnter={() => this.handleProductFocus()}
          onMouseLeave={() => this.handleProductUnfocus()}
        >
          <div className={productHoverState}>
            <div className="product-content-1">
              <div className="heart">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>

              <div className="main-image">
                <img src={selectedImageUrl} alt="remote ps4 controller" />
              </div>
            </div>
            <div className="product-content-2">
              <div className="sub-image">
                <SubImage
                  imageUrl="https://i.postimg.cc/htWpbH6Y/remote.png"
                  onImageSelect={this.handleImageSelect}
                  alt="test"
                ></SubImage>
                <SubImage
                  imageUrl="https://i.postimg.cc/Vv24hT6d/remote1.png"
                  onImageSelect={this.handleImageSelect}
                  alt="test"
                ></SubImage>
                <SubImage
                  imageUrl="https://i.postimg.cc/ZKywNT73/remote2.png"
                  onImageSelect={this.handleImageSelect}
                  alt="test"
                ></SubImage>
                <SubImage
                  imageUrl="https://i.postimg.cc/4408nK5s/remote3.png"
                  onImageSelect={this.handleImageSelect}
                  alt="test"
                ></SubImage>
              </div>
            </div>
            <div className="product-content-3">
              <div className="branding">
                <span>Dualshock 4 controller</span>
                <h4>Playstation</h4>
              </div>
              <div className="ratings">
                <span>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
              </div>
              <div className="paragraph">
                The DualShock 4 (CUH-ZCT1) is the PlayStation 4's controller...
                <span>Read More</span>
              </div>
              <div className="price">
                <span>$</span>
                <span>55</span>
                <div className="space"></div>
                <a href="#">ADD TO CART</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
