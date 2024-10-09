import "./Footer.css";
import footerImage from "../../../public/66edb11441e16f9cf22b0d72_Entropy®.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="footerLogo">
            <Image src={footerImage} alt="/" />
        </div>
        <div className="footerMenu">
          <div className="footerMenuBox">
            <h1>Explore</h1>
            <a href="/">Home</a>
            <a href="/">About</a>
          </div>
          <div className="footerMenuBox">
            <h1>Support</h1>
            <a href="/">Contact</a>
            <a href="/">Pricing</a>
          </div>
          <div className="footerMenuBox">
            <h1>Others</h1>
            <a href="/">Style Guide</a>
            <a href="/">Changelog</a>
          </div>

          <div className="footerMenuBox">
            <h1>Utility</h1>
            <a href="/">Password</a>
            <a href="/">Instruction</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;