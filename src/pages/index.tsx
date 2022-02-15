import type { NextPage } from 'next';
import BooksCarouselPage from '../components/BooksCarouselPage/BooksCarouselPage';
import Main from '../components/Main/Main';
import VideoBanner from '../components/VideoBanner';
import YellowBanner from '../components/YellowBanner/YellowBanner';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <VideoBanner />
      <BooksCarouselPage />
    </>
  );
};

export default Home;
