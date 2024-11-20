import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MusicSections from "../MusicSections/MusicSections";
import dataBase from "../../assets/music-data.json";

function Carousel() {
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
            {artists.map((artist) => (
              <div key={artist.id} className="each-slide">
                <img src={artist.imgSrc} alt={artist.name} />
                <h2>{artist.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-containerAlbum">
          <Slider {...settings}>
            {albums.map((albums) => (
              <div key={albums.id} className="each-slide">
                <img src={albums.imgSrc} alt={albums.name} />
                <h2>{albums.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

export default Carousel;
