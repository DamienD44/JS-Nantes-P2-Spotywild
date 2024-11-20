import Carousel from "../components/Carousel/Carousel";
import "../components/Carousel/Carousel.css";
import "./Accueil.css";

import { useEffect, useState } from "react";
import type { MusicData } from "../types/musicSection";

function Accueil() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  const lstArtist = [];
  for (const genre of dataMusic) {
    for (const artist of genre.artistes) {
      lstArtist.push(artist);
    }
  }

  // const lstAlbums = [];
  // for (const artists of lstArtist) {
  //   for (const album of artists.albums) {
  //     console.table(album);
  //   }
  // }

  return (
    <>
      {/* : { artists: ArtistI[]  */}
      <Carousel artists={lstArtist} />
      {/* {dataMusic.map((el) => {
        return <MusicSections key={el.id} Artists={el.artistes} />;
      })} */}
    </>
  );
}

export default Accueil;
