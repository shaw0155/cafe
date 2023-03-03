import "./Menu.css";
import img1 from "../../imgs/coffe1.jpg";
import img2 from "../../imgs/coffe2.jpg";
import img3 from "../../imgs/coffe3.jpg";
import img4 from "../../imgs/coffe4.jpg";
import img5 from "../../imgs/coffe5.jpg";
import img6 from "../../imgs/coffe6.jpg";
import MenuCard from "./MenuCard";

const menuItems = [img1, img2, img3, img4, img5, img6];

export default function Menu() {
  return (
    <div className="section menu-section" id="menu">
      <h1 className="section-title">
        OUR <span>MENU</span>
      </h1>
      <div className="menu-cards">
        {menuItems.map((coffeImg) => (
          <MenuCard img={coffeImg} />
        ))}
      </div>
    </div>
  );
}
