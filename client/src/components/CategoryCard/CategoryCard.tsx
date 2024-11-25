import "./CategoryCard.css";
import { Link } from "react-router-dom";

import type { MusicData } from "../../types/musicSection";

function CategoryCard({ color, titreImg, genre }: MusicData) {
  return (
    <>
      <Link to={`/Genre/${genre}`}>
        <figure className="category-card" style={{ backgroundColor: color }}>
          <figcaption>{genre}</figcaption>
          <img src={titreImg} alt="" />
        </figure>
      </Link>
    </>
  );
}

export default CategoryCard;
