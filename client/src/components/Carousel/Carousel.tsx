import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import type { CarouselDataI } from "../../types/musicSection";

function Carousel({ artists }: { artists: Partial<CarouselDataI>[] }) {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 450) {
        setSlidesToShow(1);
      } else if (screenWidth < 1025) {
        setSlidesToShow(2);
      } else if (screenWidth < 1500) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: slidesToShow,
    speed: 500,
    arrows: true,
  };

  return (
    <>
      <div className="slider-container-artist">
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
