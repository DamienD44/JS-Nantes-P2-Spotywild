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
    <main>
      <section className="home-main">
        <h1>Page Accueil</h1>
        <Carousel />
      </section>
      {dataMusic.map((el) => {
        console.info(el);
        return <MusicSections key={el.id} Artists={el.artistes} />;
      })}
    </main>
  );
}

export default Accueil;
