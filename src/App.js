import "./App.css";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Navigation from "./components/navigation/Navigation";
import Products from "./components/products/Products";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Aboutus />
      <Menu />
      <Products />
      <Reviews />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
