import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { CarouselDataI } from "../../types/musicSection";

function Carousel({ artists }: { artists: Partial<CarouselDataI>[] }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
  };

  return (
    <>
      <div className="slider-containerArtist">
        <Slider {...settings}>
          {artists.map((art) => (
            <div key={art.id} className="each-slide">
              <img src={art.image} alt={art.description} />
              <h2>{art.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
