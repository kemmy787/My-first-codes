import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Mapping from "./Mapping/testingthewaters";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mapping />
  </StrictMode>,
);
