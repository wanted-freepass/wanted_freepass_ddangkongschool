import type { NextPage } from 'next';
import Carousel from '../components/Carousel/carousel';
import Main from '../components/Main/Main';
import YellowBanner from '../components/YellowBanner/YellowBanner';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
      <Carousel />
    </>
  );
};

export default Home;
