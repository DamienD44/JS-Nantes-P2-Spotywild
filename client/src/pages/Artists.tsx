import { useEffect, useState } from "react";
import MusicSections from "../components/MusicSections/MusicSections";
import type { MusicData } from "../types/musicSection";
import "./Artists.css";
import { useSearch } from "../contexts/SearchContexts";

function Artists() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  const filteredData = dataMusic.map((genre) => ({
    ...genre,
    artistes: genre.artistes.filter((artist) =>
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }));

  return (
    <>
      <h1 className="artists-title">Les Artistes</h1>
      <section className="artists-section">
        {filteredData.map(
          (el) =>
            el.artistes.length > 0 && (
              <>
                <h2 className="genre-name">{el.genre}</h2>
                <MusicSections
                  key={el.id}
                  artists={el.artistes}
                  genreId={el.id}
                />
              </>
            ),
        )}
      </section>
    </>
  );
}

export default Artists;
