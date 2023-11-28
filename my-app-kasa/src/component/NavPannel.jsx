import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
function BannerKasa() {
  return (
    <div className="Banner">
      <div className="logo">
        <img id="logokasa" src={logo} alt="logo" />
      </div>
      <nav>
        <div className="nav">
          <div>
            <NavLink to="/"> accueil</NavLink>
          </div>
          <div>
            <NavLink to="/apropos">A propos</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default BannerKasa;
