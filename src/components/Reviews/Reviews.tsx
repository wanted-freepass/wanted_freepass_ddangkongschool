import * as S from './Reviews.style';
import { useState } from 'react';
import { REVIEW_DATA } from './data';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide >= REVIEW_DATA.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev: number) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(REVIEW_DATA.length - 1);
    } else {
      setCurrentSlide((prev: number) => prev - 1);
    }
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftButton onClick={prevSlide}>
          <HiOutlineChevronLeft />
        </S.LeftButton>
        <S.RightButton onClick={nextSlide}>
          <HiOutlineChevronRight />
        </S.RightButton>
        {REVIEW_DATA.map(({ id, user_id, review }) => (
          <S.Content key={id} currentSlide={currentSlide}>
            <S.User>{user_id}</S.User>
            <S.Review>{review}</S.Review>
          </S.Content>
        ))}
      </S.Container>
      <S.Black />
      <S.Background />
    </S.Wrapper>
  );
};

export default Reviews;
