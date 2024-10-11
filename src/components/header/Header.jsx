import Link from "next/link";
import logo from "../../../public/download.svg";
import Button from "../button/Button";
import "./Header.css";
import Image from "next/image";

function Header() {
  return (
    <div className="headerContainer">
      <div className="leftSideContainer">
        <div className="logo">
          <Image src={logo} alt="/" />
        </div>
        <nav className="firstNavBar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/assignment">Assignment-3</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/product">Products</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </div>

      <nav className="secondNavBar">
        <a href="/">What’s New</a>
        <a href="/">Help</a>
        <Button text="Contact Us" width="120px" />
      </nav>
    </div>
  );
}

export default Header;
