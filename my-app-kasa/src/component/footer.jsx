import logo from "../assets/LogoF.png";
function Footer() {
  return (
    <footer>
      <div className="logofooter">
        <img id="logof" src={logo} alt="logofooter" />
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
