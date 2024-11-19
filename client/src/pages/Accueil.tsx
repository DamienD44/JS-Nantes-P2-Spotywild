import { useEffect, useState } from "react";
import MusicSections from "../components/MusicSections/MusicSections";
import type { MusicData } from "../types/musicSection";

function App() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  return (
    <main>
      {dataMusic.map((el) => {
        return (
          <MusicSections
            key={el.id} // Utiliser genre + id comme clé unique
            Artists={el.artistes}
          />
        );
      })}
    </main>
  );
}

export default App;
