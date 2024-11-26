import CategoryCard from "../components/CategoryCard/CategoryCard";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import { useSearch } from "../contexts/SearchContexts";

import { useEffect, useState } from "react";
import type { MusicData } from "../types/musicSection";

function SearchPage() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  const filteredMusic = dataMusic.filter((genre) =>
    genre.genre.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <section className="category-container">
        <h1>Page de recherche</h1>

        <section className="category-wrapper">
          {filteredMusic.length > 0 ? (
            filteredMusic.map((genre) => (
              <Link to={`/Genre/${genre.genre}`} key={genre.id}>
                <CategoryCard
                  genre={genre.genre}
                  id={genre.id}
                  titreImg={genre.titreImg}
                  color={genre.color}
                  artistes={genre.artistes}
                />
              </Link>
            ))
          ) : (
            <p>Aucun résultat trouvé</p>
          )}
        </section>
      </section>
    </>
  );
}

export default SearchPage;
