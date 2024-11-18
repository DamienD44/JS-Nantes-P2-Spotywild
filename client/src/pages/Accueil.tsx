import Carousel from "../components/Carousel/Carousel";
import "../components/Carousel/Carousel.css";
function Accueil() {
  return (
    <>
      <h1>Page Accueil</h1>
      <Carousel />
    </>
  );
import musicData from "../assets/music-data.json";
import MusicSections from "../components/MusicSections/MusicSections";

function App() {
  return (
    <main>
      {musicData.map((el) => {
        return (
          <MusicSections
            key={`${el.genre}-${el.Artistes[0].id}`} // Utiliser genre + id comme clé unique
            Artists={el.Artistes}
          />
        );
      })}
    </main>
  );
}

export default App;
