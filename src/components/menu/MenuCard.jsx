import "./MenuCard.css";

export default function MenuCard(props) {
  return (
    <div className="menu-card">
      <img src={props.img} alt="coffe" />
      <h3>Tast And Healthy</h3>
      <p>$15.99</p>
      <button>Add To Cart</button>
    </div>
  );
}
