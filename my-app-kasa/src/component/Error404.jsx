import { NavLink } from "react-router-dom";
function Error404() {
  return (
    <div className="error-flex">
      <div className="logo-corp">
        <img src="404.png" alt="404error" />
        <h2>Oups! La page que vous demandez n'existe pas</h2>
      </div>
      <div>
        <NavLink to="/" className={"Back-accueil"}>
          Retour vers la page d'accueil
        </NavLink>
      </div>
    </div>
  );
}
export default Error404;
