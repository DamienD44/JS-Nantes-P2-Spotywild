import Carousel from "../components/Carousel/Carousel";
import "../components/Carousel/Carousel.css";
import "./Home.css";

import { useEffect, useState } from "react";

import type { CarouselDataI, MusicData } from "../types/musicSection";

function Accueil() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  const artistsCarouselData: Partial<CarouselDataI>[] = [];

  for (const genre of dataMusic) {
    for (const artist of genre.artistes) {
      const carouselData: Partial<CarouselDataI> = {};

      carouselData.image = artist.imgSrc;
      carouselData.description = artist.description;
      carouselData.name = artist.name;
      carouselData.id = artist.id;

      artistsCarouselData.push(carouselData);
    }
  }

  const albumsCarouselData: Partial<CarouselDataI>[] = [];

  for (const data of dataMusic) {
    for (const art of data.artistes) {
      for (const alb of art.albums) {
        const carouselData: Partial<CarouselDataI> = {};

        carouselData.image = alb.albumImg;
        carouselData.description = alb.description;
        carouselData.name = alb.albumName;
        carouselData.id = alb.id;

        albumsCarouselData.push(carouselData);
      }
    }
  }

  return (
    <>
      <section className="section-carousel">
        <h2 className="carousel-title">Artists</h2>
        <Carousel artists={artistsCarouselData} />
        <h2 className="carousel-title">Albums</h2>
        <Carousel artists={albumsCarouselData} />
      </section>
    </>
  );
}
export default Accueil;
