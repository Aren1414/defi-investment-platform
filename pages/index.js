import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../components/App";
import InvestmentPage from "../components/Investment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/investment" element={<InvestmentPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
