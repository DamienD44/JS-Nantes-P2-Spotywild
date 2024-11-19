import "./MusicSections.css";
import type { ArtistI } from "../../types/musicSection";

function MusicSections({ Artists }: { Artists: ArtistI[] }) {
  const slicedArray: ArtistI[] = Artists.sort(() => Math.random() - 0.5).slice(
    0,
    4,
  );

  return (
    <section className="music-section">
      {slicedArray.map((el) => {
        return (
          <figure className="imgS" key={el.id}>
            <img className="images" src={el.imgSrc} alt={el.name} />{" "}
            <figcaption>{el.name}</figcaption>
          </figure>
        );
      })}
    </section>
  );
}

export default MusicSections;
