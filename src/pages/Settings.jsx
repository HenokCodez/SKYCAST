import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext

const themes = ["Default", "Sunny", "Rainy", "Snowy", "Night"];
const units = ["Celsius", "Fahrenheit"];

function Settings() {
  const { theme, setTheme, unit, setUnit } = useContext(ThemeContext); // Access global settings

  return (
    <div className="container lg:px-32 p-6">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center mb-6">
        <img src="/SKYCAST/logo.png" alt="logo" className="h-10" />
        <Link to="/">
          <HomeIcon sx={{ fontSize: 40, color: "blue" }} />
        </Link>
      </nav>

      {/* Settings */}
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      {/* Theme Selector */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Theme:</label>
        <select className="cursor-pointer border p-2 rounded w-full" value={theme} onChange={(e) => setTheme(e.target.value)}>
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Unit Selector */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Temperature Unit:</label>
        <select className="cursor-pointer border p-2 rounded w-full" value={unit} onChange={(e) => setUnit(e.target.value)}>
          {units.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Settings;
