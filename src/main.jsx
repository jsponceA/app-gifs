import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import GiftApp from "./GiftApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GiftApp />
  </StrictMode>
);
