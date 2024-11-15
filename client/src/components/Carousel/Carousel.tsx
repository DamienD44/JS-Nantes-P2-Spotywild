import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataBase from "../../assets/music-data.json";

const artists = [
  {
    id: 1,
    name: "David Bowie",
    country: "United Kingdom",
    imgSrc: "https://img-lumas.b-cdn.net/showimg_gve35_search.jpg",
    description: "Iconic musician known for his glam rock style.",
  },
  {
    id: 2,
    name: "Queen",
    country: "United Kingdom",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/fr/thumb/e/ef/Logo_Queen.png/213px-Logo_Queen.png",
    description: "Legendary rock band led by Freddie Mercury.",
  },
  {
    id: 3,
    name: "The Rolling Stones",
    country: "United Kingdom",
    imgSrc:
      "https://i.pinimg.com/564x/81/22/b4/8122b48b0921e63eb961341beb193bf4.jpg",
    description: "Pioneering rock band known for their energetic performances.",
  },
  {
    id: 4,
    name: "Nirvana",
    country: "United States",
    imgSrc:
      "https://e7.pngegg.com/pngimages/726/12/png-clipart-nirvana-logo-decal-nevermind-others-miscellaneous-angle-thumbnail.png",
    description: "Influential grunge band led by Kurt Cobain.",
  },
  {
    id: 5,
    name: "Led Zeppelin",
    country: "United Kingdom",
    imgSrc:
      "https://w7.pngwing.com/pngs/160/215/png-transparent-led-zeppelin-iv-led-zeppelin-iii-logo-cenefas-white-mammal-text-thumbnail.png",
    description: "Famous for their hard rock sound and epic performances.",
  },
  {
    id: 6,
    name: "AC/DC",
    country: "Australia",
    imgSrc:
      "https://e7.pngegg.com/pngimages/625/728/png-clipart-ac-dc-logo-illustration-acdc-lane-ac-dc-logo-back-in-black-high-voltage-high-voltage-angle-text-thumbnail.png",
    description: "Legendary rock band known for their high-voltage sound.",
  },
  {
    id: 7,
    name: "Pink Floyd",
    country: "United Kingdom",
    imgSrc:
      "https://seeklogo.com/images/P/pink-floyd-logo-97F903EC9B-seeklogo.com.png",
    description: "Innovative band known for their progressive rock style.",
  },
];

function Carousel() {
  {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      arrows: true,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {artists.map((artist) => (
            <div key={artist.id} className="each-slide">
              <img src={artist.imgSrc} alt={artist.name} />
              <h2>{artist.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
