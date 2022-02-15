import type { NextPage } from 'next';
import Carousel from '../components/Carousel/carousel';
import Main from '../components/Main/Main';
import VideoBanner from '../components/VideoBanner';
import YellowBanner from '../components/YellowBanner/YellowBanner';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <VideoBanner />
      <Carousel />
    </>
  );
};

export default Home;
