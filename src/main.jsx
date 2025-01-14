import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import GifApp from "./GifApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GifApp />
  </StrictMode>
);
