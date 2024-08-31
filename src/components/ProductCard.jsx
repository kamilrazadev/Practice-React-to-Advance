import React from "react";

const ProductCard = ({ product }) => {
  const {
    thumbnail,
    title,
    description,
    category,
    price,
    rating,
    tags,
    brand,
    availabilityStatus,
  } = product;

  return (
    <div className="">
      <img src={thumbnail} alt={title} width={100} height={100} className="w-full" />
      <p>{title}</p>
    </div>
  );
};

export default ProductCard;
