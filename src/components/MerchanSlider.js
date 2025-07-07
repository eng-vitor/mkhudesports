import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 8000
  };
  return (
    <Slider {...settings} className='slider-merchan'>
      <div>
        <img src='./slider_1.png'/>
      </div>
      <div>
        <img src='./slider_2.png'/>
      </div>
      <div>
        <img src='./slider_3.png'/>
      </div>
    </Slider>
  );
}