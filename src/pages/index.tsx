import type { NextPage } from 'next';
import Reviews from '../components/Reviews/Reviews';
import Downloads from '../components/Downloads/Downloads';
import Carousel from '../components/Carousel/carousel';
import BooksCarouselPage from '../components/BooksCarouselPage/BooksCarouselPage';
import Main from '../components/Main/Main';
import VideoBanner from '../components/VideoBanner';
import YellowBanner from '../components/YellowBanner/YellowBanner';
import Media from '../components/Media/Media';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <VideoBanner />
      <Media />
      <BooksCarouselPage />
      <Reviews />
      <Downloads />
    </>
  );
};

export default Home;
