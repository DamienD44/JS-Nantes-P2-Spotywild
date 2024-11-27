import "./CategoryCard.css";

import type { MusicData } from "../../types/musicSection";

function CategoryCard({ color, titreImg, genre }: MusicData) {
  return (
    <>
      <figure className="category-card" style={{ backgroundColor: color }}>
        <figcaption>{genre}</figcaption>
        <img src={titreImg} alt="" />
      </figure>
    </>
  );
}

export default CategoryCard;
