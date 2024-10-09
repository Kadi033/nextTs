import Image from "next/image";
function Product({ image, title, description, onAddToCart }) {
  return (
    <>
      <div className="product">
        <Image src={image} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <button className="product-button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Product;
