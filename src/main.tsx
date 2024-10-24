import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./Button.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button />
  </StrictMode>
);
