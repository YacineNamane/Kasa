import React from "react";
import filledstar from "../assets/star-active .png";
import emptystar from "../assets/star-inactive .png";

const StarRating = ({ rating }) => {
  const filledStars = rating;

  const ShowStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= filledStars ? filledstar : emptystar}
          alt={i <= filledStars ? "Filled-star" : "Empty-star"}
          className="star"
        />
      );
    }

    return stars;
  };

  return <div className="star-rating">{ShowStars()}</div>;
};

export default StarRating;
