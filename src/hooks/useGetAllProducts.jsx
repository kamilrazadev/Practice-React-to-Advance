import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res?.data?.products;

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products;
};

export default useGetAllProducts;
