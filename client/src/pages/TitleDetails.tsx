import "../components/TitleCard/TitleCard.css";
import { useLoaderData } from "react-router-dom";
import type { AlbumI } from "../types/musicSection";

export default function TitleDetails() {
  const data = useLoaderData() as AlbumI;
  const albumName = data.albumName;
  const listSongs = data.songs;

  console.table(listSongs);

  return (
    <>
      <h1>{albumName}</h1>
      {listSongs.map((el) => {
        return typeof el === "string" ? null : <p key={el.id}>{el.title}</p>;
      })}
    </>
  );
}
