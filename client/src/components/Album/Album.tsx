import type { AlbumI } from "../../types/musicSection";

export default function Album({ albumImg, albumName }: Partial<AlbumI>) {
  return (
    <figure className="alb-detail-figure-container">
      <img src={albumImg} alt="" />
      <figcaption>{albumName}</figcaption>
    </figure>
  );
}
