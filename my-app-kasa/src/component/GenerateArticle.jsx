import React, { useEffect, useState } from "react";
import ArticleHotel from "./ArticleHotel";

const GenerateArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("article.JSON");
        if (!response.ok) {
          throw new Error("failed request ! " + response.status);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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

export default GenerateArticle;
