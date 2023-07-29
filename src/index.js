import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizeProvider } from "./context/QuizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizeProvider>
      <App />
    </QuizeProvider>
  </React.StrictMode>
);
