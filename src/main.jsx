import { ThemeProvider } from "./ThemeContext";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // Makes theme & unit settings available globally across the app.
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
