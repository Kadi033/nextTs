import ProductCard from "@/src/components/cards/ProductCard";
import axios from "axios";
import Link from "next/link";
import "./products.css";
import Sort from "@/src/components/sort/Sort";
import Search from "@/src/components/search/Search";
import { cache } from "react";

const getProduct = cache(async () => {
  try {
    const { data: products } = await axios.get(`${process.env.AUTH0_BASE_URL}/api/products`);
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export default async function Page({ params: { lang: locale } }) {
  const products = await getProduct();

  return (
    <main className="outer-container">
      <Search />
      <Sort />
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
