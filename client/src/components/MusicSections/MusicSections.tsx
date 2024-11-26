import "./MusicSections.css";
import type { ArtistI } from "../../types/musicSection";
import { Link } from "react-router-dom";
import type { AlbumI } from "../../types/musicSection";

function MusicSections({ Artists }: { Artists: ArtistI[]; Album: AlbumI }) {
  const slicedArray: ArtistI[] = Artists.sort(() => Math.random() - 0.5).slice(
    0,
    4,
  );

  return (
    <section className="music-section">
      {slicedArray.map((el) => {
        return (
          <Link to={`/details/${el.id}`} key={el.id}>
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
