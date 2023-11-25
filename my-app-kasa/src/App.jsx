import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import apropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import bugpage from "./pages/BugPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Mes routes */}

            <Route path="/" exact component={Home} />
            <Route path="/apropos" component={apropos} />
            <Route path="/FicheLogement/:id" element={FicheLogement} />
            <Route path="*" element={bugpage} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
