import "./Products.css";
import cakeImg1 from "../../imgs/cake1.jpg";
import cakeImg2 from "../../imgs/cake2.jpg";
import cakeImg3 from "../../imgs/cake3.jpg";
import ProductCard from "./ProductCard";

const items = [cakeImg1, cakeImg2, cakeImg3];

export default function Products() {
  return (
    <div className="section products-section" id="products">
      <h1 className="section-title">
        Latest <span>products</span>
      </h1>
      <div className="product-cards">
        {items.map((item) => (
          <ProductCard img={item} />
        ))}
      </div>
    </div>
  );
}
