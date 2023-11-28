import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Accueil from "./pages/Home";
import Apropos from "./pages/APropos";
import BugPage from "./pages/BugPage";
import FicheLogement from "./pages/FicheLogement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="*" element={<BugPage />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);
document.getElementById("root");

reportWebVitals();
