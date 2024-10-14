import ProductCard from "@/src/components/cards/ProductCard";
import axios from "axios";
import Link from "next/link";
import "./products.css";
import Sort from "@/src/components/sort/Sort";
import Search from "@/src/components/search/Search";

async function getProduct(query, sort) {
  let url = "https://dummyjson.com/products";

  if (query) {
    url = `https://dummyjson.com/products/search?q=${query}`;
  } else if (sort === "asc") {
    url += "?sortBy=title&order=asc";
  } else if (sort === "priceLowHigh") {
    url += "?sortBy=price&order=asc";
  } else if (sort === "priceHighLow") {
    url += "?sortBy=price&order=desc";
  }

  try {
    const productResponse = await axios.get(url);
    const products = productResponse.data.products;

    if (query) {
      return products.filter((product) =>
        product.title.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page({ searchParams }) {
  const { q: query, sort } = searchParams || {};
  const products = await getProduct(query, sort);

  return (
    <main className="outer-container">
      <Search />
      <Sort className="sort" />
      <h1>Products</h1>
      <div className="container product-card">
        {products.length > 0 ? (
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
}
