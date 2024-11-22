import { useLoaderData } from "react-router-dom";
import "./Genre.css";
import type { MusicData } from "../types/musicSection";

function Genre() {
  const genreData = useLoaderData() as MusicData;

  /* css pour faire dégrader du background du header*/
  const gradientStyle = {
    background: `linear-gradient(${genreData.color}, black)`,
    backgroundColor: genreData.color,
  };

  return (
    <>
      <header className="genre-header" style={gradientStyle}>
        <h1 className="genre-header-title">{genreData.genre}</h1>
      </header>

      <main className="genre-main">
        <section className="genre-artists-albums">
          <h2 className="genre-artistes-title">Artistes</h2>
          <section className="section-genre-artists">
            {genreData.artistes.map((artist) => (
              <div key={artist.id} className="genre-artists">
                <section
                  className="artists-cards"
                  style={{ borderColor: genreData.color }}
                >
                  <img src={artist.imgSrc} alt={artist.name} />
                  <figcaption>{artist.name}</figcaption>
                </section>
              </div>
            ))}
          </section>
          <h2 className="genre-albums-title">Albums</h2>
          <section className="section-genre-albums">
            {genreData.artistes.map((artist) => (
              <div key={artist.id} className="genre-albums">
                {/* Liste des albums de l'artiste */}
                {artist.albums.map((album) => (
                  <section
                    key={album.id}
                    className="albums-cards"
                    style={{ borderColor: genreData.color }}
                  >
                    <img src={album.albumImg} alt={album.albumName} />
                    <figcaption>{album.albumName}</figcaption>
                  </section>
                ))}
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default Genre;
