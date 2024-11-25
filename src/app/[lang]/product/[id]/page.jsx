/* eslint-disable @next/next/no-img-element */
import { createClient } from "@supabase/supabase-js";
import "./singleProduct.css";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchProduct(id) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function Prod({ params }) {
  const prod = await fetchProduct(params.id);

  if (!prod) {
    return <p>Product not found or an error occurred.</p>; // Handle the case when no product is found
  }

  return (
    <div className="main-card">
      <div className="inner-container">
        <div className="for-image">
          <img src={prod.image} alt={prod.title_en} />
        </div>
        <div className="info-container">
          <h1 className="title">{prod.title_en}</h1>
          <h3>Price: {prod.price}$</h3>
          <p className="description">{prod.description_en}</p>
          <button className="button">Add To The Cart</button>
        </div>
      </div>
    </div>
  );
}
