import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function Home() {
  return (
    <div className="container lg:px-32 p-6 min-h-screen">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center p-4 rounded-lg shadow-md bg-opacity-50">
        <img src="/logo.png" alt="logo" className="h-12" />

        <Link to="/settings">
          <SettingsSuggestIcon sx={{ fontSize: 40, color: "blue" }} />
        </Link>
      </nav>

      {/* Search Bar */}
      <div className="mt-8">
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
