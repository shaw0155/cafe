import "./Reviews.css";
import pic1 from "../../imgs/pic-1.png";
import pic2 from "../../imgs/pic-2.png";
import pic3 from "../../imgs/pic-3.png";
import ReviewCard from "./ReviewCard";

const Dummy_Review = [
  {
    id: 1,
    img: pic1,
    name: "Someone Name",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscingelit.In vestibulum euismod arcu, euismod lacinia purus laoreet a. Integer vehicula hendrerit pellentesque. Maecenas a mi est.",
    rate: 4.5,
  },
  {
    id: 2,
    img: pic2,
    name: "Someone Name",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscingelit.In vestibulum euismod arcu, euismod lacinia purus laoreet a. Integer vehicula hendrerit pellentesque. Maecenas a mi est.",
    rate: 5,
  },
  {
    id: 3,
    img: pic3,
    name: "Someone Name",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscingelit.In vestibulum euismod arcu, euismod lacinia purus laoreet a. Integer vehicula hendrerit pellentesque. Maecenas a mi est.",
    rate: 4,
  },
];

export default function Reviews() {
  return (
    <div className="section reviews-section" id="review">
      <h1 className="section-title">
        Customer's <span>Review</span>
      </h1>
      <div className="reviews-section-cards">
        {Dummy_Review.map((review) => (
          <ReviewCard
            key={review.id}
            img={review.img}
            name={review.name}
            describtion={review.describtion}
            rate={review.rate}
          />
        ))}
      </div>
    </div>
  );
}
