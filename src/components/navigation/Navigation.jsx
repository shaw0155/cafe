import "./Navigation.css";
import { IonIcon } from "@ionic/react";
import logo from "../../imgs/logo-gold.png";
import searchIcon from "../../icons/search.svg";
import cartIcon from "../../icons/cart.svg";
import closeIcon from "../../icons/close.svg";
import menuIcon from "../../icons/menu.svg";
import { useState } from "react";

const navItems = [
  {
    key: "home",
    href: "#home",
    title: "HOME",
  },
  {
    key: "about",
    href: "#about",
    title: "ABOUT",
  },
  {
    key: "Menu",
    href: "#menu",
    title: "MENU",
  },
  {
    key: "Products",
    href: "#products",
    title: "PRODUCTS",
  },
  {
    key: "Review",
    href: "#review",
    title: "REVIEWS",
  },
  {
    key: "contact",
    href: "#contact",
    title: "CONTACT",
  },
];

export default function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <div className="nav-bar">
      <img className="nav-bar-logo" src={logo} alt="logo" />
      <ul className="nav-bar-links">
        {navItems.map((item) => (
          <li>
            <a className="nav-bar-link" href={item.href} key={item.key}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {
        <div className={show ? "side__nav" : "side__nav hidden"}>
          {navItems.map((item) => (
            <a className="side__nav__link" href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      }

      <ul className="nav-bar-icons">
        <li>
          {show ? (
            <IonIcon
              src={closeIcon}
              className={"nav-icon nav-bar-icon close-icon"}
              onClick={() => setShow(!show)}
            />
          ) : (
            <IonIcon
              src={menuIcon}
              className={"nav-icon nav-bar-icon "}
              onClick={() => setShow(!show)}
            />
          )}
        </li>
        <li>
          <IonIcon src={searchIcon} className="nav-bar-icon" />
        </li>
        <li>
          <IonIcon src={cartIcon} className="nav-bar-icon" />
        </li>
      </ul>
    </div>
  );
}
