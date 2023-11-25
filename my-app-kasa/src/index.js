import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Accueil from "./pages/Home";
import Apropos from "./pages/APropos";
import FicheHotelDetails from "./pages/FicheLogement";
import BugPage from "./pages/BugPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/FicheLogement/:id" element={<FicheHotelDetails />} />
        <Route path="*" element={<BugPage />} />
      </Routes>
    </Router>

    <App />
  </React.StrictMode>
);
document.getElementById("root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
