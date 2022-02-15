import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <CarouselWrap>
      <SlickSlider {...settings}>
        <SliderImg src="/images/img_book_1.svg" />
        <SliderImg src="/images/img_book_2.svg" />
        <SliderImg src="/images/img_book_3.svg" />
        <SliderImg src="/images/img_book_4.svg" />
        <SliderImg src="/images/img_book_5.svg" />
        <SliderImg src="/images/img_book_6.svg" />
        <SliderImg src="/images/img_book_7.svg" />
        <SliderImg src="/images/img_book_8.svg" />
        <SliderImg src="/images/img_book_9.svg" />
      </SlickSlider>
    </CarouselWrap>
  );
};

export default Carousel;

const CarouselWrap = styled.div`
  margin-top: 100px;
  padding-bottom: 150px;
`;

const SlickSlider = styled(Slider)`
  button {
    display: none;
    right: 0;
  }

  .slick-next:before {
    display: none;
  }
`;

const SliderImg = styled.img``;
