import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import KasaBanner from "./component/index";
import ImgBannerAccueil from "./component/imgbanner";
import Accueil from "./component/GenerateArticle";
import Footer from "./component/footer";
import ImgBannerAp from "./component/imgbannerap";
import Dropdown from "./component/list";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <KasaBanner />
              <ImgBannerAccueil />
              <Accueil />
              <Footer />
            </div>
          }
        />

        <Route
          path="/apropos"
          element={
            <div>
              <KasaBanner />
              <ImgBannerAp />
              <Dropdown />
              <Footer />
            </div>
          }
        />
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
