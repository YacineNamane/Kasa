import React from "react";
import KasaBanner from "../component/NavPannel";
import ImgBanner from "../component/ImgBanner";
import GeneratArticle from "../component/GenerateArticle";
import Footer from "../component/Footer";

function Accueil() {
  return (
    <div>
      <KasaBanner />
      <ImgBanner imageUrl="imageaccueil.png" />
      <GeneratArticle />
      <Footer />
    </div>
  );
}

export default Accueil;
