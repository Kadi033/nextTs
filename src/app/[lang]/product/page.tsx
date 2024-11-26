import React from "react";
import axios from "axios";
import Link from "next/link";
import "./products.css";
// import Sort from "@/src/components/sort/Sort";
// import Search from "@/src/components/search/Search";
import { cache } from "react";
import ProductCard from '../../../components/cards/ProductCard';

export interface Product {
  id: number;
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  price: number;
  image: string;
}

export interface ProductProps {
  params: {
    lang: "en" | "ka";
  };
}

// Cached data fetching for products
const getProduct = cache(async (): Promise<Product[]> => {
  try {
    const { data: products } = await axios.get<Product[]>(`${process.env.AUTH0_BASE_URL}/api/products`);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
});

// React component for the product list page
export default async function Page({ params: { lang: locale } }: ProductProps) {
  const products = await getProduct();

  return (
    <main className="outer-container">
      {/* <Search />
      <Sort /> */}
      <h1>Products</h1>
      <div className="container product-card">
        {products.length ? (
          products.map(({ id, title_ka, title_en, description_ka, description_en, price, image }) => (
            <Link href={`/${locale}/product/${id}`} key={id}>
              <ProductCard
                title={locale === "ka" ? title_ka : title_en}
                price={price}
                image={image}
                description={locale === "ka" ? description_ka : description_en}
              />
            </Link>
          ))
        ) : (
          <div className="no-prod">No products found.</div>
        )}
      </div>
    </main>
  );
}
