import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageGallery = () => {
  const images = [
    "/images/show1.jpg",
    "/images/show2.jpg",
    "/images/show3.jpg",
    "/images/show4.jpg",
    "/images/show5.jpg",
    "/images/show6.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="sliderItem">
          <img
            src={image}
            alt={`show${index + 1}`}
            className="responsiveImage"
          />
        </div>
      ))}
    </Slider>
  );
};
