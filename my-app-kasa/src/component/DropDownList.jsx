import React, { useState } from "react";
import logo from "../assets/Arrow.png";
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
          className={`Arrow ${isExpanded ? "expanded" : ""}`}
          src={logo}
          alt={isExpanded ? "Fermer" : "Ouvrir"}
        />
      </div>
      {isExpanded && (
        <div className="content-list">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
export default DropdownList;
