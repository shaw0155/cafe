import "./Footer.css";
import { IonIcon } from "@ionic/react";
import fb from "../../icons/logo-facebook.svg";
import insta from "../../icons/logo-instagram.svg";
import linkedin from "../../icons/logo-linkedin.svg";
import twitter from "../../icons/logo-twitter.svg";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-icons">
        <IonIcon src={fb} className="footer-icon" />
        <IonIcon src={insta} className="footer-icon" />
        <IonIcon src={linkedin} className="footer-icon" />
        <IonIcon src={twitter} className="footer-icon" />
      </div>
      <p>
        craeted by <span>shaw web designer</span> | all rights reserved
      </p>
    </div>
  );
}
