import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Home";
import Apropos from "./pages/APropos";
import BugPage from "./pages/BugPage";
import FicheLogement from "./pages/FicheLogement";

const AppRoutes = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/FicheLogement/:id" element={<FicheLogement />} />
          <Route path="*" element={<BugPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default AppRoutes;
