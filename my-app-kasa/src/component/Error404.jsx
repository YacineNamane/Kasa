import { NavLink } from "react-router-dom";
import logo404 from "../assets/404.png";
function Error404() {
  return (
    <div className="error-flex">
      <div className="logo-corp">
        <img className="error-logo" src={logo404} alt="404error" />
      </div>

      <div>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
      </div>
      <NavLink to="/" className={"Back-accueil"}>
        Retour vers la page d'accueil
      </NavLink>
    </div>
  );
}
export default Error404;
