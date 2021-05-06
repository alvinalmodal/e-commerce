export const mapProduct = (product) => {
  return product.data.map((data) => {
    return {
      _id: data._id,
      name: data.name,
      seller: data.seller,
      description: data.description,
      price: data.price,
      images: data.images,
    };
  });
};
