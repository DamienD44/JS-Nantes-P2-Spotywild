import "./Carousel.css";
import data from "../../assets/music-data.json";

import Slider from 'react-slick';
interface Character{
    titreImg: string
    genre:string
    


}
interface propChar{
    character: Character;

}


function Carousel  ({character}: propChar) {
  // Configuration du ccarousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img src={item.titreImgRock} alt={`Slide ${index + 1}`} style={{ width: '100%', maxHeight: '500px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
    










     

export default Carousel
