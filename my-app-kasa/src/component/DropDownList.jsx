import React, { useState } from "react";
import AnimatedContent from "./AnimatedContent";
import logo from "../assets/Arrow.png";

const DropdownList = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="list-responsive">
      <div className="list" onClick={toggleDropdown}>
        {title}
        <img
          className={`Arrow ${isExpanded ? "expanded" : ""}`}
          src={logo}
          alt={isExpanded ? "Fermer" : "Ouvrir"}
        />
      </div>
      {isExpanded && (
        <AnimatedContent className="content-list">{content}</AnimatedContent>
      )}
    </div>
  );
};
export default DropdownList;
