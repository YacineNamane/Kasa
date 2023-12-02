import React from "react";

function ImgBanner({ imageUrl, showText = true }) {
  return (
    <div className="img-banner-flex">
      <div className="imgaccueilcontainner">
        <img id="imgaccueil" src={imageUrl} alt="banneraccueil" />

        {showText && (
          <div className="banner-text">
            <p>Chez vous , partout et ailleurs </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImgBanner;
