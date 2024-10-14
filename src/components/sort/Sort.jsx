"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Sort() {
  const sortRouter = useRouter();

  function sortByTitle() {
    sortRouter.push("/product?sort=asc");
}

function sortByPriceLowHigh() {
    sortRouter.push("/product?sort=priceLowHigh");
}

function sortByPriceHighLow() {
    sortRouter.push("/product?sort=priceHighLow");
}

return (
    <div className="sortButtons">
        <button onClick={sortByTitle}>Sort by Title</button>
        <button onClick={sortByPriceLowHigh}>Sort by Price: Low to High</button>
        <button onClick={sortByPriceHighLow}>Sort by Price: High to Low</button>
    </div>
);
}

export default Sort;
