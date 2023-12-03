import React from "react";
import NavPannel from "../component/NavPannel";
import ImgBanner from "../component/ImgBanner";
import GenerateArticle from "../component/GenerateArticle";
import Footer from "../component/Footer";

function Accueil() {
  return (
    <div>
      <NavPannel />
      <ImgBanner imageUrl="imageaccueil.png" showText={true} />
      <GenerateArticle />
      <Footer />
    </div>
  );
}

export default Accueil;
