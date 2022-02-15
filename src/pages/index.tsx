import type { NextPage } from 'next';
import CheckedBanner from '../components/CheckedBanner/CheckedBanner';
import BooksCarouselPage from '../components/BooksCarouselPage/BooksCarouselPage';
import VideoBanner from '../components/VideoBanner';
import YellowBanner from '../components/YellowBanner/YellowBanner';
import Main from '../components/Main/Main';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <VideoBanner />
      <CheckedBanner />
      <BooksCarouselPage />
    </>
  );
};

export default Home;
