import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/*importing the navigation component*/
import Beginning from "./AmazonPage/Navigation"; /*The name of the import name must begin 
with a capital letter*/
/*We are importing FilterList component*/
import FilterList from "./AmazonPage/FilterList";
/*Importing ItemCard*/
import ItemCard from "./AmazonPage/ItemCard";

/*importing css files*/
import "./AmazonPage/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Beginning />
    <FilterList />
    <ItemCard />
  </StrictMode>,
);
