import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/useGetAllProducts";

const Products = () => {
  const products = useGetAllProducts();

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600">All Products</h1>
      <div className="my-10 grid grid-cols-4">
        {products?.map((product, key) => (
          <ProductCard product={product} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Products;
