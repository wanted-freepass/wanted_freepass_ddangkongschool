import type { NextPage } from 'next';
import Main from '../components/Main/Main';
import YellowBanner from '../components/YellowBanner/YellowBanner';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <YellowBanner />
    </>
  );
};

export default Home;
