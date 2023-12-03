import React from "react";
import NavPannel from "../component/NavPannel";
import ImgBanner from "../component/ImgBanner";
import Dropdown from "../component/ListDrop";
import Footer from "../component/Footer";
function Apropos() {
  return (
    <div>
      <NavPannel />
      <ImgBanner imageUrl="imageapropos.png" showText={false} />
      <Dropdown />
      <Footer />
    </div>
  );
}
export default Apropos;
