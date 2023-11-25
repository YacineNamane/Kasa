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
          className={`Arrow ${isExpanded ? "expanded" : ""}`}
          src="Arrow.png"
          alt={isExpanded ? "Fermer" : "Ouvrir"}
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
export default DropdownList;
