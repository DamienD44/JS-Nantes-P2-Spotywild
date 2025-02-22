import { Link, useLoaderData, useLocation } from "react-router-dom";
import type { ArtistI } from "../types/musicSection";
import "../styles/ArtistsDetails.css";
import DOMPurify from "dompurify";
import HtmlReactParser from "html-react-parser";
import { Fragment, useEffect, useState } from "react";
import Album from "../components/Album/Album.tsx";

export default function ArtistDetails() {
  const [artDescription, setArtDescription] = useState<string>("");
  const dataMusic = useLoaderData() as ArtistI;

  const albums = dataMusic.albums;

  const urlDescription = useLocation();

  // Récupérer le nom et le prénom de l'artiste et le joindre avec _
  const getTheName = dataMusic.name.split(" ").join("_");

  // Retirer les accents dans le nom des artistes
  const accentsLetter = ["é", "è"];
  const delAccent = ["e", "e"];
  let prefix = "";

  for (let i = 0; i < getTheName.length; i++) {
    let currentLetter = getTheName[i];
    for (let n = 0; n < accentsLetter.length; n++) {
      if (accentsLetter[n] === currentLetter) {
        currentLetter = delAccent[n];
      }
    }
    prefix += currentLetter;
  }

  const splitUrlDescription = `${prefix}_${urlDescription.pathname.split("/").slice(-2).join("_")}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/${splitUrlDescription}.html`,
        );

        if (!response.ok) {
          throw new Error(
            `Le contenu HTML pour la description de ${splitUrlDescription}.html n'a pas été trouvé !`,
          );
        }

        const getHtmlContent = await response.text();

        const purifyContent = DOMPurify.sanitize(getHtmlContent);

        setArtDescription(purifyContent);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [splitUrlDescription]);

  return (
    <>
      <section className="art-detail-section-container">
        <h1 className="art-detail-title">{dataMusic.name}</h1>

        {/* Show the picture of the artist */}
        <figure className="art-detail-figure-container">
          <img
            className="art-detail-img-artist"
            src={dataMusic.imgSrc}
            alt=""
          />
          <figcaption className="art-detail-figcaption-artist">
            {HtmlReactParser(artDescription)}
          </figcaption>
        </figure>

        {/* Show artist's albums */}
        <section className="alb-detail-section-container">
          {albums.map((alb) => {
            return (
              <Fragment key={alb.id}>
                <Link
                  key={alb.id}
                  to={`/titledetails/${alb.albumName}/${alb.songs}`}
                >
                  <Album
                    albumImg={alb.albumImg}
                    albumName={alb.albumName}
                    songs={alb.songs}
                  />
                </Link>
              </Fragment>
            );
          })}
        </section>
      </section>
    </>
  );
}
