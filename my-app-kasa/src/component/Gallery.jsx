// Gallery.jsx
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import ArrowRight from "../assets/vector.png";
import ArrowLeft from "../assets/vector.png";

const Gallery = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  // ici j'affiche l'image précédente et si c'est la première image j'affiche la derière image : 2/4 > 1/4 /OU/ 1/4 > 4/4
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  // ici j'affiche l'image suivante et si c'est la dernière image j'affiche la première image : 2/4 > 3/4 /OU/ 4/4 > 1/4
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  // fonction qui gérre les mise a jour du collapse
  const handleImageClick = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  return (
    <div className="img-gallery-container">
      <div>
        {pictures.map((picture, index) => (
          <img
            className="img-gallery"
            key={index}
            src={picture}
            alt={`appartements ${index + 1}`}
            onClick={handleImageClick}
            style={{
              display: index === currentImageIndex ? "block" : "none",
            }}
          />
        ))}
      </div>

      <Collapse in={isCollapseOpen}>
        <div className="arrow-container">
          <img
            src={ArrowLeft}
            alt="Flèche gauche"
            className="arrow-left"
            onClick={handlePrevClick}
          />
          <span>
            {currentImageIndex + 1}/{pictures.length}
          </span>
          <img
            src={ArrowRight}
            alt="Flèche droite"
            className="arrow-right"
            onClick={handleNextClick}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default Gallery;
