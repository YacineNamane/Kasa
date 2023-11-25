import React from "react";
import BannerKasa from "../component/NavPannel";
import ImgBanner from "../component/ImgBanner";
import Dropdown from "../component/ListDrop";
import Footer from "../component/Footer";
function Apropos() {
  return (
    <div>
      <BannerKasa />
      <ImgBanner imageUrl="imageapropos.png" />
      <Dropdown />
      <Footer />
    </div>
  );
}
export default Apropos;
