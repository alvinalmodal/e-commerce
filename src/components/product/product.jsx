import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import SubImage from "./subimages";

class Product extends Component {
  state = {
    selectedImageUrl: "",
    productHoverState: "product-card shadow mb-1 mt-4",
  };

  handleImageSelect = (selectedImage) => {
    this.setState({ selectedImageUrl: selectedImage });
  };

  handleProductFocus = () => {
    this.setState({ productHoverState: "product-card shadow-lg mb-1 mt-3" });
  };

  handleProductUnfocus = () => {
    this.setState({ productHoverState: "product-card shadow mb-1 mt-4" });
  };

  displaySubImages = () => {
    const { images } = this.props;
    return images.map((image) => {
      return (
        <SubImage
          imageUrl={image.imageUrl}
          onImageSelect={this.handleImageSelect}
          alt="test"
        ></SubImage>
      );
    });
  };

  getMainImageUrl() {
    const { images } = this.props;
    const imageUrl = images.find((image) => image.isMainImage === true)
      .imageUrl;
    console.log("imageUrlvalue", imageUrl);
    return imageUrl;
  }

  componentDidMount() {
    this.setState({ selectedImageUrl: this.getMainImageUrl() });
  }

  render() {
    const { selectedImageUrl, productHoverState } = this.state;
    const { name, seller, description, price } = this.props;
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
              <div className="sub-image">{this.displaySubImages()}</div>
            </div>
            <div className="product-content-3">
              <div className="branding">
                <span>{name}</span>
                <h4>{seller}</h4>
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
                {description}
                <span>Read More</span>
              </div>
              <div className="price">
                <span>$</span>
                <span>{price}</span>
                <div className="space"></div>
                <a href="/products">ADD TO CART</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
