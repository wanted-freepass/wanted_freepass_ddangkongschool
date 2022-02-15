import type { NextPage } from 'next';
import Reviews from '../components/Reviews/Reviews';
import Carousel from '../components/Carousel/carousel';
import Downloads from '../components/Downloads/Downloads';

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <Reviews />
      <Downloads />
    </>
  );
};

export default Home;
