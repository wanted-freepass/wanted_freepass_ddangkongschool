import Image from 'next/image';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Main>
      <S.YellowAccent>
        <S.Line>
          <Image src="/images/line.png" width="220" height="11" alt="star" />
        </S.Line>
        <S.Star>
          <Image src="/images/star.png" width="48" height="48" alt="line" />
        </S.Star>
      </S.YellowAccent>

      <S.TitleWrap>
        <S.Title>
          책 읽는 재미,
          <br />
          땅콩스쿨이
          <br />
          만들어줄게요!
        </S.Title>
      </S.TitleWrap>

      <S.MouseWrap>
        <S.Mouse>
          <Image src="/images/mouse.png" width="48" height="48" alt="mouse" />
        </S.Mouse>
      </S.MouseWrap>

      <S.MainWrap>
        <S.MainImage>
          <Image
            src="/images/main.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            // width="1920"
            // height="1080"
            alt="main"
          />
        </S.MainImage>
      </S.MainWrap>
    </S.Main>
  );
};

export default Main;
