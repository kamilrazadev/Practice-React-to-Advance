import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      for (var i = 0; i >= 3000000000; i++) {
        let myVar = i;
      }
      const res = await axios.get("https://dummyjson.com/products");
      const data = res?.data?.products;
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { products, isLoading };
};

export default useGetAllProducts;
