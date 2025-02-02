"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    onSearch(city);
  };
  return (
    <div className="flex justify-center gap-2 items-center bg-slate-50 text-slate-900 w-full sm:w-96 rounded-md ">
      <input
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCity(e.target.value)
        }
        className="w-full bg-transparent px-6 py-4 outline-none"
        type="text"
        placeholder="Enter a city"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-slate-50 h-full text-slate-900 px-4 py-1 rounded-e-md hover:bg-slate-800 hover:text-white transition-all duration-300"
      >
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
