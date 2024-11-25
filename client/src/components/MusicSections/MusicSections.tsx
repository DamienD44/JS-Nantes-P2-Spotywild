import "./MusicSections.css";
import { Link, useLocation } from "react-router-dom";
import type { ArtistI } from "../../types/musicSection";

function MusicSections({
  artists,
  genreId,
}: { artists: ArtistI[]; genreId: number }) {
  const urlLocation = useLocation();

  return (
    <section className="music-section">
      {artists.map((el) => {
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
