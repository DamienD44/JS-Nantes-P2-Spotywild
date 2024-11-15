import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
];

/*function Carousel() {
  return (
    <div
      className="carousel-container"
      style={{ width: "15%", margin: "0 auto" }}
    >
      <Slider>
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="each-slide"
            style={{ textAlign: "center" }}
          >
            <img
              src={artist.imgSrc}
              alt={artist.name}
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
            />
            <h2>{artist.name}</h2>
            <p>{artist.country}</p>
            <p>{artist.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;*/

function Carousel() {
  {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="each-slide"
              style={{ textAlign: "center" }}
            >
              <img
                src={artist.imgSrc}
                alt={artist.name}
                style={{
                  width: "100px",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
              <h2>{artist.name}</h2>
              <p>{artist.country}</p>
              <p>{artist.description}</p>
            </div>
          ))}

          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
