import "./MusicSections.css";
import { Link, useLocation } from "react-router-dom";
import type { ArtistI } from "../../types/musicSection";

function MusicSections({ Artists }: { Artists: ArtistI[] }) {
  const urlLocation = useLocation();
  const slicedArray: ArtistI[] = Artists.sort(() => Math.random() - 0.5).slice(
    0,
    4,
  );

  return (
    <section className="music-section">
      {slicedArray.map((el) => {
        return (
          <Link key={el.id} to={`${urlLocation.pathname}details/${el.id}`}>
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
