import type { NextPage } from 'next';
import BooksCarouselPage from '../components/BooksCarouselPage/BooksCarouselPage';
import Main from '../components/Main/Main';
import VideoBanner from '../components/VideoBanner';
import YellowBanner from '../components/YellowBanner/YellowBanner';
import FeaturePage from '../components/FeaturePage/FeaturePage';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <VideoBanner />
      <BooksCarouselPage />
      <FeaturePage />
    </>
  );
};

export default Home;
