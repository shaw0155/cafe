import "./Aboutus.css";
import aboutusImg from "../../imgs/aboutus.jpg";

export default function Aboutus() {
  return (
    <div className="aboutus-section section" id="about  ">
      <h1 className="section-title">
        About <span>Us</span>
      </h1>
      <div className="aboutus-section-card">
        <img src={aboutusImg} alt="coffe" />
        <div>
          <h2>What Makes Your Coffe Special?</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
