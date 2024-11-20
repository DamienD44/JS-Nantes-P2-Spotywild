import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { ArtistI } from "../../types/musicSection";

function Carousel({ artists }: { artists: ArtistI[] }) {
  {
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
                <img src={art.imgSrc} alt={art.description} />
                <h2>{art.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="slider-containerAlbum">
          <Slider {...settings}>
            {albums.map((albums) => (
              <div key={albums.id} className="each-slide">
                <img src={albums.imgSrc} alt={albums.name} />
                <h2>{albums.name}</h2>
              </div>
            ))}
          </Slider>
        </div> */}
      </>
    );
  }
}

export default Carousel;
