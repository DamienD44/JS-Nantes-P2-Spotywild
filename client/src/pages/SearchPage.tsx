import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import "./SearchPage.css";
// import dataBase from "../assets/music-data.json";

interface Genre {
  id: number;
  titreImg: string;
  genre: string;
  color: string;
}

function SearchPage() {
  const [music, setMusic] = useState<Genre[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/spotywild")
      .then((response) => response.json())
      .then((data) => setMusic(data));
  }, []);

  return (
    <>
      <section className="category-container">
        <h1>Page de recherche</h1>
        <section className="category-wrapper">
          {music.map((genre) => {
            return <CategoryCard key={genre.id} character={genre} />;
          })}
        </section>
      </section>
    </>
  );
}

export default SearchPage;
