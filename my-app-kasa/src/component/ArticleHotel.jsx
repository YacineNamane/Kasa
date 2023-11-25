import React from "react";
import { NavLink } from "react-router-dom";
const ArticleHotel = ({ id, title, cover }) => (
  <figure id={`article-${id}`}>
    <NavLink to={`/FicheLogement/${id}`}>
      <img src={cover} alt={title} />
      <figcaption>{title}</figcaption>
    </NavLink>
  </figure>
);

export default ArticleHotel;
