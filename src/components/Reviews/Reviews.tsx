import type { NextPage } from 'next';
import * as S from './Reviews.style';

const Reviews: NextPage = () => {
  return (
    <S.ReviewContainer>
      <S.BackgroundImage>
        <S.AroundImage src="images/section13-1.png" />
        <S.ImageBox>
          <S.ImageTitle src="images/section13-2.png" />
        </S.ImageBox>
        <S.ReviewId>dahyedahyunmom_amiejjerry</S.ReviewId>
        <S.ReviewText>
          <pre>
            밖에가서 놀고싶어도 `땅콩할 시간이야!` 라는 말에 군말없이 들어와
            착석하는 마법같은 시간..
          </pre>
          <pre>줄 줄 책을 읽고 생각 말하라고 하는게 아니라,</pre>
          <pre>재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다. </pre>
          <pre>
            월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로 키워드를
            통해 확실하게 기억할 수 있도록 해주는
          </pre>
          금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!
        </S.ReviewText>
        <S.Previousimg src="images/section13-3.png" />
        <S.NextImg src="images/section13-4.png" />
      </S.BackgroundImage>
    </S.ReviewContainer>
  );
};
export default Reviews;
