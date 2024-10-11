"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProduct() {
      try {
        const productRespons = await axios.get(
          "https://dummyjson.com/products"
        );
        setProducts(productRespons.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div className="blog-list" key={product.id}>
          <div className="blog-content">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Page;
