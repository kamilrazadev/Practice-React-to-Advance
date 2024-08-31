import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/useGetAllProducts";

const Products = () => {
  const { products, isLoading } = useGetAllProducts();

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600">All Products</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : !isLoading && !products.length ? (
        <div>No Product Found</div>
      ) : (
        <div className="my-10 grid grid-cols-4">
          {products?.map((product, key) => (
            <ProductCard product={product} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
