import React from "react";
import { NavLink } from "react-router-dom";
function BannerKasa() {
  return (
    <div className="Banner">
      <div className="logo">
        <img id="logokasa" src="Logo.png" alt="logo" />
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
