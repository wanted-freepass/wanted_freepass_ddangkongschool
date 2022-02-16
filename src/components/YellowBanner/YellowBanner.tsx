import * as S from './YellowBanner.style';
import { useResize } from '../../hooks/useResize';

interface Logo {
  SRC: string;
  WIDTH: string;
  HEIGHT: string;
  ALT: string;
}

const YellowBanner = () => {
  const windowDimensions = useResize();
  const width: number | null = windowDimensions.width;
  const resizeWindowX: JSX.Element | null = width! <= 1200 ? <br /> : null;
  const resizeWindowXOver: JSX.Element | null = width! >= 1200 ? <br /> : null;

  const LOGO: Logo = {
    SRC: '/images/logo.gif',
    WIDTH: '101',
    HEIGHT: '75',
    ALT: 'logo',
  };

  return (
    <S.Container>
      <S.Wrap>
        <S.Image
          src={LOGO.SRC}
          width={LOGO.WIDTH}
          height={LOGO.HEIGHT}
          alt={LOGO.ALT}
        />
        <S.Title>땅콩스쿨이란?</S.Title>
        <S.Text>
          실시간(LIVE)으로, 아이들이 좋아하는{resizeWindowX} 캐릭터 선생님을
          통해,
          {resizeWindowX}
          {resizeWindowXOver}
          친구들과 함께 창의독서, 퀴즈 등을{resizeWindowX} 재미있게 즐길 수 있는
          온라인 서비스입니다.
        </S.Text>
      </S.Wrap>
    </S.Container>
  );
};

export default YellowBanner;
