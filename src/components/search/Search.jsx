"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { debounce } from "lodash";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearchDebounced = debounce((term) => {
    if (term) {
      router.push(`?q=${term}`);
    } else {
      router.push("/product");
    }
  }, 500);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    handleSearchDebounced(inputValue);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}
