import React, { useState } from "react";

const DropdownList = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="list" onClick={toggleDropdown}>
        {title}
        <img
          className="Arrow"
          src="Arrow.png"
          alt={isExpanded ? "Fermer" : "Ouvrir"}
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      {isExpanded && (
        <div className="content-list">
          <p id="p-list">{content}</p>
        </div>
      )}
    </div>
  );
};

const Dropdown = () => {
  return (
    <div className="group-list">
      <DropdownList
        title="fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <DropdownList
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <DropdownList
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
      />
      <DropdownList
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
};

export default Dropdown;
