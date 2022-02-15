import type { NextPage } from 'next';
import Reviews from '../components/Reviews/Reviews';
import Downloads from '../components/Downloads/Downloads';
import CheckedBanner from '../components/CheckedBanner/CheckedBanner';
import BooksCarouselPage from '../components/BooksCarouselPage/BooksCarouselPage';
import VideoBanner from '../components/VideoBanner';
import YellowBanner from '../components/YellowBanner/YellowBanner';
import FeaturePage from '../components/FeaturePage/FeaturePage';
import Media from '../components/Media/Media';
import Main from '../components/Main/Main';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <VideoBanner />
      <CheckedBanner />
      <Media />
      <BooksCarouselPage />
      <FeaturePage />
      <Reviews />
      <Downloads />
    </>
  );
};

export default Home;
