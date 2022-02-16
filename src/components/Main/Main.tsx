import * as S from './Main.style';
import { LINE, STAR, MOUSE } from './data';

const Main = () => {
  return (
    <S.Main>
      <S.YellowAccent>
        <S.Line>
          <S.Image
            src={LINE.SRC}
            width={LINE.WIDTH}
            height={LINE.HEIGHT}
            alt={LINE.ALT}
          />
        </S.Line>
        <S.Star>
          <S.Image
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
          <S.Image
            src={MOUSE.SRC}
            width={MOUSE.WIDTH}
            height={MOUSE.HEIGHT}
            alt={MOUSE.ALT}
          />
        </S.Mouse>
      </S.MouseWrap>

      <S.MainWrap>
        <S.MainImage>
          <S.ImageBg />
          <S.ImagePhoto />
        </S.MainImage>
      </S.MainWrap>
    </S.Main>
  );
};

export default Main;
