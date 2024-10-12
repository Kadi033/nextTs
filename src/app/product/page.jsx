"use client";
import Loading from "@/src/components/loading/Loading";
import ProductCard from "@/src/components/cards/ProductCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./products.css"
const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProduct() {
      try {
        const productResponse = await axios.get(
          "https://dummyjson.com/products"
        );
        setProducts(productResponse.data.products);
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false)
      }
    }
    getProduct();
  }, []);
  return (
    <main className={`outer-container ${loading ? "loading" : ""}`}>
      <div className="container product-card">
        {loading ? (
          <Loading /> 
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                description={product.description}
              />
            </Link>
          ))
        ) : (
          <p>No products found.</p> 
        )}
      </div>
    </main>
  );
};
export default Page;
