import { useEffect, useState } from "react";
import MusicSections from "../components/MusicSections/MusicSections";
import type { MusicData } from "../types/musicSection";
import "./Artists.css";

function Artists() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  return (
    <>
      <h1 className="artistes-title">Les Artistes</h1>
      {dataMusic.map((el) => {
        return <MusicSections key={el.id} Artists={el.artistes} />;
      })}
    </>
  );
}

export default Artists;
