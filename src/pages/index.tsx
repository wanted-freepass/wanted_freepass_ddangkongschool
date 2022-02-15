import type { NextPage } from 'next';
import Carousel from '../components/Carousel/carousel';
import CheckedBanner from '../components/CheckedBanner/CheckedBanner';
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
      <Carousel />
    </>
  );
};

export default Home;
