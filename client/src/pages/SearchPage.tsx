import CategoryCard from "../components/CategoryCard/CategoryCard";
import "./SearchPage.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import type { MusicData } from "../types/musicSection";

function SearchPage() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  return (
    <>
      <section className="category-container">
        <h1>Page de recherche</h1>
        <section className="category-wrapper">
          {dataMusic.map((genre) => (
            <Link to={`/Genre/${genre.genre}`} key={genre.id}>
              <CategoryCard
                genre={genre.genre}
                id={genre.id}
                titreImg={genre.titreImg}
                color={genre.color}
                artistes={genre.artistes}
              />
            </Link>
          ))}
        </section>
      </section>
    </>
  );
}

export default SearchPage;
