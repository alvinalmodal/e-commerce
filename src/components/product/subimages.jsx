import React, { Component } from "react";

class SubImage extends Component {
  state = {};
  render() {
    const { imageUrl, onImageSelect, alt } = this.props;
    return (
      <React.Fragment>
        <div onMouseEnter={() => onImageSelect(imageUrl)}>
          <img src={imageUrl} alt={alt} />
        </div>
      </React.Fragment>
    );
  }
}

export default SubImage;
