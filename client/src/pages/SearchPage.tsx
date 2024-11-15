import CategoryCard from "../components/CategoryCard/CategoryCard";
import "./SearchPage.css";
import dataBase from "../assets/music-data.json";

function SearchPage() {
  return (
    <>
      <section className="category-container">
        <h1>Page de recherche</h1>
        <section className="category-wrapper">
          {dataBase.map((genre) => {
            return (
              <CategoryCard key={dataBase.indexOf(genre)} character={genre} />
            );
          })}
        </section>
      </section>
    </>
  );
}

export default SearchPage;
