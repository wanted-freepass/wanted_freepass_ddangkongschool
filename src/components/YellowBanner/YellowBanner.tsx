import * as S from './YellowBanner.style';
import Image from 'next/image';

const YellowBanner = () => {
  return (
    <S.Container>
      <S.Wrap>
        <Image src="/images/logo.gif" width="101" height="75" alt="logo" />
        <S.Title>땅콩스쿨이란?</S.Title>
        <S.Text>
          실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,
          <br />
          친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
          서비스입니다.
        </S.Text>
      </S.Wrap>
    </S.Container>
  );
};

export default YellowBanner;
