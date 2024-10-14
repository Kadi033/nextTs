"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { debounce } from "lodash";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRouter = useRouter();
  const handleSearchDebounced = debounce((term) => {
    if (term) {
      searchRouter.push(`?q=${term}`);
    } else {
      searchRouter.push("/product");
    }
  }, 1000);

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
