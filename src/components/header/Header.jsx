"use client";
import Link from "next/link";
import logo from "../../../public/download.svg";
import Button from "../button/Button";
import Image from "next/image";
import { useTheme } from "../../provider/ThemeProvider";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLocale = (newLocale) => {
    const newPath = pathname
      .split("/")
      .map((segment, index) => (index === 1 ? newLocale : segment))
      .join("/");
      router.replace(newPath);
  };
  
  return (
    <div
      className={`w-full mx-auto flex justify-between px-16 py-5 transition-colors duration-300 bg-slate-100 text-black dark:bg-gray-800 dark:text-white`}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 mr-7 cursor-pointer flex items-center justify-center">
          <Image
            src={logo}
            alt="/"
            className="object-contain transition duration-300 brightness-200 dark:brightness-0 invert"
          />
        </div>
        <nav className="flex items-center gap-10">
          <Link href="/" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            About
          </Link>
          <Link href="/contact" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            Contact
          </Link>
          <Link href="/assignment" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            Assignment-3
          </Link>
          <Link href="/blog" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            Blog
          </Link>
          <Link href="/product" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            Products
          </Link>
          <Link href="/stripe" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
            Stripe
          </Link>
          <Link href="/profile" className="hover:translate-y-1 hover:opacity-80 transition duration-200">
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
          <Button text="Logout" width="100px" />
        </a>
        <div className="flex flex-col p-2 gap-1">
          <p onClick={() => changeLocale("ka")} className="cursor-pointer">
            geo
          </p>
          <p onClick={() => changeLocale("en")} className="cursor-pointer">
            eng
          </p>
        </div>
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
          >
            Theme
          </button>
          {isOpen && (
            <div className="absolute right-[1px] mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded">
              <button
                onClick={() => toggleTheme("light")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                Light
              </button>
              <button
                onClick={() => toggleTheme("dark")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                Dark
              </button>
              <button
                onClick={() => {
                  const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                  toggleTheme(newTheme);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                System
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
