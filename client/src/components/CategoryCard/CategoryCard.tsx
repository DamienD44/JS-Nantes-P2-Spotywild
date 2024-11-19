import "./CategoryCard.css";

interface CharacterI {
  id: number;
  titreImg: string;
  genre: string;
  color: string;
}

interface propChar {
  character: CharacterI;
}

function CategoryCard({ character }: propChar) {
  return (
    <>
      <figure
        className="category-card"
        style={{ backgroundColor: character.color }}
      >
        <figcaption>{character.genre}</figcaption>
        <img src={character.titreImg} alt="" />
      </figure>
    </>
  );
}

export default CategoryCard;
