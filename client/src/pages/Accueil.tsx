 import musicData from "../assets/music-data.json";
 import MusicSections from "../components/MusicSections/MusicSections";

function Accueil() {
  return (
    <main>
      <h1>Fix the database</h1>
      {{musicData.map((el) => {
        return (
          <MusicSections
            key={`${el.genre}-${el.Artistes[0].id}`}
            Artists={el.Artistes}
          />
        );
      })} }
    </main>
  );
}

export default Accueil;
