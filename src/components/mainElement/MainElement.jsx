import Image from "next/image";

function MainElement({ image, title, description, onAddToCart }) {
  return (
    <div className="transition-colors duration-300 bg-slate-100 text-black dark:bg-gray-800 dark:text-white w-72 h-[370px] flex flex-col items-center">
      <Image
        src={image}
        alt={title}
        className="transition-colors duration-300 bg-slate-100 dark:bg-gray-800 rounded-lg object-cover h-52 w-full"
        width={500}
        height={500}
      />
      <h2 className="py-2">{title}</h2>
      <p className="pb-2 transition-colors duration-300 bg-slate-100 dark:bg-gray-800">
        {description}
      </p>
      <button
        className="w-full bg-red-500 text-black border-0 rounded-md justify-center items-center py-3 px-6 text-sm font-bold cursor-pointer hover:opacity-75"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
export default MainElement;
