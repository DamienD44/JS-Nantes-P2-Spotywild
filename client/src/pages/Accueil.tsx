import musicData from "../assets/music-data.json";
import MusicSections from "../components/MusicSections/MusicSections";

function Accueil() {
  return (
    <main>
      {musicData.map((el) => {
        return (
          <MusicSections
            key={`${el.genre}-${el.Artistes[0].id}`}
            Artists={el.Artistes}
          />
        );
      })}
    </main>
  );
}

export default Accueil;
