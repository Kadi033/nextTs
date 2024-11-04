"use client";
import Link from "next/link";
import logo from "../../../public/download.svg";
import Button from "../button/Button";
import Image from "next/image";
import { useTheme } from "@/src/provider/ThemeProvider";

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <div
      className={`w-full mx-auto flex justify-between px-16 py-5 transition-colors duration-300 bg-slate-100 text-black dark:bg-gray-800 dark:text-white`}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 mr-7 cursor-pointer flex items-center justify-center">
          <Image
            src={logo}
            alt="/"
            className="object-contain transition duration-300  brightness-200 dark:brightness-0 invert "
          />
        </div>
        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            Contact
          </Link>
          <Link
            href="/assignment"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            Assignment-3
          </Link>
          <Link
            href="/blog"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            Blog
          </Link>
          <Link
            href="/product"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            Products
          </Link>
          <Link
            href="/profile"
            className="hover:translate-y-1 hover:opacity-80 transition duration-200"
          >
            Profile
          </Link>
        </nav>
      </div>

      <nav className="flex items-center gap-3">
        <a
          href="/"
          className="px-3 py-1 text-decoration-none hover:translate-y-1 hover:opacity-80 transition duration-200"
        >
          What’s New
        </a>
        <a
          href="/"
          className="px-3 py-1 text-decoration-none hover:translate-y-1 hover:opacity-80 transition duration-200"
        >
          Help
        </a>
        <a href="/api/auth/logout">
          <Button text="Logout" width="120px" />
        </a>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleTheme("light")}
            className={`p-2 dark:text-white`}
          >
            Light
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            className={`p-2 dark:text-white`}
          >
            Dark
          </button>
          <button
            onClick={() => {
              const newTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
              toggleTheme(newTheme);
            }}
            className={`p-2 dark:text-white`}
          >
            System
          </button>
        </div>
      </nav>
    </div>
  );
}
