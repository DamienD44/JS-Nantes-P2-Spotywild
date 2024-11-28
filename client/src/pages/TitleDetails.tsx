import "../components/TitleCard/TitleCard.css";
import { useLoaderData } from "react-router-dom";
import type { AlbumI } from "../types/musicSection";
import "../styles/TitleDetails.css";
import AudioPlayer from "../components/AudioPlayer/MusicPlayer";

export default function TitleDetails() {
  const data = useLoaderData() as AlbumI;

  const albumImage = data.albumImg;
  const albumName = data.albumName;
  const listSongs = data.songs;

  return (
    <>
      <section className="titles-container">
        <h1 className="title-h1">{albumName}</h1>
        <img className="title-img" src={albumImage} alt="" />
        <section className="title-songs-list">
          {listSongs.map((el) => {
            return typeof el === "string" ? null : (
              <AudioPlayer
                key={el.id}
                id={el.id}
                src={el.src}
                title={el.title}
                imgAlbum={albumImage}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
