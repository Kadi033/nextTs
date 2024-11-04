import footerImage from "../../../public/66edb11441e16f9cf22b0d72_Entropy®.svg";
import Image from "next/image";
function Footer() {

  return (
    <div className={"border-t bottom-0 border-white/60 p-5 transition-colors duration-300 bg-slate-100 text-black dark:bg-gray-800 dark:text-white"}>
      <div className="w-full mx-auto grid justify-center">
        <div className="flex justify-center mb-4">
          <Image className="object-contain transition duration-300 brightness-200 dark:brightness-0 invert" src={footerImage} alt="/" />
        </div>
        <div className="flex gap-16 mt-2">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Explore</h1>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Home</a>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">About</a>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Support</h1>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Contact</a>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Pricing</a>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Others</h1>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Style Guide</a>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Changelog</a>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Utility</h1>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Password</a>
            <a href="/" className="text-gray-400 text-base font-normal hover:translate-y-[-2px] hover:text-white transition-all duration-200">Instruction</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
