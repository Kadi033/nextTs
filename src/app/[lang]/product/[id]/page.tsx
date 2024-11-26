/* eslint-disable @next/next/no-img-element */
import React from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import "./singleProduct.css";

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
    id: number;
    lang: "en" | "ka";
  };
}

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_KEY ?? "";
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Fetch product data by ID
async function fetchProduct(id: number): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// React component for a single product page
export default async function Prod({ params }: ProductProps) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <div className="h-screen flex items-center">
        <div className="blogContainer">
          <p>Product not found.</p>
        </div>
      </div>
    );
  }

  const { title_en, title_ka, description_en, description_ka, price, image } = product;

  return (
    <div className="main-card">
      <div className="inner-container">
        <div className="for-image">
          <img src={image} alt={params.lang === "ka" ? title_ka : title_en} />
        </div>
        <div className="info-container">
          <h1 className="title">{params.lang === "ka" ? title_ka : title_en}</h1>
          <h3>Price: ${price}</h3>
          <p className="description">{params.lang === "ka" ? description_ka : description_en}</p>
          <button className="button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
