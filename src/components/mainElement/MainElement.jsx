import Image from 'next/image';

function MainElement({ image, title, description, onAddToCart }) {
  return (
    <div className="product2">
      <Image src={image} alt={title} className="product-image2" width={500} height={500} />
      <h2 className="product-title2">{title}</h2>
      <p className="product-description2">{description}</p>
      <button className="product-button2" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
export default MainElement;
