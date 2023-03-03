import "./ProductCard.css";
import cartIcon from "../../icons/cart.svg";
import heartIcon from "../../icons/heart.svg";
import eyeIcon from "../../icons/eye.svg";
import { IonIcon } from "@ionic/react";
import { Rating } from "react-simple-star-rating";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-card-icons">
        <IonIcon src={cartIcon} className="product-card-icon" />
        <IonIcon src={heartIcon} className="product-card-icon" />
        <IonIcon src={eyeIcon} className="product-card-icon" />
      </div>
      <img src={props.img} alt="product" />
      <h2> Fresh Cake</h2>
      <Rating readonly={true} size={20} initialValue="4.5" />
      <p>$13.99</p>
    </div>
  );
}
