import { useLoaderData } from "react-router-dom";
import type { ArtistI } from "../types/musicSection";

export default function ArtistDetails() {
  const dataMusic = useLoaderData() as ArtistI;

  const albums = dataMusic.albums;

  return (
    <>
      <h1 className="art-detail-title">{dataMusic.name}</h1>

      {/* Show the picture of the artist */}
      <figure>
        <img style={{ width: "350px" }} src={dataMusic.imgSrc} alt="" />
        <figcaption>{dataMusic.description}</figcaption>
      </figure>

      {/* Show artist's albums */}
      {albums.map((alb) => (
        <figure key={alb.id}>
          <img src={alb.albumImg} alt="" />
          <figcaption key={alb.id}>{alb.albumName}</figcaption>
        </figure>
      ))}
    </>
  );
}
