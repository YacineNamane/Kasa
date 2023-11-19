// Accueil.jsx
import React, { useEffect, useState } from "react";
import ArticleHotel from "./article";

const Accueil = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("article.json")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) =>
        console.error("Erreur lié au fichier JSON ici ! ", error)
      );
  }, []);

  return (
    /* Dans un premier temps j'ai créer des articles en cumulant des div pour mettre en place le style lié a ces derniers */
    <div className="hotel-contenair">
      {articles.map((article) => (
        <ArticleHotel
          key={article.id}
          id={article.id}
          title={article.title}
          cover={article.cover}
        />
      ))}
    </div>
  );
};

export default Accueil;
