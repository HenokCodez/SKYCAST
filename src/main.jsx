import { ThemeProvider } from "./ThemeContext";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/SKYCAST/">
    // Makes theme & unit settings available globally across the app.
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
