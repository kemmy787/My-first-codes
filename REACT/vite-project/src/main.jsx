import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/*importing the navigation component*/
import Beginning from "./AmazonPage/Navigation"; /*The name of the import name must begin 
with a capital letter*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Beginning />
  </StrictMode>,
);
