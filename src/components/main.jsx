// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from ".//App";
import PokeNavBar from "./PokeNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <PokeNavBar />
    <App />
  </Router>,
);
