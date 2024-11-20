import Carousel from "../components/Carousel/Carousel";
import "../components/Carousel/Carousel.css";
import "./Accueil.css";

import { useEffect, useState } from "react";
import MusicSections from "../components/MusicSections/MusicSections";
import type { MusicData } from "../types/musicSection";

function Accueil() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  return (
    <>
      {dataMusic.map((el) => {
        return <MusicSections key={el.id} Artists={el.artistes} />;
      })}
    </>
  );
}

export default Accueil;
