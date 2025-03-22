import React from "react";
import ReactDOM from "react-dom/client"; // Import the new createRoot API
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from "./App";

// Create a root and render the app inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router> {/* Wrap the app with Router */}
    <App />
  </Router>
);
