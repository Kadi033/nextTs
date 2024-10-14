/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "../button/Button";
import "./card.css";

export default function Card({ title, price, image, description }) {
  return (
     
    <div className="productcard">
      <div className="productcard-image-wrapper">
        <img src={image} alt="Description1" className="product-image" />
      </div>
      <div className="productcard-content-wrapper">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <p className="product-price">{price} $</p>
        <Button text={"Add To Card"} width={150} />
      </div>
    </div>
  );
}