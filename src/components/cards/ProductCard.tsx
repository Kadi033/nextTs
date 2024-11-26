/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Button from "../button/Button";
import "./card.css";

// Define props for the Card component
interface CardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function Card({ title, price, image, description }: CardProps) {
  return (
    <div className="productcard">
      <div className="productcard-image-wrapper">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="productcard-content-wrapper">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <p className="product-price">${price}</p>
        <Button text="Add To Cart" width={150} />
      </div>
    </div>
  );
}
