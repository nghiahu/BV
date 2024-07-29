import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousels.scss'
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="">
      <Carousel.Item>
        <img
          className="imgCarousel"
          src="https://file.hstatic.net/1000360516/article/untitled-1_c631fb148fbc4f3b8d61c2c8e0959c0c.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgCarousel"
          src="https://theme.hstatic.net/200000065946/1001187274/14/slideshow_2.jpg?v=596"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgCarousel"
          src="//theme.hstatic.net/200000065946/1001187274/14/slideshow_1_master.jpg?v=596"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;