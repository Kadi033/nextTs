"use client";
import Link from "next/link";
import logo from "../../../public/download.svg";
import Button from "../button/Button";
import "./Header.css";
import Image from "next/image";
import { useTheme } from "@/src/provider/ThemeProvider"; 

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`headerContainer ${
        theme === "dark" ? "bg-gray-800" : "bg-slate-100"
      }`}
    >
      <div className="leftSideContainer">
        <div className="logo">
          <Image
            src={logo}
            alt="/"
            className={`kk filter ${theme === "dark" ? "brightness-0 invert" : "brightness-200 invert"}`}
          />
        </div>
        <nav
          className={`firstNavBar rounded px-4 py-2 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-100 text-black"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/assignment">Assignment-3</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/product">Products</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </div>

      <nav
        className={`secondNavBar rounded px-4 py-2 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-100 text-black"
        }`}
      >
        <a href="/">What’s New</a>
        <a href="/">Help</a>
        <a href="/api/auth/logout">
          <Button text="Logout" width="120px" />
        </a>
        <div className="themeToggleButtons">
          <button
            onClick={() => toggleTheme("light")}
            className={`p-2 ${theme === "light" ? "font-bold" : ""}`}
          >
            Light
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            className={`p-2 ${theme === "dark" ? "font-bold" : ""}`}
          >
            Dark
          </button>
          <button
            onClick={() =>
              toggleTheme(
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
              )
            }
            className={`p-2 ${theme === "system" ? "font-bold" : ""}`}
          >
            System
          </button>
        </div>
      </nav>
    </div>
  );
}
