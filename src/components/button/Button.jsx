"use client";
import { useTheme } from "@/src/provider/ThemeProvider";

function Button({ width, text }) {
  const { theme } = useTheme();

  return (
    <div
      className={`mainButton rounded px-4 py-2 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-100 text-black"
      }`}
      style={{ width, margin: "0 auto" }}
    >
      {text}
    </div>
  );
}

export default Button;
