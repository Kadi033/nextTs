/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import "./singleProduct.css"


async function fetchProduct(id) {
  try {
    const prodRes = await axios.get(
      `https://dummyjson.com/product/${id}`
    );
    return prodRes.data
  } catch (error) {
    console.error(error);
  }
};

export default async function Prod({params}) {
  const prod = await fetchProduct(params.id)
  return (
    <div className="main-card">
      <h1>{prod.brand}</h1>
      <div className="inner-container">
        <div className="for-image">
          <img src={prod.images} alt="image" />
        </div>
        <div className="info-container">
          <h2>Rating: {prod.rating}⭐</h2>
          <h1 className="title">{prod.title}</h1>
          <p className="availability">{prod.availabilityStatus}</p>
          <h3>Price: {prod.price}$</h3>
          <p className="description">{prod.description}</p>
          <button className="button">Add To The Card</button>
        </div>
      </div>
    </div>
  );
}
