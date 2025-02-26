import { ThemeProvider } from "./ThemeContext";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/SKYCAST/">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
