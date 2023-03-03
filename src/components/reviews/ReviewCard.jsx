import "./ReviewCard.css";
import { Rating } from "react-simple-star-rating";

function ReviewCard(props) {
  return (
    <div className="review-card">
      <img src={props.img} alt="person" />
      <h3>{props.name}</h3>
      <p>{props.describtion}</p>

      <Rating readonly={true} size={20} initialValue={props.rate} />
    </div>
  );
}

export default ReviewCard;
