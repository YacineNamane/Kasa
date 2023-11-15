import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import home from "./pages/home";
import apropos from "./pages/apropos";
import fichelogement from "./pages/fichelogement";
import bugpage from "./pages/bugpage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Mes routes */}

            <Route path="/home" exact component={home} />
            <Route path="/apropos" component={apropos} />
            <Route path="/fichelogement" component={fichelogement} />
            <Route path="/bugpage" component={bugpage} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
