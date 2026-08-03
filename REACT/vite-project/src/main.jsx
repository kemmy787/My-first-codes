import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Parent from "./Props/index";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
);
