import "./MusicSections.css";
import { Link, useLocation } from "react-router-dom";
import type { ArtistI } from "../../types/musicSection";

// }: { Artists: ArtistI[]; genreId: number }) {

function MusicSections({
  Artists,
  genreId,
}: { Artists: ArtistI[]; genreId: number }) {
  const urlLocation = useLocation();

  return (
    <section className="music-section">
      {Artists.map((el) => {
        return (
          <Link
            key={el.id}
            to={`${urlLocation.pathname}details/${genreId}/${el.id}`}
          >
            <figure className="imgS" key={el.id}>
              <img className="images" src={el.imgSrc} alt={el.name} />{" "}
              <figcaption className="figcaption-music">{el.name}</figcaption>
            </figure>
          </Link>
        );
      })}
    </section>
  );
}

export default MusicSections;
