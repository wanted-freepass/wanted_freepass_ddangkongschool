import Image from 'next/image';
import * as S from './Main.style';
import { LINE, STAR, MOUSE, MAIN_IMAGE_BG, MAIN_IMAGE } from './data';

const Main = () => {
  return (
    <S.Main>
      <S.YellowAccent>
        <S.Line>
          <Image
            src={LINE.SRC}
            width={LINE.WIDTH}
            height={LINE.HEIGHT}
            alt={LINE.ALT}
          />
        </S.Line>
        <S.Star>
          <Image
            src={STAR.SRC}
            width={STAR.WIDTH}
            height={STAR.HEIGHT}
            alt={STAR.ALT}
          />
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
          <Image
            src={MOUSE.SRC}
            width={MOUSE.WIDTH}
            height={MOUSE.HEIGHT}
            alt={MOUSE.ALT}
          />
        </S.Mouse>
      </S.MouseWrap>

      <S.MainWrap>
        <S.MainImage>
          <Image
            src={MAIN_IMAGE_BG.SRC}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={MAIN_IMAGE_BG.ALT}
          />
          <Image
            src={MAIN_IMAGE.SRC}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={MAIN_IMAGE.ALT}
          />
        </S.MainImage>
      </S.MainWrap>
    </S.Main>
  );
};

export default Main;
