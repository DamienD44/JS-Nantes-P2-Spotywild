import Carousel from "../components/Carousel/Carousel";
import "../components/Carousel/Carousel.css";
import "./Accueil.css";
function Accueil() {
  return (
    <>
      <section className="home-main">
        <h1>Page Accueil</h1>
        <Carousel />
      </section>
    </>
  );
}
export default Accueil;
