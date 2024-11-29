import { useEffect, useState } from "react";
import MusicSections from "../components/MusicSections/MusicSections";
import type { AlbumI, MusicData } from "../types/musicSection";
import "./Albums.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState<AlbumI[]>([]);
  const urlLocation = useLocation();

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data: MusicData[]) => {
        const allAlbums: AlbumI[] = data.reduce((acc: AlbumI[], item) => {
          const artistAlbums = item.artistes.reduce(
            (artistAcc: AlbumI[], artist) => {
              if (artist.albums) {
                return artistAcc.concat(artist.albums);
              }
              return artistAcc;
            },
            [],
          );
          return acc.concat(artistAlbums);
        }, []);
        setAlbums(allAlbums);
      })
      .catch((err) => console.error("Erreur lors du fetch", err));
  }, []);

  return (
    <>
      <h1 className="albums-title">Les Albums</h1>

      {/* <section className="section-albums"> */}
      {albums.map((album) => (
        <Link key={album.id} to={`${urlLocation.pathname}details/${album.id}`}>
          <MusicSections
            key={album.id}
            artists={[
              {
                id: album.id,
                name: album.albumName,
                country: "",
                imgSrc: album.albumImg,
                description: album.description,
                albums: [],
              },
            ]}
            genreId={album.id}
          />
        </Link>
      ))}
      {/* </section> */}
    </>
  );
}

export default Albums;
