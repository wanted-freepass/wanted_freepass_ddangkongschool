import type { NextPage } from 'next';
import Nav from '../components/Nav/Nav';
import BooksCarouselPage from '../components/BooksCarouselPage/BooksCarouselPage';

const Home: NextPage = () => {
  return (
    <>
      <div>안녕</div>
      <Nav />
      <BooksCarouselPage />
      {/* <Test /> */}
    </>
  );
};

export default Home;
