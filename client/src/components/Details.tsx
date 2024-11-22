import { useParams, Link, useLoaderData } from "react-router-dom";
import AlbumI from "../types/musicSection";

const albums = [
  {
    id: 1,
    name: "David Bowie",
    country: "United Kingdom",
    imgSrc: "https://img-lumas.b-cdn.net/showimg_gve35_search.jpg",
    description: "Iconic musician known for his glam rock style.",
    albums: [
      {
        id: 1,
        albumName: "Let's Dance",
        albumImg:
          "https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/1/0/6/0724352189601/tsp20120925110227/Let-s-dance.jpg",
        description:
          "Let's Dance est un album emblématique de David Bowie, sorti en 1983...",
        songs: [
          "Modern Love",
          "China Girl",
          "Let's Dance",
          "Without You",
          "Ricochet",
          "Criminal World",
          "Cat People",
          "Shake It",
        ],
      },
      {
        id: 2,
        albumName: "The Man Who Sold the World",
        albumImg:
          "https://static.fnac-static.com/multimedia/Images/FR/NR/c4/a6/76/7775940/1507-1/tsp20160208120357/Man-who-sold-the-world.jpg",
        description:
          "The Man Who Sold the World est le troisième album studio de David Bowie...",
        songs: [
          "The Width of a Circle",
          "All the Madmen",
          "Black Country Rock",
          "After All",
          "Running Gun Blues",
          "Saviour Machine",
          "She Shook Me Cold",
          "The Man Who Sold the World",
          "The Supermen",
        ],
      },
      {
        id: 3,
        albumName: "Heroes",
        albumImg:
          "https://i.scdn.co/image/ab67616d0000b27335e493b3a60aa4bcaa91344f",
        description:
          "Heroes est le douzième album studio de David Bowie, sorti en 1977...",
        songs: [
          "Beauty and the Beast",
          "Joe the Lion",
          "Heroes",
          "Sons of the Silent Age",
          "Blackout",
          "V-2 Schneider",
          "Sense of Doubt",
          "Moss Garden",
          "Neuköln",
          "The Secret Life of Arabia",
        ],
      },
    ],
  },
];

function AlbumDetails() {
  const data = useLoaderData();

  const album = albums.find((album) => album.id); // Trouve l'album correspondant
  if (!album) {
    return <h2>Album non trouvé</h2>;
  }

  return (
    <div>
      <h1>{album.albumName}</h1>
      <img src={album.albumImg} alt={album.albumName} />
      <p>{album.description}</p>
      <h2>Liste des titres :</h2>
      <ul>
        {album.songs.map((song, id) => (
          <li key={id}>{song}</li>
        ))}
      </ul>
      <Link to="/Albums">Retour à la liste des albums</Link>
    </div>
  );
}

export default AlbumDetails;
