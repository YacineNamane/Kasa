import React from "react";

function ImgBanner({ imageUrl }) {
  return (
    <div className="imgaccueilcontainner">
      <img id="imgaccueil" src={imageUrl} alt="banneraccueil" />
    </div>
  );
}

export default ImgBanner;
