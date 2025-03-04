import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function SearchBar({ fetcher }) {
  const [city, setCity] = useState("NewYork");

  const handelClick = () => {
    fetcher(city);
  };

  return (
    <div className="flex items-center justify-center gap-3 p-2 rounded-xl">
      <input
        type="text"
        placeholder="Enter city name..."
        onChange={(e) => setCity(e.target.value)}
        className="w-96 p-3 rounded-lg border border-gray-300 bg-white shadow-sm 
               focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 
               transition-all duration-200 ease-in-out outline-none"
      />
      <button onClick={handelClick}>
        <SearchIcon
          sx={{
            fontSize: 36,
            color: "#2563eb",
            cursor: "pointer",
            transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
            "&:hover": { color: "#1e40af", transform: "scale(1.1)" },
            "&:focus": { outline: "none", color: "#1e3a8a", transform: "scale(1.1)" },
          }}
          tabIndex={0} // Focusable for accessibility
        />
      </button>
    </div>
  );
}

export default SearchBar;
